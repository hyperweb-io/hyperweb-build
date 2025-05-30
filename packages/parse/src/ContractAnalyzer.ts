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
} 