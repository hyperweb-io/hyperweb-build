import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';
import generate from '@babel/generator';

export class MultiFileProcessor {
  /**
   * Combines multiple source files into a single TypeScript file
   * @param sourceFiles Record of file paths to their source code content
   * @param entryFile The path to the entry file (optional - will auto-detect if not provided)
   * @returns Combined TypeScript code as a string
   */
  public combineSourceFiles(sourceFiles: Record<string, string>, entryFile?: string): string {
    const resolvedEntryFile = entryFile || this.detectEntryFile(sourceFiles);

    if (!sourceFiles[resolvedEntryFile]) {
      throw new Error(`Entry file ${resolvedEntryFile} not found in source files`);
    }

    // Parse all files to extract their content
    const asts = this.parseAllFiles(sourceFiles);
    const combinedParts: string[] = [];

    // Process files in dependency order, starting with non-entry files
    const entryAst = asts[resolvedEntryFile];

    // First, add all non-entry files (interfaces, types, helper classes)
    for (const [filePath, ast] of Object.entries(asts)) {
      if (filePath === resolvedEntryFile) continue;

      const content = this.extractFileContent(ast, sourceFiles[filePath], filePath, true);
      if (content.trim()) {
        combinedParts.push(content);
      }
    }

    // Finally, add the entry file (the main contract class)
    const entryContent = this.extractFileContent(
      entryAst,
      sourceFiles[resolvedEntryFile],
      resolvedEntryFile,
      false
    );
    combinedParts.push(entryContent);

    return combinedParts.join('\n\n');
  }

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
      } catch (error: any) {
        throw new Error(`Failed to parse ${filePath}: ${error.message}`);
      }
    }

    return asts;
  }

  /**
   * Extracts relevant content from a file's AST, removing imports/exports as needed
   * @param ast The parsed AST of the file
   * @param originalCode The original source code
   * @param filePath The file path (for context)
   * @param removeExports Whether to remove export statements (true for non-entry files)
   * @returns Processed file content
   */
  private extractFileContent(
    ast: parser.ParseResult<t.File>,
    originalCode: string,
    filePath: string,
    removeExports: boolean
  ): string {
    const statements: string[] = [];

    traverse(ast, {
      // Skip import declarations
      ImportDeclaration(path) {
        path.skip();
      },

      // Handle export declarations
      ExportNamedDeclaration(path) {
        if (removeExports) {
          // For non-entry files, convert exports to regular declarations
          if (path.node.declaration) {
            statements.push(generate(path.node.declaration).code);
          }
        } else {
          // For entry file, keep exports as-is
          statements.push(generate(path.node).code);
        }
        path.skip();
      },

      ExportDefaultDeclaration(path) {
        if (removeExports) {
          // For non-entry files, convert default export to regular declaration
          statements.push(generate(path.node.declaration).code);
        } else {
          // For entry file, keep default export
          statements.push(generate(path.node).code);
        }
        path.skip();
      },

      // Keep all other top-level statements
      Statement(path) {
        // Only process top-level statements
        if (path.parentPath?.isProgram()) {
          statements.push(generate(path.node).code);
          path.skip();
        }
      },

      // Keep interface and type declarations
      TSInterfaceDeclaration(path) {
        if (path.parentPath?.isProgram()) {
          statements.push(generate(path.node).code);
          path.skip();
        }
      },

      TSTypeAliasDeclaration(path) {
        if (path.parentPath?.isProgram()) {
          statements.push(generate(path.node).code);
          path.skip();
        }
      },
    });

    return statements.join('\n');
  }

  /**
   * Automatically detects the entry file by finding files with default exported classes
   * @param sourceFiles Record of file paths to their source code content
   * @returns The path to the detected entry file
   */
  private detectEntryFile(sourceFiles: Record<string, string>): string {
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
