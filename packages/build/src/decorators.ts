import * as ts from 'typescript';
import * as path from 'path';

export interface DecoratorInfo {
  name: string;
  args: any[];
  targetName: string;
  targetType?: 'class' | 'method' | 'property' | 'parameter' | 'function' | 'unknown';
  location?: {
    file: string;
    line: number;
    column: number;
  };
}

// Extract decorators using TypeScript AST
export function extractDecoratorsFromSourceFile(
  sourceFile: ts.SourceFile,
  checker: ts.TypeChecker,
  schemaData: Record<string, any>,
  baseDir: string
) {
  const decorators: DecoratorInfo[] = [];

  const visitNode = (node: ts.Node) => {
    if (ts.canHaveDecorators(node)) {
      const nodeDecorators = ts.getDecorators(node);
      if (nodeDecorators) {
        nodeDecorators.forEach((decorator) => {
          const decoratorInfo = extractDecoratorInfo(decorator, node, sourceFile, baseDir);
          if (decoratorInfo) {
            decorators.push(decoratorInfo);
          }
        });
      }
    }

    ts.forEachChild(node, visitNode);
  };

  visitNode(sourceFile);
  schemaData.decorators.push(...decorators);
}

// Extract detailed decorator information
function extractDecoratorInfo(
  decorator: ts.Decorator,
  targetNode: ts.Node,
  sourceFile: ts.SourceFile,
  baseDir: string
): DecoratorInfo | null {
  const decoratorExpression = decorator.expression;

  let decoratorName = 'unknown';
  let decoratorArgs: any[] = [];

  if (ts.isIdentifier(decoratorExpression)) {
    decoratorName = decoratorExpression.text;
  } else if (ts.isCallExpression(decoratorExpression)) {
    if (ts.isIdentifier(decoratorExpression.expression)) {
      decoratorName = decoratorExpression.expression.text;
    }
    decoratorArgs = decoratorExpression.arguments.map((arg) =>
      ts.isStringLiteral(arg) || ts.isNumericLiteral(arg)
        ? arg.text
        : 'complex'
    );
  }

  const targetName = (ts.isClassDeclaration(targetNode) && targetNode.name?.text) ||
    (ts.isMethodDeclaration(targetNode) && targetNode.name.getText()) ||
    (ts.isPropertyDeclaration(targetNode) && targetNode.name.getText()) ||
    (ts.isParameter(targetNode) && `parameter_${targetNode.getStart()}`) ||
    'unknown';

  const targetType = ts.isClassDeclaration(targetNode)
    ? 'class'
    : ts.isMethodDeclaration(targetNode)
      ? 'method'
      : ts.isPropertyDeclaration(targetNode)
        ? 'property'
        : ts.isParameter(targetNode)
          ? 'parameter'
          : 'unknown';

  const { line, character } = sourceFile.getLineAndCharacterOfPosition(decorator.getStart());

  return {
    name: decoratorName,
    args: decoratorArgs,
    targetName: targetName || 'unknown',
    targetType,
    location: {
      file: path.relative(baseDir, sourceFile.fileName),
      line: line + 1,
      column: character + 1,
    },
  };
}
