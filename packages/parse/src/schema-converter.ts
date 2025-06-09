import * as t from '@babel/types';
import traverse from '@babel/traverse';
import * as parser from '@babel/parser';
import { JSONSchema } from './types';

export class SchemaConverter {
  // Map of interface declarations for schema inlining
  private interfaceMap: Record<string, t.TSInterfaceDeclaration> = {};

  constructor(ast?: parser.ParseResult<t.File>) {
    if (ast) {
      this.gatherInterfaces(ast);
    }
  }

  // Collect interface declarations and type aliases from AST
  public gatherInterfaces(ast: parser.ParseResult<t.File>): void {
    this.interfaceMap = {};
    traverse(ast, {
      TSInterfaceDeclaration: (path) => {
        this.interfaceMap[path.node.id.name] = path.node;
      },
      TSTypeAliasDeclaration: (path) => {
        // Convert type alias to interface-like structure for consistent handling
        const interfaceNode: t.TSInterfaceDeclaration = {
          type: 'TSInterfaceDeclaration',
          id: path.node.id,
          body: path.node.typeAnnotation as any, // Will be handled by typeToSchema
          typeParameters: path.node.typeParameters,
          extends: null,
          declare: false,
          loc: path.node.loc,
          range: path.node.range,
          leadingComments: path.node.leadingComments,
          innerComments: path.node.innerComments,
          trailingComments: path.node.trailingComments,
        };
        this.interfaceMap[path.node.id.name] = interfaceNode;
      },
    });
  }

  // Recursively convert TypeScript types to JSON-schema
  public typeToSchema(node: t.TSType): JSONSchema {
    // primitive keywords
    if (t.isTSStringKeyword(node)) return { type: 'string' };
    if (t.isTSNumberKeyword(node)) return { type: 'number' };
    if (t.isTSBooleanKeyword(node)) return { type: 'boolean' };
    if (t.isTSNullKeyword(node)) return { type: 'null' };
    if (t.isTSUndefinedKeyword(node)) return { type: 'null' }; // JSON Schema doesn't have undefined, use null
    // literal types (e.g. 'on', 1, true)
    if (t.isTSLiteralType(node)) {
      const lit = node.literal;
      if (t.isStringLiteral(lit)) return { const: lit.value };
      if (t.isNumericLiteral(lit)) return { const: Number(lit.value) };
      if (t.isBooleanLiteral(lit)) return { const: lit.value };
      return {};
    }
    if (t.isTSAnyKeyword(node)) return {};
    if (t.isTSVoidKeyword(node)) return {};
    // array types
    if (t.isTSArrayType(node)) {
      return { type: 'array', items: this.typeToSchema(node.elementType) };
    }
    // tuple types
    if (t.isTSTupleType(node)) {
      return {
        type: 'array',
        items: {
          anyOf: node.elementTypes.map((el) => {
            // Handle TSNamedTupleMember
            if (t.isTSNamedTupleMember && t.isTSNamedTupleMember(el)) {
              return this.typeToSchema(el.elementType);
            }
            return this.typeToSchema(el as t.TSType);
          }),
        },
      };
    }
    // object literal types
    if (t.isTSTypeLiteral(node)) {
      const props: Record<string, JSONSchema> = {};
      const required: string[] = [];
      let indexSchema: JSONSchema | undefined;
      for (const member of node.members) {
        // normal property
        if (
          t.isTSPropertySignature(member) &&
          t.isIdentifier(member.key) &&
          member.typeAnnotation
        ) {
          const key = member.key.name;
          props[key] = this.typeToSchema(member.typeAnnotation.typeAnnotation);
          if (!member.optional) required.push(key);
        }
        // index signature [key: string]: Type
        else if (t.isTSIndexSignature(member) && member.typeAnnotation) {
          indexSchema = this.typeToSchema(member.typeAnnotation.typeAnnotation);
        }
      }
      // only index signature, no named properties
      if (Object.keys(props).length === 0 && indexSchema) {
        return { type: 'object', additionalProperties: indexSchema };
      }
      // object with named properties (and maybe index signature)
      const schema: JSONSchema = { type: 'object' };
      if (Object.keys(props).length) schema.properties = props;
      if (required.length) schema.required = required;
      if (indexSchema) schema.additionalProperties = indexSchema;
      return schema;
    }
    // references (Promise, Set, Map, interfaces, Array)
    if (t.isTSTypeReference(node) && t.isIdentifier(node.typeName)) {
      const name = node.typeName.name;
      // unwrap Promise<T>
      if (name === 'Promise' && node.typeParameters?.params.length === 1) {
        return this.typeToSchema(node.typeParameters.params[0]);
      }
      // unwrap Array<T>
      if (name === 'Array' && node.typeParameters?.params.length === 1) {
        return {
          type: 'array',
          items: this.typeToSchema(node.typeParameters.params[0]),
        };
      }
      // handle Set<T> as array
      if (name === 'Set' && node.typeParameters?.params.length === 1) {
        return {
          type: 'array',
          items: this.typeToSchema(node.typeParameters.params[0]),
        };
      }
      // handle Map<K,V> as object
      if (name === 'Map' && node.typeParameters?.params.length === 2) {
        return {
          type: 'object',
          additionalProperties: this.typeToSchema(node.typeParameters.params[1]),
        };
      }
      // inline interface or type alias
      const iface = this.interfaceMap[name];
      if (iface) {
        // Handle both interfaces (TSInterfaceBody) and type aliases (any TSType body)
        if (t.isTSInterfaceBody(iface.body)) {
          // Convert TSInterfaceBody to TSTypeLiteral for consistent handling
          const typeLiteral: t.TSTypeLiteral = {
            type: 'TSTypeLiteral',
            members: iface.body.body,
            loc: iface.body.loc,
            range: iface.body.range,
            leadingComments: iface.body.leadingComments,
            innerComments: iface.body.innerComments,
            trailingComments: iface.body.trailingComments,
          };
          return this.typeToSchema(typeLiteral);
        } else {
          return this.typeToSchema(iface.body as t.TSType);
        }
      }
      // For unknown types, return empty schema instead of $ref
      return {};
    }
    // union types
    if (t.isTSUnionType(node)) {
      // Check if all union members are literals of the same type
      const literalValues: any[] = [];
      let allSameTypeLiterals = true;
      let literalType: string | null = null;

      for (const unionType of node.types) {
        if (t.isTSLiteralType(unionType)) {
          const lit = unionType.literal;
          if (t.isStringLiteral(lit)) {
            if (literalType === null) literalType = 'string';
            else if (literalType !== 'string') allSameTypeLiterals = false;
            literalValues.push(lit.value);
          } else if (t.isNumericLiteral(lit)) {
            if (literalType === null) literalType = 'number';
            else if (literalType !== 'number') allSameTypeLiterals = false;
            literalValues.push(Number(lit.value));
          } else if (t.isBooleanLiteral(lit)) {
            if (literalType === null) literalType = 'boolean';
            else if (literalType !== 'boolean') allSameTypeLiterals = false;
            literalValues.push(lit.value);
          } else {
            allSameTypeLiterals = false;
          }
        } else {
          allSameTypeLiterals = false;
        }
      }

      // If all union members are literals of the same type, use enum
      if (allSameTypeLiterals && literalValues.length > 0) {
        return { type: literalType!, enum: literalValues };
      }

      // Otherwise, use anyOf with individual schemas
      const schemas = node.types.map((tn) => this.typeToSchema(tn));
      const unique = Array.from(new Map(schemas.map((s) => [JSON.stringify(s), s])).values());
      return { anyOf: unique };
    }
    // fallback empty schema
    return {};
  }
}
