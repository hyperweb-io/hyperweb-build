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
  // Track methods currently being analyzed to prevent infinite recursion
  private analyzerStack: Set<string> = new Set();

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
    const analyzer = this;
    parentPath.traverse({
      ClassMethod(methodPath: NodePath<t.ClassMethod>) {
        // Skip static methods and constructors
        if (methodPath.node.static || methodPath.node.kind === 'constructor') {
          return;
        }

        const methodName =
          methodPath.node.key.type === 'Identifier' ? methodPath.node.key.name : '';
        if (!methodName) return;

        // Collect parameters
        const params = methodPath.node.params.map((param) => {
          if (t.isIdentifier(param)) {
            const name = param.name;
            let type = 'any';
            if (param.typeAnnotation) {
              // generate and compact the type annotation
              const rawType = generate(param.typeAnnotation.typeAnnotation).code;
              type = rawType.replace(/\n/g, ' ').replace(/;/g, '').replace(/\s+/g, ' ').trim();
            }
            return { name, type };
          } else {
            const code = generate(param).code;
            return { name: code, type: 'unknown' };
          }
        });

        // Collect return type
        let returnType = 'void';
        if (methodPath.node.returnType && methodPath.node.returnType.typeAnnotation) {
          // generate and compact the return type annotation
          const rawRet = generate(methodPath.node.returnType.typeAnnotation).code;
          returnType = rawRet
            .replace(/\n/g, ' ')
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
          AssignmentExpression(assignPath: NodePath<t.AssignmentExpression>) {
            if (analyzer.containsStateMember(assignPath.node.left as t.Node)) {
              writesState = true;
            }
          },
          UpdateExpression(updatePath: NodePath<t.UpdateExpression>) {
            if (analyzer.isStateMemberExpression(updatePath.node.argument as t.Node)) {
              writesState = true;
            }
          },
          CallExpression(callPath: NodePath<t.CallExpression>) {
            const callee = callPath.node.callee;
            if (t.isMemberExpression(callee)) {
              // method calls on state (e.g., this.state.setX())
              if (analyzer.isStateMemberExpression(callee.object)) {
                if (t.isIdentifier(callee.property)) {
                  // For pure AST analysis, check the context of the method call
                  // rather than trying to analyze the method implementation

                  // Walk up the AST to find if this call is in a read context
                  let isInReadContext = false;
                  let currentPath: NodePath | null = callPath.parentPath;

                  while (currentPath && !isInReadContext) {
                    const node = currentPath.node;

                    // Direct read contexts
                    if (
                      t.isReturnStatement(node) ||
                      t.isVariableDeclarator(node) ||
                      (t.isAssignmentExpression(node) &&
                        !analyzer.isStateMemberExpression(node.left))
                    ) {
                      isInReadContext = true;
                      break;
                    }

                    // Expression contexts that typically indicate reads
                    if (
                      t.isBinaryExpression(node) ||
                      t.isLogicalExpression(node) ||
                      t.isConditionalExpression(node) ||
                      t.isArrayExpression(node) ||
                      t.isObjectExpression(node)
                    ) {
                      isInReadContext = true;
                      break;
                    }

                    // If we hit an expression statement, this is likely a standalone call
                    if (t.isExpressionStatement(node)) {
                      break;
                    }

                    currentPath = currentPath.parentPath;
                  }

                  if (isInReadContext) {
                    readsState = true;
                  } else {
                    // If the method call is a standalone statement,
                    // it's more likely a mutation operation
                    writesState = true;
                  }
                }
              }
              // Object.assign(this.state.prop, ...)
              if (
                t.isIdentifier(callee.object) &&
                callee.object.name === 'Object' &&
                t.isIdentifier(callee.property) &&
                callee.property.name === 'assign'
              ) {
                const target = callPath.node.arguments[0];
                if (target && analyzer.isStateMemberExpression(target as t.Node)) {
                  writesState = true;
                }
              }
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
      TSInterfaceDeclaration: (path) => {
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
    if (t.isTSVoidKeyword(node)) return {};
    // array types
    if (t.isTSArrayType(node)) {
      return { type: 'array', items: this.typeToSchema(node.elementType) };
    }
    // tuple types
    if (t.isTSTupleType(node)) {
      return {
        type: 'array',
        items: { anyOf: node.elementTypes.map((el) => this.typeToSchema(el)) },
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
      const schemas = node.types.map((tn) => this.typeToSchema(tn));
      const unique = Array.from(new Map(schemas.map((s) => [JSON.stringify(s), s])).values());
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
              if (t.isVariableDeclarator(decl) && t.isClassExpression(decl.init)) {
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
        const methodName = t.isIdentifier(methodPath.node.key) ? methodPath.node.key.name : '';
        if (!methodName) return;
        // parameter schemas
        const params = methodPath.node.params.map((param) => {
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
            else if (param.argument.typeAnnotation)
              ann = param.argument.typeAnnotation.typeAnnotation;
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
        let reads = false,
          writes = false,
          hasRet = false;
        methodPath.traverse({
          MemberExpression(memberPath: NodePath<t.MemberExpression>) {
            const obj = memberPath.node.object;
            const prop = memberPath.node.property;
            if (t.isThisExpression(obj) && t.isIdentifier(prop) && prop.name === 'state') {
              const p = memberPath.parentPath;
              if (
                t.isAssignmentExpression(p.node) ||
                (t.isMemberExpression(p.node) && t.isAssignmentExpression(p.parentPath.node))
              )
                writes = true;
              else reads = true;
            }
          },
          ReturnStatement(retPath: NodePath<t.ReturnStatement>) {
            if (retPath.node.argument) hasRet = true;
          },
          AssignmentExpression(assignPath: NodePath<t.AssignmentExpression>) {
            if (self.containsStateMember(assignPath.node.left as t.Node)) {
              writes = true;
            }
          },
          UpdateExpression(updatePath: NodePath<t.UpdateExpression>) {
            if (self.isStateMemberExpression(updatePath.node.argument as t.Node)) {
              writes = true;
            }
          },
          CallExpression(callPath: NodePath<t.CallExpression>) {
            const callee = callPath.node.callee;
            if (t.isMemberExpression(callee)) {
              if (self.isStateMemberExpression(callee.object)) {
                // Use intelligent method classification
                if (t.isIdentifier(callee.property)) {
                  const methodName = callee.property.name;
                  const isReadOnly = self.isReadOnlyMethod(methodName, callPath);
                  if (isReadOnly) {
                    reads = true;
                  } else {
                    writes = true;
                  }
                }
              } else {
              }
              // Object.assign(this.state.prop, ...)
              if (
                t.isIdentifier(callee.object) &&
                callee.object.name === 'Object' &&
                t.isIdentifier(callee.property) &&
                callee.property.name === 'assign'
              ) {
                const target = callPath.node.arguments[0];
                if (target && self.isStateMemberExpression(target as t.Node)) {
                  writes = true;
                }
              }
            }
          },
        });
        const info: SchemaMethodInfo = {
          name: methodName,
          params,
          returnSchema,
        };
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
        const params = value.params.map((param) => {
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
            else if (param.argument.typeAnnotation)
              ann = param.argument.typeAnnotation.typeAnnotation;
            const schema = ann ? self.typeToSchema(ann) : {};
            return { name, schema };
          }
          return { name: generate(param).code, schema: {} };
        });
        // arrow functions have no return annotation
        const returnSchema: JSONSchema = {};
        // detect state access and returns
        let reads = false,
          writes = false,
          hasRet = false;
        propPath.traverse({
          MemberExpression(memberPath: NodePath<t.MemberExpression>) {
            const obj = memberPath.node.object;
            const prop = memberPath.node.property;
            if (t.isThisExpression(obj) && t.isIdentifier(prop) && prop.name === 'state') {
              const p = memberPath.parentPath;
              if (
                t.isAssignmentExpression(p.node) ||
                (t.isMemberExpression(p.node) && t.isAssignmentExpression(p.parentPath.node))
              )
                writes = true;
              else reads = true;
            }
          },
          ReturnStatement(retPath: NodePath<t.ReturnStatement>) {
            if (retPath.node.argument) hasRet = true;
          },
          AssignmentExpression(assignPath: NodePath<t.AssignmentExpression>) {
            if (self.containsStateMember(assignPath.node.left as t.Node)) {
              writes = true;
            }
          },
          UpdateExpression(updatePath: NodePath<t.UpdateExpression>) {
            if (self.isStateMemberExpression(updatePath.node.argument as t.Node)) {
              writes = true;
            }
          },
          CallExpression(callPath: NodePath<t.CallExpression>) {
            const callee = callPath.node.callee;
            if (t.isMemberExpression(callee)) {
              if (self.isStateMemberExpression(callee.object)) {
                // Use intelligent method classification
                if (t.isIdentifier(callee.property)) {
                  const methodName = callee.property.name;
                  const isReadOnly = self.isReadOnlyMethod(methodName, callPath);
                  if (isReadOnly) {
                    reads = true;
                  } else {
                    writes = true;
                  }
                }
              } else {
              }
              // Object.assign(this.state.prop, ...)
              if (
                t.isIdentifier(callee.object) &&
                callee.object.name === 'Object' &&
                t.isIdentifier(callee.property) &&
                callee.property.name === 'assign'
              ) {
                const target = callPath.node.arguments[0];
                if (target && self.isStateMemberExpression(target as t.Node)) {
                  writes = true;
                }
              }
            }
          },
        });
        const info: SchemaMethodInfo = {
          name: methodName,
          params,
          returnSchema,
        };
        if (writes) mutations.push(info);
        else if (reads || hasRet) queries.push(info);
      },
    });
  }

  // Helper to detect if a MemberExpression references this.state at any depth
  private isStateMemberExpression(node: t.Node): boolean {
    if (!t.isMemberExpression(node)) return false;
    const { object, property } = node;
    if (t.isThisExpression(object) && t.isIdentifier(property) && property.name === 'state') {
      return true;
    }
    if (t.isMemberExpression(object)) {
      return this.isStateMemberExpression(object);
    }
    return false;
  }

  /**
   * Determines if a method call is read-only by analyzing the method implementation
   * Uses pure AST analysis with recursion protection
   */
  private isReadOnlyMethod(
    methodName: string,
    callPath?: NodePath<t.CallExpression>
  ): boolean {
    // Create a unique key for this analysis to prevent infinite recursion
    const analysisKey = `${methodName}:${callPath?.node.loc?.start.line || 'unknown'}`;

    if (this.analyzerStack.has(analysisKey)) {
      // We're already analyzing this method - default to mutation (conservative)
      return false;
    }

    this.analyzerStack.add(analysisKey);

    try {
      // Try to analyze the actual method implementation using AST
      if (callPath) {
        const methodAnalysis = this.analyzeMethodImplementation(methodName, callPath);
        if (methodAnalysis !== null) {
          return methodAnalysis;
        }
      }

      // If we can't find or analyze the method implementation,
      // default to mutation (conservative approach - no pattern matching)
      return false;
    } finally {
      this.analyzerStack.delete(analysisKey);
    }
  }

  /**
   * Analyzes the actual implementation of a method to determine if it's read-only
   * Returns null if the method can't be found or analyzed
   */
  private analyzeMethodImplementation(
    methodName: string,
    callPath: NodePath<t.CallExpression>
  ): boolean | null {
    // First try to find the method in the current class or accessible scope
    const methodNode = this.findMethodDefinition(methodName, callPath);
    if (methodNode) {
      return this.isMethodBodyReadOnly(methodNode);
    }

    // Try to find the method in imported modules
    const importedMethodNode = this.findImportedMethodDefinition(methodName, callPath);
    if (importedMethodNode) {
      return this.isMethodBodyReadOnly(importedMethodNode);
    }

    // Try to analyze based on the object type the method is called on
    const objectTypeAnalysis = this.analyzeMethodByObjectType(methodName, callPath);
    if (objectTypeAnalysis !== null) {
      return objectTypeAnalysis;
    }

    // If we can't analyze the method, return null to indicate unknown
    return null;
  }

  /**
   * Finds the method definition for the given method name
   */
  private findMethodDefinition(
    methodName: string,
    callPath: NodePath<t.CallExpression>
  ): NodePath<t.ClassMethod | t.ClassProperty> | null {
    // Start from the call path and traverse up to find the containing class
    let currentPath: NodePath | null = callPath;

    while (currentPath) {
      if (currentPath.isClassDeclaration() || currentPath.isClassExpression()) {
        // Found the class, now look for the method
        const classPath = currentPath as NodePath<t.ClassDeclaration | t.ClassExpression>;
        let foundMethod: NodePath<t.ClassMethod | t.ClassProperty> | null = null;

        classPath.traverse({
          ClassMethod(methodPath: NodePath<t.ClassMethod>) {
            if (
              t.isIdentifier(methodPath.node.key) &&
              methodPath.node.key.name === methodName &&
              !methodPath.node.static
            ) {
              foundMethod = methodPath;
              methodPath.stop();
            }
          },
          ClassProperty(propPath: NodePath<t.ClassProperty>) {
            if (
              t.isIdentifier(propPath.node.key) &&
              propPath.node.key.name === methodName &&
              !propPath.node.static &&
              t.isArrowFunctionExpression(propPath.node.value)
            ) {
              foundMethod = propPath;
              propPath.stop();
            }
          },
        });

        return foundMethod;
      }
      currentPath = currentPath.parentPath;
    }

    return null;
  }

  /**
   * Attempts to find method definitions in imported modules
   */
  private findImportedMethodDefinition(
    methodName: string,
    callPath: NodePath<t.CallExpression>
  ): NodePath<t.ClassMethod | t.ClassProperty> | null {
    const callee = callPath.node.callee;
    if (!t.isMemberExpression(callee)) {
      return null;
    }

    // Try to trace the object type through imports
    const objectNode = callee.object;
    if (t.isMemberExpression(objectNode)) {
      // Handle cases like this.state.someImportedObject.method()
      return this.traceImportedMethod(objectNode, methodName);
    }

    return null;
  }

  /**
   * Traces method calls through imported objects
   */
  private traceImportedMethod(
    objectNode: t.MemberExpression,
    methodName: string
  ): NodePath<t.ClassMethod | t.ClassProperty> | null {
    // This would require more sophisticated type tracking
    // For now, return null to indicate we can't analyze
    return null;
  }

  /**
   * Analyzes method calls based on the type of object they're called on
   */
  private analyzeMethodByObjectType(
    methodName: string,
    callPath: NodePath<t.CallExpression>
  ): boolean | null {
    const callee = callPath.node.callee;
    if (!t.isMemberExpression(callee)) {
      return null;
    }

    // For built-in JavaScript types, we need to analyze the context
    // instead of hardcoding patterns
    const objectAnalysis = this.analyzeObjectType(callee.object);
    if (objectAnalysis) {
      return this.analyzeMethodOnType(methodName, objectAnalysis, callPath);
    }

    return null;
  }

  /**
   * Analyzes the type of an object node
   */
  private analyzeObjectType(objectNode: t.Expression): string | null {
    // Try to infer the type from the AST context
    if (t.isMemberExpression(objectNode)) {
      // Could be this.state.someProperty - analyze the property type
      return this.inferPropertyType(objectNode);
    }

    if (t.isIdentifier(objectNode)) {
      // Could be a local variable - trace its declaration
      return this.inferVariableType(objectNode);
    }

    return null;
  }

  /**
   * Infers the type of a property access
   */
  private inferPropertyType(memberExpr: t.MemberExpression): string | null {
    // This would require type inference from the AST
    // For now, return null to be conservative
    return null;
  }

  /**
   * Infers the type of a variable
   */
  private inferVariableType(identifier: t.Identifier): string | null {
    // This would require tracking variable declarations and their types
    // For now, return null to be conservative
    return null;
  }

  /**
   * Analyzes whether a method on a specific type is read-only
   */
  private analyzeMethodOnType(
    methodName: string,
    objectType: string,
    callPath: NodePath<t.CallExpression>
  ): boolean | null {
    // Without hardcoded patterns, we can only analyze if we have
    // actual method implementations or type definitions
    // For now, return null to indicate we can't determine
    return null;
  }

  /**
   * Analyzes a method body to determine if it only reads state (true) or mutates it (false)
   */
  private isMethodBodyReadOnly(
    methodPath: NodePath<t.ClassMethod | t.ClassProperty>
  ): boolean {
    let hasStateWrite = false;
    let hasStateRead = false;
    const self = this; // Capture the ContractAnalyzer instance

    const analyzeBody = (bodyPath: NodePath) => {
      bodyPath.traverse({
        // Direct state assignment: this.state.x = value
        MemberExpression(memberPath: NodePath<t.MemberExpression>) {
          const obj = memberPath.node.object;
          const prop = memberPath.node.property;

          if (t.isThisExpression(obj) && t.isIdentifier(prop) && prop.name === 'state') {
            const parent = memberPath.parentPath;
            if (
              t.isAssignmentExpression(parent.node) ||
              (t.isMemberExpression(parent.node) &&
                t.isAssignmentExpression(parent.parentPath.node))
            ) {
              hasStateWrite = true;
            } else {
              hasStateRead = true;
            }
          }
        },

        // Assignment expressions that might involve state
        AssignmentExpression(assignPath: NodePath<t.AssignmentExpression>) {
          if (self.containsStateMember(assignPath.node.left as t.Node)) {
            hasStateWrite = true;
          }
        },

        // Update expressions (++, --, etc.) on state
        UpdateExpression(updatePath: NodePath<t.UpdateExpression>) {
          if (self.isStateMemberExpression(updatePath.node.argument as t.Node)) {
            hasStateWrite = true;
          }
        },

        // Method calls on state objects
        CallExpression(callExprPath: NodePath<t.CallExpression>) {
          const callee = callExprPath.node.callee;
          if (t.isMemberExpression(callee)) {
            if (self.isStateMemberExpression(callee.object)) {
              if (t.isIdentifier(callee.property)) {
                // Method calls on state objects - for pure AST analysis,
                // we analyze the context rather than the method name
                const parent = callExprPath.parentPath;

                // If the method call result is being returned or used in an expression,
                // it's likely a read operation
                if (
                  t.isReturnStatement(parent.node) ||
                  t.isVariableDeclarator(parent.node) ||
                  t.isAssignmentExpression(parent.node)
                ) {
                  hasStateRead = true;
                } else {
                  // If the method call is a standalone statement,
                  // it's more likely a mutation operation
                  hasStateWrite = true;
                }
              }
            }

            // Object.assign on state
            if (
              t.isIdentifier(callee.object) &&
              callee.object.name === 'Object' &&
              t.isIdentifier(callee.property) &&
              callee.property.name === 'assign'
            ) {
              const target = callExprPath.node.arguments[0];
              if (target && self.isStateMemberExpression(target as t.Node)) {
                hasStateWrite = true;
              }
            }
          }
        },
      });
    };

    // Analyze method body based on type
    if (methodPath.isClassMethod()) {
      const methodNode = methodPath.node as t.ClassMethod;
      if (methodNode.body) {
        analyzeBody(methodPath.get('body') as NodePath);
      }
    } else if (methodPath.isClassProperty()) {
      const propNode = methodPath.node as t.ClassProperty;
      if (t.isArrowFunctionExpression(propNode.value)) {
        const funcPath = methodPath.get('value') as NodePath<t.ArrowFunctionExpression>;
        if (t.isBlockStatement(propNode.value.body)) {
          analyzeBody(funcPath.get('body') as NodePath);
        } else {
          // Expression body - analyze the expression
          analyzeBody(funcPath.get('body') as NodePath);
        }
      }
    }

    // If there are any writes to state, it's not read-only
    return !hasStateWrite;
  }

  /**
   * Removed: classifyMethodByPattern method is no longer used
   * All method classification now relies on AST analysis
   */

  // Helper to detect state member usage in assignment patterns or member expressions
  private containsStateMember(node: t.Node): boolean {
    if (t.isMemberExpression(node) && this.isStateMemberExpression(node)) {
      return true;
    }
    if (t.isObjectPattern(node)) {
      for (const prop of node.properties) {
        if (t.isRestElement(prop) && this.containsStateMember(prop.argument as t.Node)) {
          return true;
        }
        if (t.isObjectProperty(prop) && this.containsStateMember(prop.value as t.Node)) {
          return true;
        }
      }
    }
    if (t.isArrayPattern(node)) {
      for (const elem of node.elements) {
        if (elem && this.containsStateMember(elem as t.Node)) {
          return true;
        }
      }
    }
    if (t.isAssignmentPattern(node)) {
      return this.containsStateMember(node.left as t.Node);
    }
    if (t.isRestElement(node)) {
      return this.containsStateMember(node.argument as t.Node);
    }
    return false;
  }

  /**
   * Analyzes a TypeScript project with multiple source files to identify query and mutation methods
   * @param sourceFiles Record of file paths to their source code content
   * @param entryFile The path to the entry file containing the default exported class (optional - will auto-detect if not provided)
   * @returns An object containing arrays of query and mutation method information
   */
  public analyzeMultiFile(
    sourceFiles: Record<string, string>,
    entryFile?: string
  ): AnalysisResult {
    const resolvedEntryFile = entryFile || this.autoDetectEntryFile(sourceFiles);

    if (!sourceFiles[resolvedEntryFile]) {
      throw new Error(`Entry file ${resolvedEntryFile} not found in source files`);
    }

    // Parse all source files into ASTs
    const asts = this.parseAllFiles(sourceFiles);

    // Build import/export mapping
    const importMap = this.buildImportMap(asts, sourceFiles);

    // Analyze the entry file with access to all other files
    this.ast = asts[resolvedEntryFile];
    this.currentImportMap = importMap;
    this.allAsts = asts;

    return this.analyze();
  }

  /**
   * Analyzes a TypeScript project and returns results with JSON schemas
   * @param sourceFiles Record of file paths to their source code content
   * @param entryFile The path to the entry file containing the default exported class (optional - will auto-detect if not provided)
   * @returns An object containing arrays of query and mutation method information with schemas
   */
  public analyzeMultiFileWithSchema(
    sourceFiles: Record<string, string>,
    entryFile?: string
  ): SchemaAnalysisResult {
    const resolvedEntryFile = entryFile || this.autoDetectEntryFile(sourceFiles);

    if (!sourceFiles[resolvedEntryFile]) {
      throw new Error(`Entry file ${resolvedEntryFile} not found in source files`);
    }

    // Parse all source files into ASTs
    const asts = this.parseAllFiles(sourceFiles);

    // Build import/export mapping
    const importMap = this.buildImportMap(asts, sourceFiles);

    // Gather all interfaces from all files
    this.gatherAllInterfaces(asts);

    // Analyze the entry file with access to all other files
    this.ast = asts[resolvedEntryFile];
    this.currentImportMap = importMap;
    this.allAsts = asts;

    return this.analyzeSchema();
  }

  // Internal state for project analysis
  private currentImportMap: Record<string, Record<string, string>> = {};
  private allAsts: Record<string, parser.ParseResult<t.File>> = {};

  /**
   * Parses all source files into ASTs
   */
  private parseAllFiles(
    sourceFiles: Record<string, string>
  ): Record<string, parser.ParseResult<t.File>> {
    const asts: Record<string, parser.ParseResult<t.File>> = {};

    for (const [filePath, content] of Object.entries(sourceFiles)) {
      try {
        asts[filePath] = parser.parse(content, {
          sourceType: 'module',
          plugins: ['typescript', 'classProperties', 'decorators-legacy'],
        });
      } catch (error) {
        throw new Error(`Failed to parse ${filePath}: ${error.message}`);
      }
    }

    return asts;
  }

  /**
   * Builds a mapping of imports for each file
   */
  private buildImportMap(
    asts: Record<string, parser.ParseResult<t.File>>,
    sourceFiles: Record<string, string>
  ): Record<string, Record<string, string>> {
    const importMap: Record<string, Record<string, string>> = {};

    for (const [filePath, ast] of Object.entries(asts)) {
      importMap[filePath] = {};

      traverse(ast, {
        ImportDeclaration: (path) => {
          const source = path.node.source.value;
          const resolvedPath = this.resolveImport(source, filePath, sourceFiles);

          if (resolvedPath) {
            for (const specifier of path.node.specifiers) {
              if (t.isImportSpecifier(specifier) && t.isIdentifier(specifier.imported)) {
                // Named import: import { Foo } from './file'
                const importedName = specifier.imported.name;
                const localName = specifier.local.name;
                importMap[filePath][localName] = `${resolvedPath}:${importedName}`;
              } else if (t.isImportDefaultSpecifier(specifier)) {
                // Default import: import Foo from './file'
                const localName = specifier.local.name;
                importMap[filePath][localName] = `${resolvedPath}:default`;
              } else if (t.isImportNamespaceSpecifier(specifier)) {
                // Namespace import: import * as Foo from './file'
                const localName = specifier.local.name;
                importMap[filePath][localName] = `${resolvedPath}:*`;
              }
            }
          }
        },
      });
    }

    return importMap;
  }

  /**
   * Resolves an import path relative to the importing file
   */
  private resolveImport(
    importPath: string,
    fromFile: string,
    sourceFiles: Record<string, string>
  ): string | null {
    // Skip external imports (non-relative)
    if (!importPath.startsWith('./') && !importPath.startsWith('../')) {
      return null;
    }

    const fromDir = fromFile.split('/').slice(0, -1).join('/');
    const resolvedBase = this.normalizePath(fromDir ? `${fromDir}/${importPath}` : importPath);

    // Try different extensions and index files
    const candidates = [
      `${resolvedBase}.ts`,
      `${resolvedBase}.tsx`,
      `${resolvedBase}/index.ts`,
      `${resolvedBase}/index.tsx`,
    ];

    for (const candidate of candidates) {
      if (sourceFiles[candidate]) {
        return candidate;
      }
    }

    return null;
  }

  /**
   * Normalizes a file path by resolving .. and . segments
   */
  private normalizePath(path: string): string {
    const parts = path.split('/');
    const result: string[] = [];

    for (const part of parts) {
      if (part === '..') {
        result.pop();
      } else if (part !== '.' && part !== '') {
        result.push(part);
      }
    }

    return result.join('/');
  }

  /**
   * Gathers interfaces from all files for schema analysis
   */
  private gatherAllInterfaces(asts: Record<string, parser.ParseResult<t.File>>): void {
    this.interfaceMap = {};

    for (const ast of Object.values(asts)) {
      traverse(ast, {
        TSInterfaceDeclaration: (path) => {
          this.interfaceMap[path.node.id.name] = path.node;
        },
        TSTypeAliasDeclaration: (path) => {
          // Treat type aliases as interfaces for schema purposes
          if (t.isTSTypeLiteral(path.node.typeAnnotation)) {
            // Convert type alias to interface-like structure
            const interfaceNode: t.TSInterfaceDeclaration = {
              type: 'TSInterfaceDeclaration',
              id: path.node.id,
              body: path.node.typeAnnotation,
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
          }
        },
      });
    }
  }

  /**
   * Automatically detects the entry file by finding files with default exported classes
   * @param sourceFiles Record of file paths to their source code content
   * @returns The path to the detected entry file
   */
  private autoDetectEntryFile(sourceFiles: Record<string, string>): string {
    const candidateFiles: string[] = [];

    // Parse all files to find those with default exported classes
    for (const [filePath, content] of Object.entries(sourceFiles)) {
      try {
        const ast = parser.parse(content, {
          sourceType: 'module',
          plugins: ['typescript', 'classProperties', 'decorators-legacy'],
        });

        let hasDefaultExportedClass = false;

        traverse(ast, {
          // Handle export default class
          ExportDefaultDeclaration(path) {
            const declaration = path.node.declaration;
            if (t.isClassDeclaration(declaration)) {
              hasDefaultExportedClass = true;
            }
          },
          // Handle export { Class as default }
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
                    hasDefaultExportedClass = true;
                  }
                }
              }
            }
          },
        });

        if (hasDefaultExportedClass) {
          candidateFiles.push(filePath);
        }
      } catch (error) {
        // Skip files that can't be parsed
        continue;
      }
    }

    if (candidateFiles.length === 0) {
      throw new Error('No files with default exported classes found in source files');
    }

    if (candidateFiles.length === 1) {
      return candidateFiles[0];
    }

    // If multiple candidates, use prioritization logic
    return this.prioritizeEntryFile(candidateFiles);
  }

  /**
   * Prioritizes entry file candidates when multiple files have default exported classes
   * @param candidates Array of file paths that contain default exported classes
   * @returns The prioritized entry file path
   */
  private prioritizeEntryFile(candidates: string[]): string {
    // Priority order for file naming patterns
    const patterns = [
      /contract\.ts$/i,
      /index\.ts$/i,
      /main\.ts$/i,
      /app\.ts$/i,
      /\.contract\.ts$/i,
    ];

    // Try each pattern in order
    for (const pattern of patterns) {
      const match = candidates.find((file) => pattern.test(file));
      if (match) {
        return match;
      }
    }

    // If no pattern matches, prefer files with "contract" in the name
    const contractFile = candidates.find((file) => file.toLowerCase().includes('contract'));
    if (contractFile) {
      return contractFile;
    }

    // If still no preference, choose the shortest path (likely to be more central)
    candidates.sort((a, b) => a.length - b.length);
    return candidates[0];
  }
}
