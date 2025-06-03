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
 * Extract import paths from TypeScript/JavaScript content
 */
function extractImportPaths(content: string): string[] {
  const imports: string[] = [];

  // Regex patterns for different import styles
  const importPatterns = [
    /import\s+.*?from\s+['"](.*?)['"]/g, // import ... from '...'
    /import\s*\(\s*['"](.*?)['"]\s*\)/g, // import('...')
    /require\s*\(\s*['"](.*?)['"]\s*\)/g, // require('...')
    /export\s+.*?from\s+['"](.*?)['"]/g, // export ... from '...'
  ];

  for (const pattern of importPatterns) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const importPath = match[1];
      if (importPath && isLocalImport(importPath)) {
        imports.push(importPath);
      }
    }
  }

  return imports;
}

/**
 * Check if an import path is local (not from node_modules)
 */
function isLocalImport(importPath: string): boolean {
  return (
    importPath.startsWith('./') || importPath.startsWith('../') || importPath.startsWith('/')
  );
}

/**
 * Resolve import path relative to current directory
 */
function resolveImportPath(importPath: string, currentDir: string): string {
  // Handle absolute paths
  if (importPath.startsWith('/')) {
    return importPath.substring(1); // Remove leading slash
  }

  // Handle relative paths
  if (importPath.startsWith('./')) {
    const cleanPath = importPath.substring(2);
    return currentDir ? `${currentDir}/${cleanPath}` : cleanPath;
  }

  if (importPath.startsWith('../')) {
    const pathParts = currentDir.split('/').filter((part) => part !== '');
    const importParts = importPath.split('/');

    // Process ../ parts
    let i = 0;
    while (i < importParts.length && importParts[i] === '..') {
      pathParts.pop(); // Go up one directory
      i++;
    }

    // Add remaining import parts
    const remainingParts = importParts.slice(i);
    return [...pathParts, ...remainingParts].join('/');
  }

  // Handle direct paths (shouldn't happen for local imports but just in case)
  return currentDir ? `${currentDir}/${importPath}` : importPath;
}

/**
 * Get parent directory path
 */
function getParentPath(path: string): string {
  return path.split('/').slice(0, -1).join('/');
}

/**
 * Collect source files and their dependencies
 *
 * @param entryFile - The entry point file path
 * @param files - Array of file objects with path and content
 * @param options - Collection options
 * @returns Map of file paths to their content
 */
export function collectSourceFiles(
  entryFile: string,
  files: Array<{ path: string; content: string }>,
  options: CollectOptions = {}
): FileMap {
  const { extensions = ['.ts', '.tsx', '.js', '.jsx'], includeContent = true } = options;

  // Create file map for quick lookup
  const fileMap = Object.fromEntries(files.map((file) => [file.path, file.content]));

  const result: FileMap = {};
  const visited = new Set<string>();

  function readFile(filePath: string): string | null {
    return fileMap[filePath] ?? null;
  }

  function tryReadFile(filePath: string): { content: string; actualPath: string } | null {
    // Try exact path first
    let content = readFile(filePath);
    if (content !== null) {
      return { content, actualPath: filePath };
    }

    // Try with extensions
    for (const ext of extensions) {
      const tryPath = filePath + ext;
      const tryContent = readFile(tryPath);
      if (tryContent !== null) {
        return { content: tryContent, actualPath: tryPath };
      }
    }

    return null;
  }

  function traverse(filePath: string): void {
    if (visited.has(filePath)) return;
    visited.add(filePath);

    const fileResult = tryReadFile(filePath);
    if (!fileResult) return;

    // Store content (or empty string if not including content)
    result[fileResult.actualPath] = includeContent ? fileResult.content : '';

    // Process imports
    const imports = extractImportPaths(fileResult.content);
    for (const importPath of imports) {
      if (isLocalImport(importPath)) {
        const resolvedPath = resolveImportPath(
          importPath,
          getParentPath(fileResult.actualPath)
        );
        traverse(resolvedPath);
      }
    }
  }

  traverse(entryFile);
  return result;
}
