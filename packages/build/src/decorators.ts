import generate from '@babel/generator';
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';
import { Plugin } from 'esbuild';
import * as path from 'path';

import { HyperwebBuildOptions } from './index';

interface DecoratorInfo {
  name: string;
  args: any[];
  targetName: string;
  targetType?: 'method' | 'function';
  location?: {
    file: string;
    line: number;
    column: number;
  };
}

interface DecoratorExtractorOptions {
  outputPath?: string;  // Where to save the decorator metadata
  include?: RegExp[];   // Patterns for files to process
  exclude?: RegExp[];   // Patterns for files to ignore
}

const decoratorMetadata: Record<string, DecoratorInfo[]> = {};


function normalizeFilePath(filePath: string, rootDir?: string): string {
    const projectRoot = rootDir || process.cwd();
    const relativePath = path.relative(projectRoot, filePath);
    return relativePath
      .replace(/\\/g, '/')
      .replace(/^\.\//, '');
  }

export const createDecoratorExtractorPlugin = (
  pluginOptions: DecoratorExtractorOptions = {},
  hyperwebOptions?: HyperwebBuildOptions
): Plugin => ({
  name: 'decorator-extractor',
  
  setup(build) {

    // Set up the file filter
    const filter = {
      include: pluginOptions.include || [/\.[jt]sx?$/],
      exclude: pluginOptions.exclude || [/node_modules/],
    };

    build.onLoad({ filter: new RegExp(filter.include.map(r => r.source).join('|')) }, async (args) => {
      // Skip excluded files
      if (filter.exclude.some(pattern => pattern.test(args.path))) {
        return null;
      }

      // Read the file
      const source = await require('fs').promises.readFile(args.path, 'utf8');
      
      // Parse the code with babel
      const ast = parser.parse(source, {
        sourceType: 'module',
        plugins: ['typescript', 'decorators-legacy'],
      });

      // Track if we made any modifications
      let modified = false;

      // Traverse the AST
      traverse(ast, {
        Decorator(path) {
          const decorator = path.node;
          const parent = path.parent;

          // Only process method or function decorators
          if (!t.isClassMethod(parent as any) && !t.isFunctionDeclaration(parent as any)) {
            return;
          }

          const rootDir = hyperwebOptions?.absWorkingDir || process.cwd();
          const normalizedPath = normalizeFilePath(args.path, rootDir);

          // Get decorator information
          const decoratorInfo: DecoratorInfo = {
            // @ts-ignore
            name: t.isIdentifier(decorator.expression) 
              ? decorator.expression.name 
            // @ts-ignore
              : t.isCallExpression(decorator.expression)
                ? (decorator.expression.callee as t.Identifier).name
                : 'unknown',
            // @ts-ignore
            args: t.isCallExpression(decorator.expression)
              ? decorator.expression.arguments.map(arg => 
                // @ts-ignore
                t.isLiteral(arg) ? (arg as any).value : null)
              : [],
            // @ts-ignore
            targetName: t.isClassMethod(parent) 
              ? (parent.key as t.Identifier).name
              : (parent as t.FunctionDeclaration).id?.name || 'anonymous',
            // @ts-ignore
            // targetType: t.isClassMethod(parent) ? 'method' : 'function',
            
            // location: {
            //   file: normalizedPath,
            //   line: decorator.loc?.start.line || 0,
            //   column: decorator.loc?.start.column || 0,
            // }
          };

          // Store the metadata
          if (!decoratorMetadata[normalizedPath]) {
            decoratorMetadata[normalizedPath] = [];
          }
          decoratorMetadata[normalizedPath].push(decoratorInfo);

          // Remove the decorator
          path.remove();
          modified = true;
        }
      });

      // If we made modifications, generate new code
      if (modified) {
        const output = generate(ast, {}, source);
        
        return {
          contents: output.code,
          loader: args.path.endsWith('.ts') ? 'ts' : 'js',
        };
      }

      return null;
    });

    build.onEnd(async () => {
      if (pluginOptions.outputPath) {
        // Save the metadata to the specified file
        await require('fs').promises.writeFile(
          pluginOptions.outputPath,
          JSON.stringify(decoratorMetadata, null, 2),
          'utf8'
        );
      }
    });
  }
});