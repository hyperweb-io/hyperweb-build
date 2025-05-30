// @ts-nocheck
import * as parser from '@babel/parser';
import traverse, { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import generate from '@babel/generator';

export interface AnalysisResult {
  queries: MethodInfo[];
  mutations: MethodInfo[];
}

export interface MethodInfo {
  name: string;
  params: { name: string; type: string }[];
  returnType: string;
}

// JSON-schema types
export interface JSONSchema {
  type?: string;
  properties?: Record<string, JSONSchema>;
  required?: string[];
  items?: JSONSchema;
  additionalProperties?: JSONSchema;
  anyOf?: JSONSchema[];
  $ref?: string;
}

export interface SchemaMethodInfo {
  name: string;
  params: { name: string; schema: JSONSchema }[];
  returnSchema: JSONSchema;
}

export interface SchemaAnalysisResult {
  queries: SchemaMethodInfo[];
  mutations: SchemaMethodInfo[];
}

export class ContractAnalyzer {
  private ast: parser.ParseResult<t.File> | null = null;

  /**
   * Analyzes a TypeScript contract class to identify query and mutation methods
   * @param code The TypeScript source code to analyze
   * @returns An object containing arrays of query and mutation method names
   */
  public analyzeFromCode(code: string): AnalysisResult {
    this.parseCode(code);
    return this.analyze();
  }

  /**
   * Parses the TypeScript code into an AST
   * @param code The TypeScript source code to parse
   */
  private parseCode(code: string): void {
    this.ast = parser.parse(code, {
      sourceType: 'module',
      plugins: ['typescript', 'classProperties', 'decorators-legacy'],
    });
  }

  /**
   * Analyzes the parsed AST to identify query and mutation methods
   * @returns An object containing arrays of query and mutation method names
   */
  private analyze(): AnalysisResult {
    if (!this.ast) {
      throw new Error('No code has been parsed. Call analyzeFromCode first.');
    }

    const queries: MethodInfo[] = [];
    const mutations: MethodInfo[] = [];
    let foundDefaultExport = false;

    const self = this;

    traverse(this.ast, {
      // Handle both export default class and export { Contract as default }
      ExportDefaultDeclaration(path) {
        const declaration = path.node.declaration;
        
        // Check if the default export is a class declaration
        if (t.isClassDeclaration(declaration)) {
          foundDefaultExport = true;
          self.analyzeClassMethods(path, declaration, queries, mutations);
        }
      },
      // Handle named exports with default alias
      ExportNamedDeclaration(path) {
        const specifiers = path.node.specifiers;
        for (const specifier of specifiers) {
          if (
            t.isExportSpecifier(specifier) &&
            specifier.exported.type === 'Identifier' &&
            specifier.exported.name === 'default'
          ) {
            // Find the variable declaration for the exported class
            const binding = path.scope.getBinding(specifier.local.name);
            if (binding) {
              const declaration = binding.path.node;
              if (
                t.isVariableDeclarator(declaration) &&
                t.isClassExpression(declaration.init)
              ) {
                foundDefaultExport = true;
                self.analyzeClassMethods(binding.path, declaration.init, queries, mutations);
              }
            }
          }
        }
      },
    });

    if (!foundDefaultExport) {
      throw new Error('No default exported class found in the code');
    }

    return { queries, mutations };
  }

  /**
   * Analyzes methods within a class declaration or expression
   */
  private analyzeClassMethods(
    parentPath: NodePath,
    classNode: t.ClassDeclaration | t.ClassExpression,
    queries: MethodInfo[],
    mutations: MethodInfo[]
  ): void {
    parentPath.traverse({
      ClassMethod(methodPath: NodePath<t.ClassMethod>) {
        // Skip static methods and constructors
        if (methodPath.node.static || methodPath.node.kind === 'constructor') {
          return;
        }

        const methodName = methodPath.node.key.type === 'Identifier'
          ? methodPath.node.key.name
          : '';
        if (!methodName) return;

        // Collect parameters
        const params = methodPath.node.params.map(param => {
          if (t.isIdentifier(param)) {
            const name = param.name;
            let type = 'any';
            if (param.typeAnnotation) {
              // generate and compact the type annotation
              const rawType = generate(param.typeAnnotation.typeAnnotation).code;
              type = rawType.replace(/\n/g, ' ')
                            .replace(/;/g, '')
                            .replace(/\s+/g, ' ')
                            .trim();
            }
            return { name, type };
          } else {
            const code = generate(param).code;
            return { name: code, type: 'unknown' };
          }
        });

        // Collect return type
        let returnType = 'void';
        if (
          methodPath.node.returnType &&
          methodPath.node.returnType.typeAnnotation
        ) {
          // generate and compact the return type annotation
          const rawRet = generate(methodPath.node.returnType.typeAnnotation).code;
          returnType = rawRet.replace(/\n/g, ' ')
                             .replace(/;/g, '')
                             .replace(/\s+/g, ' ')
                             .trim();
        }

        let readsState = false;
        let writesState = false;
        let hasReturn = false;

        // Check for state access and return statements
        methodPath.traverse({
          MemberExpression(memberPath: NodePath<t.MemberExpression>) {
            const object = memberPath.node.object;
            const property = memberPath.node.property;

            // Check if this is a this.state access
            if (
              t.isThisExpression(object) &&
              t.isIdentifier(property) &&
              property.name === 'state'
            ) {
              // Check if this is part of an assignment
              const parent = memberPath.parentPath;
              if (
                t.isAssignmentExpression(parent.node) ||
                (t.isMemberExpression(parent.node) &&
                 t.isAssignmentExpression(parent.parentPath.node))
              ) {
                writesState = true;
              } else {
                readsState = true;
              }
            }
          },
          ReturnStatement(returnPath: NodePath<t.ReturnStatement>) {
            if (returnPath.node.argument) {
              hasReturn = true;
            }
          },
        });

        const methodInfo: MethodInfo = {
          name: methodName,
          params,
          returnType,
        };
        // If a method writes to state, it's a mutation; else if it reads state or returns something, it's a query
        if (writesState) {
          mutations.push(methodInfo);
        } else if (readsState || hasReturn) {
          queries.push(methodInfo);
        }
      },
    });
  }

  /**
   * Parses and analyzes to produce JSON-schema result
   */
  public analyzeWithSchema(code: string): SchemaAnalysisResult {
    this.parseCode(code);
    this.gatherInterfaces();
    return this.analyzeSchema();
  }

  // Map of interface declarations for schema inlining
  private interfaceMap: Record<string, t.TSInterfaceDeclaration> = {};

  // Collect interface declarations from AST
  private gatherInterfaces(): void {
    this.interfaceMap = {};
    traverse(this.ast!, {
      TSInterfaceDeclaration: path => {
        this.interfaceMap[path.node.id.name] = path.node;
      },
    });
  }

  // Recursively convert TypeScript types to JSON-schema
  private typeToSchema(node: t.TSType): JSONSchema {
    // primitive keywords
    if (t.isTSStringKeyword(node)) return { type: 'string' };
    if (t.isTSNumberKeyword(node)) return { type: 'number' };
    if (t.isTSBooleanKeyword(node)) return { type: 'boolean' };
    // literal types (e.g. 'on', 1, true)
    if (t.isTSLiteralType(node)) {
      const lit = node.literal;
      if (t.isStringLiteral(lit)) return { type: 'string' };
      if (t.isNumericLiteral(lit)) return { type: 'number' };
      if (t.isBooleanLiteral(lit)) return { type: 'boolean' };
      return {};
    }
    if (t.isTSAnyKeyword(node)) return {};
    if (t.isTSVoidKeyword(node)) return { type: 'null' };
    // array types
    if (t.isTSArrayType(node)) {
      return { type: 'array', items: this.typeToSchema(node.elementType) };
    }
    // tuple types
    if (t.isTSTupleType(node)) {
      return {
        type: 'array',
        items: { anyOf: node.elementTypes.map(el => this.typeToSchema(el)) },
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
        return { type: 'array', items: this.typeToSchema(node.typeParameters.params[0]) };
      }
      // handle Set<T> as array
      if (name === 'Set' && node.typeParameters?.params.length === 1) {
        return { type: 'array', items: this.typeToSchema(node.typeParameters.params[0]) };
      }
      // handle Map<K,V> as object
      if (name === 'Map' && node.typeParameters?.params.length === 2) {
        return { type: 'object', additionalProperties: this.typeToSchema(node.typeParameters.params[1]) };
      }
      // inline interface
      const iface = this.interfaceMap[name];
      if (iface) {
        return this.typeToSchema(iface.body as t.TSTypeLiteral);
      }
      return { $ref: name };
    }
    // union types
    if (t.isTSUnionType(node)) {
      // map to schemas and dedupe identical entries
      const schemas = node.types.map(tn => this.typeToSchema(tn));
      const unique = Array.from(
        new Map(schemas.map(s => [JSON.stringify(s), s])).values()
      );
      return { anyOf: unique };
    }
    // fallback empty schema
    return {};
  }

  /**
   * Internal schema-based analysis
   */
  private analyzeSchema(): SchemaAnalysisResult {
    if (!this.ast) throw new Error('No code has been parsed. Call analyzeWithSchema first.');
    const queries: SchemaMethodInfo[] = [];
    const mutations: SchemaMethodInfo[] = [];
    let foundDefaultExport = false;
    const self = this;
    traverse(this.ast, {
      ExportDefaultDeclaration(path) {
        const decl = path.node.declaration;
        if (t.isClassDeclaration(decl)) {
          foundDefaultExport = true;
          self.analyzeClassMethodsSchema(path, decl, queries, mutations);
        }
      },
      ExportNamedDeclaration(path) {
        for (const specifier of path.node.specifiers) {
          if (
            t.isExportSpecifier(specifier) &&
            t.isIdentifier(specifier.exported) &&
            specifier.exported.name === 'default'
          ) {
            const binding = path.scope.getBinding(specifier.local.name);
            if (binding) {
              const decl = binding.path.node;
              if (
                t.isVariableDeclarator(decl) &&
                t.isClassExpression(decl.init)
              ) {
                foundDefaultExport = true;
                self.analyzeClassMethodsSchema(binding.path, decl.init, queries, mutations);
              }
            }
          }
        }
      },
    });
    if (!foundDefaultExport) throw new Error('No default exported class found in the code');
    return { queries, mutations };
  }

  // Schema-based method extraction
  private analyzeClassMethodsSchema(
    parentPath: NodePath,
    classNode: t.ClassDeclaration | t.ClassExpression,
    queries: SchemaMethodInfo[],
    mutations: SchemaMethodInfo[]
  ): void {
    const self = this;
    parentPath.traverse({
      ClassMethod(methodPath: NodePath<t.ClassMethod>) {
        if (methodPath.node.static || methodPath.node.kind === 'constructor') return;
        const methodName = t.isIdentifier(methodPath.node.key)
          ? methodPath.node.key.name
          : '';
        if (!methodName) return;
        // parameter schemas
        const params = methodPath.node.params.map(param => {
          // identifier parameter
          if (t.isIdentifier(param)) {
            const name = param.name;
            const schema = param.typeAnnotation
              ? self.typeToSchema(param.typeAnnotation.typeAnnotation)
              : {};
            return { name, schema };
          }
          // destructured object parameter
          if (t.isObjectPattern(param)) {
            // include type annotation in name, compact inline
            let patternRaw = generate(param).code;
            patternRaw = patternRaw.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
            let name = patternRaw;
            if (param.typeAnnotation) {
              let typeRaw = generate(param.typeAnnotation.typeAnnotation).code;
              // remove trailing semicolon before closing brace, preserve space before closing brace
              typeRaw = typeRaw.replace(/;\s*}$/, ' }');
              const typeCompact = typeRaw.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
              name = `${patternRaw}: ${typeCompact}`;
            }
            const schema = param.typeAnnotation
              ? self.typeToSchema(param.typeAnnotation.typeAnnotation)
              : {};
            return { name, schema };
          }
          // default value parameter
          if (t.isAssignmentPattern(param) && t.isIdentifier(param.left)) {
            const name = param.left.name;
            const schema = param.left.typeAnnotation
              ? self.typeToSchema(param.left.typeAnnotation.typeAnnotation)
              : {};
            return { name, schema };
          }
          // rest parameter
          if (t.isRestElement(param) && t.isIdentifier(param.argument)) {
            const name = param.argument.name;
            // typeAnnotation may be on RestElement or on its argument identifier
            let ann: t.TSType | undefined;
            if (param.typeAnnotation) ann = param.typeAnnotation.typeAnnotation;
            else if (param.argument.typeAnnotation) ann = param.argument.typeAnnotation.typeAnnotation;
            const schema = ann ? self.typeToSchema(ann) : {};
            return { name, schema };
          }
          // fallback
          return { name: generate(param).code, schema: {} };
        });
        // return schema
        const returnSchema = methodPath.node.returnType
          ? self.typeToSchema(methodPath.node.returnType.typeAnnotation)
          : {};
        // detect state access and returns
        let reads = false, writes = false, hasRet = false;
        methodPath.traverse({
          MemberExpression(memberPath: NodePath<t.MemberExpression>) {
            const obj = memberPath.node.object;
            const prop = memberPath.node.property;
            if (
              t.isThisExpression(obj) &&
              t.isIdentifier(prop) &&
              prop.name === 'state'
            ) {
              const p = memberPath.parentPath;
              if (
                t.isAssignmentExpression(p.node) ||
                (t.isMemberExpression(p.node) &&
                 t.isAssignmentExpression(p.parentPath.node))
              ) writes = true;
              else reads = true;
            }
          },
          ReturnStatement(retPath: NodePath<t.ReturnStatement>) {
            if (retPath.node.argument) hasRet = true;
          },
        });
        const info: SchemaMethodInfo = { name: methodName, params, returnSchema };
        if (writes) mutations.push(info);
        else if (reads || hasRet) queries.push(info);
      },
      // arrow-function class properties
      ClassProperty(propPath: NodePath<t.ClassProperty>) {
        if (propPath.node.static) return;
        if (!t.isIdentifier(propPath.node.key)) return;
        const methodName = propPath.node.key.name;
        const value = propPath.node.value;
        if (!t.isArrowFunctionExpression(value)) return;
        // parameter schemas
        const params = value.params.map(param => {
          if (t.isIdentifier(param)) {
            const name = param.name;
            const schema = param.typeAnnotation
              ? self.typeToSchema(param.typeAnnotation.typeAnnotation)
              : {};
            return { name, schema };
          }
          if (t.isObjectPattern(param)) {
            // include type annotation in name, compact inline
            let patternRaw = generate(param).code;
            patternRaw = patternRaw.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
            let name = patternRaw;
            if (param.typeAnnotation) {
              let typeRaw = generate(param.typeAnnotation.typeAnnotation).code;
              // remove trailing semicolon before closing brace, preserve space before closing brace
              typeRaw = typeRaw.replace(/;\s*}$/, ' }');
              const typeCompact = typeRaw.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
              name = `${patternRaw}: ${typeCompact}`;
            }
            const schema = param.typeAnnotation
              ? self.typeToSchema(param.typeAnnotation.typeAnnotation)
              : {};
            return { name, schema };
          }
          if (t.isAssignmentPattern(param) && t.isIdentifier(param.left)) {
            const name = param.left.name;
            const schema = param.left.typeAnnotation
              ? self.typeToSchema(param.left.typeAnnotation.typeAnnotation)
              : {};
            return { name, schema };
          }
          if (t.isRestElement(param) && t.isIdentifier(param.argument)) {
            const name = param.argument.name;
            let ann: t.TSType | undefined;
            if (param.typeAnnotation) ann = param.typeAnnotation.typeAnnotation;
            else if (param.argument.typeAnnotation) ann = param.argument.typeAnnotation.typeAnnotation;
            const schema = ann ? self.typeToSchema(ann) : {};
            return { name, schema };
          }
          return { name: generate(param).code, schema: {} };
        });
        // arrow functions have no return annotation
        const returnSchema: JSONSchema = {};
        // detect state access and returns
        let reads = false, writes = false, hasRet = false;
        propPath.traverse({
          MemberExpression(memberPath: NodePath<t.MemberExpression>) {
            const obj = memberPath.node.object;
            const prop = memberPath.node.property;
            if (
              t.isThisExpression(obj) &&
              t.isIdentifier(prop) &&
              prop.name === 'state'
            ) {
              const p = memberPath.parentPath;
              if (
                t.isAssignmentExpression(p.node) ||
                (t.isMemberExpression(p.node) &&
                 t.isAssignmentExpression(p.parentPath.node))
              ) writes = true;
              else reads = true;
            }
          },
          ReturnStatement(retPath: NodePath<t.ReturnStatement>) {
            if (retPath.node.argument) hasRet = true;
          },
        });
        const info: SchemaMethodInfo = { name: methodName, params, returnSchema };
        if (writes) mutations.push(info);
        else if (reads || hasRet) queries.push(info);
      },
    });
  }
} 