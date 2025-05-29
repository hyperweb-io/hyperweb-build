// @ts-nocheck
import * as parser from '@babel/parser';
import traverse, { NodePath } from '@babel/traverse';
import * as t from '@babel/types';

export interface AnalysisResult {
  queries: string[];
  mutations: string[];
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

    const queries: string[] = [];
    const mutations: string[] = [];
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
    queries: string[],
    mutations: string[]
  ): void {
    parentPath.traverse({
      ClassMethod(methodPath: NodePath<t.ClassMethod>) {
        // Skip static methods and constructors
        if (methodPath.node.static || methodPath.node.kind === 'constructor') {
          return;
        }

        const methodName = methodPath.node.key.type === 'Identifier' ? methodPath.node.key.name : '';
        if (!methodName) return;

        let readsState = false;
        let writesState = false;

        // Check for state access
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
        });

        // If a method writes to state, it's a mutation
        // If it only reads from state, it's a query
        if (writesState) {
          mutations.push(methodName);
        } else if (readsState) {
          queries.push(methodName);
        }
      },
    });
  }
} 