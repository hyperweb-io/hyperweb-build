import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { ASTHelpers } from './ast-helpers';

export class MethodClassifier {
  // Track methods currently being analyzed to prevent infinite recursion
  private analyzerStack: Set<string> = new Set();

  /**
   * Determines if a method call is read-only by analyzing the method implementation
   * Uses pure AST analysis with recursion protection
   */
  public isReadOnlyMethod(methodName: string, callPath?: NodePath<t.CallExpression>): boolean {
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
    const objectAnalysis = ASTHelpers.analyzeObjectType(callee.object);
    if (objectAnalysis) {
      return this.analyzeMethodOnType(methodName, objectAnalysis, callPath);
    }

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
    const self = this; // Capture the MethodClassifier instance

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
          if (ASTHelpers.containsStateMember(assignPath.node.left as t.Node)) {
            hasStateWrite = true;
          }
        },

        // Update expressions (++, --, etc.) on state
        UpdateExpression(updatePath: NodePath<t.UpdateExpression>) {
          if (ASTHelpers.isStateMemberExpression(updatePath.node.argument as t.Node)) {
            hasStateWrite = true;
          }
        },

        // Method calls on state objects
        CallExpression(callExprPath: NodePath<t.CallExpression>) {
          const callee = callExprPath.node.callee;
          if (t.isMemberExpression(callee)) {
            if (ASTHelpers.isStateMemberExpression(callee.object)) {
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
              if (target && ASTHelpers.isStateMemberExpression(target as t.Node)) {
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
}
