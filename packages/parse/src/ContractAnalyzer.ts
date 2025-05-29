import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
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

    traverse(this.ast, {
      ClassMethod(path) {
        // Skip static methods and constructors
        if (path.node.static || path.node.kind === 'constructor') {
          return;
        }

        const methodName = path.node.key.type === 'Identifier' ? path.node.key.name : '';
        if (!methodName) return;

        let readsState = false;
        let writesState = false;

        // Check for state access
        path.traverse({
          MemberExpression(memberPath) {
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

    return { queries, mutations };
  }
} 