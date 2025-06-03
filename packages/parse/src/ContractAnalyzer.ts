// @ts-nocheck
import * as parser from '@babel/parser';
import traverse, { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import generate from '@babel/generator';

import {
  AnalysisResult,
  MethodInfo,
  SchemaMethodInfo,
  SchemaAnalysisResult,
  JSONSchema,
  MethodAnalysisState,
} from './types';
import { SchemaConverter } from './schema-converter';
import { ASTHelpers } from './ast-helpers';
import { MethodClassifier } from './method-classifier';
import { MultiFileProcessor } from './multi-file-processor';

export class ContractAnalyzer {
  private ast: parser.ParseResult<t.File> | null = null;
  private schemaConverter: SchemaConverter = new SchemaConverter();
  private methodClassifier: MethodClassifier = new MethodClassifier();
  private multiFileProcessor: MultiFileProcessor = new MultiFileProcessor();

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
            if (ASTHelpers.containsStateMember(assignPath.node.left as t.Node)) {
              writesState = true;
            }
          },
          UpdateExpression(updatePath: NodePath<t.UpdateExpression>) {
            if (ASTHelpers.isStateMemberExpression(updatePath.node.argument as t.Node)) {
              writesState = true;
            }
          },
          CallExpression(callPath: NodePath<t.CallExpression>) {
            const callee = callPath.node.callee;
            if (t.isMemberExpression(callee)) {
              // method calls on state (e.g., this.state.setX())
              if (ASTHelpers.isStateMemberExpression(callee.object)) {
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
                        !ASTHelpers.isStateMemberExpression(node.left))
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
                if (target && ASTHelpers.isStateMemberExpression(target as t.Node)) {
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
    this.schemaConverter.gatherInterfaces(this.ast!);
    return this.analyzeSchema();
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
              ? self.schemaConverter.typeToSchema(param.typeAnnotation.typeAnnotation)
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
              ? self.schemaConverter.typeToSchema(param.typeAnnotation.typeAnnotation)
              : {};
            return { name, schema };
          }
          // default value parameter
          if (t.isAssignmentPattern(param) && t.isIdentifier(param.left)) {
            const name = param.left.name;
            const schema = param.left.typeAnnotation
              ? self.schemaConverter.typeToSchema(param.left.typeAnnotation.typeAnnotation)
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
            const schema = ann ? self.schemaConverter.typeToSchema(ann) : {};
            return { name, schema };
          }
          // fallback
          return { name: generate(param).code, schema: {} };
        });
        // return schema
        const returnSchema = methodPath.node.returnType
          ? self.schemaConverter.typeToSchema(methodPath.node.returnType.typeAnnotation)
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
            if (ASTHelpers.containsStateMember(assignPath.node.left as t.Node)) {
              writes = true;
            }
          },
          UpdateExpression(updatePath: NodePath<t.UpdateExpression>) {
            if (ASTHelpers.isStateMemberExpression(updatePath.node.argument as t.Node)) {
              writes = true;
            }
          },
          CallExpression(callPath: NodePath<t.CallExpression>) {
            const callee = callPath.node.callee;
            if (t.isMemberExpression(callee)) {
              if (ASTHelpers.isStateMemberExpression(callee.object)) {
                // Use intelligent method classification
                if (t.isIdentifier(callee.property)) {
                  const methodName = callee.property.name;
                  const isReadOnly = self.methodClassifier.isReadOnlyMethod(
                    methodName,
                    callPath
                  );
                  if (isReadOnly) {
                    reads = true;
                  } else {
                    writes = true;
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
                if (target && ASTHelpers.isStateMemberExpression(target as t.Node)) {
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
              ? self.schemaConverter.typeToSchema(param.typeAnnotation.typeAnnotation)
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
              ? self.schemaConverter.typeToSchema(param.typeAnnotation.typeAnnotation)
              : {};
            return { name, schema };
          }
          if (t.isAssignmentPattern(param) && t.isIdentifier(param.left)) {
            const name = param.left.name;
            const schema = param.left.typeAnnotation
              ? self.schemaConverter.typeToSchema(param.left.typeAnnotation.typeAnnotation)
              : {};
            return { name, schema };
          }
          if (t.isRestElement(param) && t.isIdentifier(param.argument)) {
            const name = param.argument.name;
            let ann: t.TSType | undefined;
            if (param.typeAnnotation) ann = param.typeAnnotation.typeAnnotation;
            else if (param.argument.typeAnnotation)
              ann = param.argument.typeAnnotation.typeAnnotation;
            const schema = ann ? self.schemaConverter.typeToSchema(ann) : {};
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
            if (ASTHelpers.containsStateMember(assignPath.node.left as t.Node)) {
              writes = true;
            }
          },
          UpdateExpression(updatePath: NodePath<t.UpdateExpression>) {
            if (ASTHelpers.isStateMemberExpression(updatePath.node.argument as t.Node)) {
              writes = true;
            }
          },
          CallExpression(callPath: NodePath<t.CallExpression>) {
            const callee = callPath.node.callee;
            if (t.isMemberExpression(callee)) {
              if (ASTHelpers.isStateMemberExpression(callee.object)) {
                // Use intelligent method classification
                if (t.isIdentifier(callee.property)) {
                  const methodName = callee.property.name;
                  const isReadOnly = self.methodClassifier.isReadOnlyMethod(
                    methodName,
                    callPath
                  );
                  if (isReadOnly) {
                    reads = true;
                  } else {
                    writes = true;
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
                if (target && ASTHelpers.isStateMemberExpression(target as t.Node)) {
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
    const combinedCode = this.multiFileProcessor.combineSourceFiles(sourceFiles, entryFile);
    return this.analyzeFromCode(combinedCode);
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
    const combinedCode = this.multiFileProcessor.combineSourceFiles(sourceFiles, entryFile);
    return this.analyzeWithSchema(combinedCode);
  }
}
