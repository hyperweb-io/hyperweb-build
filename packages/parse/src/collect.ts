import { parse, ParserOptions } from '@babel/parser';
import traverse, { NodePath } from '@babel/traverse';
import * as t from '@babel/types';

/**
 * File map type
 */
export type FileMap = Record<string, string>;

/**
 * Configuration options for source file collection
 */
export interface CollectOptions {
  /**
   * File extensions to try when resolving imports
   * @default ['.ts', '.tsx', '.js', '.jsx']
   */
  extensions?: string[];

  /**
   * Whether to include content in the result
   * @default true
   */
  includeContent?: boolean;
}

/**
 * Represents a parsed file with its AST and metadata
 */
interface ParsedFile {
  path: string;
  content: string;
  ast: t.File | null;
  imports: ImportInfo[];
  exports: ExportInfo[];
}

/**
 * Import information extracted from AST
 */
interface ImportInfo {
  source: string;
  type: 'import' | 'require' | 'dynamic-import';
  specifiers: string[];
  resolvedPath?: string;
}

/**
 * Export information extracted from AST
 */
interface ExportInfo {
  source?: string;
  specifiers: string[];
  type: 'named' | 'default' | 'namespace';
}

/**
 * Dependency graph node
 */
interface DependencyNode {
  path: string;
  dependencies: Set<string>;
  dependents: Set<string>;
}

/**
 * AST-based source file collector
 */
export class SourceCollector {
  private files: Map<string, ParsedFile> = new Map();
  private dependencyGraph: Map<string, DependencyNode> = new Map();
  private extensions: string[];
  private includeContent: boolean;

  constructor(options: CollectOptions = {}) {
    this.extensions = options.extensions ?? ['.ts', '.tsx', '.js', '.jsx'];
    this.includeContent = options.includeContent ?? true;
  }

  /**
   * Get parser options based on file extension
   */
  private getParserOptions(filePath: string): ParserOptions {
    const ext = this.getFileExtension(filePath);
    const isTypeScript = ext === '.ts' || ext === '.tsx';
    const isJSX = ext === '.tsx' || ext === '.jsx';

    return {
      sourceType: 'module',
      allowImportExportEverywhere: true,
      allowReturnOutsideFunction: true,
      errorRecovery: true,
      plugins: [
        ...(isTypeScript ? ['typescript' as const] : []),
        ...(isJSX ? ['jsx' as const] : []),
        'decorators-legacy',
        'classProperties',
        'objectRestSpread',
        'asyncGenerators',
        'functionBind',
        'exportDefaultFrom',
        'exportNamespaceFrom',
        'dynamicImport',
        'nullishCoalescingOperator',
        'optionalChaining',
        'optionalCatchBinding',
        'throwExpressions',
        'topLevelAwait',
      ],
    };
  }

  /**
   * Parse a single file into AST and extract import/export information
   */
  private parseFile(path: string, content: string): ParsedFile {
    const parsedFile: ParsedFile = {
      path,
      content,
      ast: null,
      imports: [],
      exports: [],
    };

    try {
      const parserOptions = this.getParserOptions(path);
      parsedFile.ast = parse(content, parserOptions);

      if (parsedFile.ast) {
        this.extractImportsAndExports(parsedFile);
      }
    } catch (error) {
      // If AST parsing fails, try to extract basic imports with regex fallback
      parsedFile.imports = this.extractImportsWithRegex(content);
    }

    return parsedFile;
  }

  /**
   * Extract imports and exports from AST
   */
  private extractImportsAndExports(parsedFile: ParsedFile): void {
    if (!parsedFile.ast) return;

    traverse(parsedFile.ast, {
      // Handle: import ... from '...'
      ImportDeclaration(path: NodePath<t.ImportDeclaration>) {
        const source = path.node.source.value;
        const specifiers = path.node.specifiers.map((spec) => {
          if (t.isImportDefaultSpecifier(spec)) return 'default';
          if (t.isImportNamespaceSpecifier(spec)) return '*';
          return spec.imported.type === 'Identifier'
            ? spec.imported.name
            : spec.imported.value;
        });

        parsedFile.imports.push({
          source,
          type: 'import',
          specifiers,
        });
      },

      // Handle: export ... from '...'
      ExportNamedDeclaration(path: NodePath<t.ExportNamedDeclaration>) {
        const source = path.node.source?.value;
        const specifiers =
          path.node.specifiers?.map((spec) => {
            if (t.isExportDefaultSpecifier(spec)) return 'default';
            if (t.isExportNamespaceSpecifier(spec)) return '*';
            return spec.exported.type === 'Identifier'
              ? spec.exported.name
              : spec.exported.value;
          }) ?? [];

        if (source) {
          // Re-export from another module
          parsedFile.imports.push({
            source,
            type: 'import',
            specifiers: specifiers.length > 0 ? specifiers : ['*'],
          });
        }

        parsedFile.exports.push({
          source,
          specifiers,
          type: 'named',
        });
      },

      // Handle: export * from '...'
      ExportAllDeclaration(path: NodePath<t.ExportAllDeclaration>) {
        const source = path.node.source.value;

        parsedFile.imports.push({
          source,
          type: 'import',
          specifiers: ['*'],
        });

        parsedFile.exports.push({
          source,
          specifiers: ['*'],
          type: 'namespace',
        });
      },

      // Handle: export default ...
      ExportDefaultDeclaration(path: NodePath<t.ExportDefaultDeclaration>) {
        parsedFile.exports.push({
          specifiers: ['default'],
          type: 'default',
        });
      },

      // Handle: import('...') and require('...')
      CallExpression(path: NodePath<t.CallExpression>) {
        const callee = path.node.callee;

        // Dynamic import()
        if (t.isImport(callee)) {
          const arg = path.node.arguments[0];
          if (t.isStringLiteral(arg)) {
            parsedFile.imports.push({
              source: arg.value,
              type: 'dynamic-import',
              specifiers: ['*'],
            });
          }
        }

        // require('...')
        if (t.isIdentifier(callee) && callee.name === 'require') {
          const arg = path.node.arguments[0];
          if (t.isStringLiteral(arg)) {
            parsedFile.imports.push({
              source: arg.value,
              type: 'require',
              specifiers: ['*'],
            });
          }
        }
      },
    });
  }

  /**
   * Fallback regex-based import extraction
   */
  private extractImportsWithRegex(content: string): ImportInfo[] {
    const imports: ImportInfo[] = [];

    const importPatterns = [
      { pattern: /import\s+.*?from\s+['"](.*?)['"]/g, type: 'import' as const },
      { pattern: /import\s*\(\s*['"](.*?)['"]\s*\)/g, type: 'dynamic-import' as const },
      { pattern: /require\s*\(\s*['"](.*?)['"]\s*\)/g, type: 'require' as const },
      { pattern: /export\s+.*?from\s+['"](.*?)['"]/g, type: 'import' as const },
    ];

    for (const { pattern, type } of importPatterns) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const source = match[1];
        if (source && this.isLocalImport(source)) {
          imports.push({
            source,
            type,
            specifiers: ['*'],
          });
        }
      }
    }

    return imports;
  }

  /**
   * Check if an import path is local
   */
  private isLocalImport(importPath: string): boolean {
    return (
      importPath.startsWith('./') || importPath.startsWith('../') || importPath.startsWith('/')
    );
  }

  /**
   * Get file extension
   */
  private getFileExtension(filePath: string): string {
    const lastDot = filePath.lastIndexOf('.');
    return lastDot !== -1 ? filePath.substring(lastDot) : '';
  }

  /**
   * Resolve import path relative to current file
   */
  private resolveImportPath(importPath: string, currentFilePath: string): string {
    const currentDir = this.getParentPath(currentFilePath);

    // Handle absolute paths
    if (importPath.startsWith('/')) {
      return importPath.substring(1);
    }

    // Handle relative paths
    if (importPath.startsWith('./')) {
      const cleanPath = importPath.substring(2);
      return currentDir ? `${currentDir}/${cleanPath}` : cleanPath;
    }

    if (importPath.startsWith('../')) {
      const pathParts = currentDir.split('/').filter((part) => part !== '');
      const importParts = importPath.split('/');

      let i = 0;
      while (i < importParts.length && importParts[i] === '..') {
        pathParts.pop();
        i++;
      }

      const remainingParts = importParts.slice(i);
      return [...pathParts, ...remainingParts].join('/');
    }

    return currentDir ? `${currentDir}/${importPath}` : importPath;
  }

  /**
   * Get parent directory path
   */
  private getParentPath(path: string): string {
    return path.split('/').slice(0, -1).join('/');
  }

  /**
   * Try to find a file with different extensions
   */
  private findFileWithExtensions(basePath: string): string | null {
    // Try exact path first
    if (this.files.has(basePath)) {
      return basePath;
    }

    // Try with extensions
    for (const ext of this.extensions) {
      const tryPath = basePath + ext;
      if (this.files.has(tryPath)) {
        return tryPath;
      }
    }

    return null;
  }

  /**
   * Build dependency graph from parsed files
   */
  private buildDependencyGraph(): void {
    // Initialize nodes
    for (const [path, parsedFile] of this.files) {
      this.dependencyGraph.set(path, {
        path,
        dependencies: new Set(),
        dependents: new Set(),
      });
    }

    // Resolve imports and build edges
    for (const [path, parsedFile] of this.files) {
      const node = this.dependencyGraph.get(path)!;

      for (const importInfo of parsedFile.imports) {
        if (this.isLocalImport(importInfo.source)) {
          const resolvedPath = this.resolveImportPath(importInfo.source, path);
          const actualPath = this.findFileWithExtensions(resolvedPath);

          if (actualPath) {
            importInfo.resolvedPath = actualPath;
            node.dependencies.add(actualPath);

            const dependentNode = this.dependencyGraph.get(actualPath);
            if (dependentNode) {
              dependentNode.dependents.add(path);
            }
          }
        }
      }
    }
  }

  /**
   * Collect files starting from entry point using dependency graph
   */
  private collectFromEntry(entryPath: string): Set<string> {
    const collected = new Set<string>();
    const queue = [entryPath];

    while (queue.length > 0) {
      const currentPath = queue.shift()!;

      if (collected.has(currentPath)) continue;
      if (!this.files.has(currentPath)) continue;

      collected.add(currentPath);

      const node = this.dependencyGraph.get(currentPath);
      if (node) {
        for (const dependency of node.dependencies) {
          if (!collected.has(dependency)) {
            queue.push(dependency);
          }
        }
      }
    }

    return collected;
  }

  /**
   * Main collection method
   */
  collect(entryFile: string, files: Array<{ path: string; content: string }>): FileMap {
    // Clear previous state
    this.files.clear();
    this.dependencyGraph.clear();

    // Parse all files into ASTs
    for (const file of files) {
      const parsedFile = this.parseFile(file.path, file.content);
      this.files.set(file.path, parsedFile);
    }

    // Build dependency graph
    this.buildDependencyGraph();

    // Find the actual entry file (try with extensions if needed)
    const actualEntryPath = this.findFileWithExtensions(entryFile);
    if (!actualEntryPath) {
      return {};
    }

    // Collect all dependencies from entry point
    const collectedPaths = this.collectFromEntry(actualEntryPath);

    // Build result map
    const result: FileMap = {};
    for (const path of collectedPaths) {
      const parsedFile = this.files.get(path);
      if (parsedFile) {
        result[path] = this.includeContent ? parsedFile.content : '';
      }
    }

    return result;
  }
}
