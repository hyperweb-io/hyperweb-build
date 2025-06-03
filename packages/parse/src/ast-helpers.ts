import * as t from '@babel/types';

export class ASTHelpers {
  /**
   * Checks if a node represents a member expression accessing this.state at any depth
   */
  public static isStateMemberExpression(node: t.Node): boolean {
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
   * Checks if a node contains state member usage in assignment patterns or member expressions
   */
  public static containsStateMember(node: t.Node): boolean {
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
   * Analyzes the type of an object node
   */
  public static analyzeObjectType(objectNode: t.Expression): string | null {
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
  public static inferPropertyType(memberExpr: t.MemberExpression): string | null {
    // This would require type inference from the AST
    // For now, return null to be conservative
    return null;
  }

  /**
   * Infers the type of a variable
   */
  public static inferVariableType(identifier: t.Identifier): string | null {
    // This would require tracking variable declarations and their types
    // For now, return null to be conservative
    return null;
  }
}
