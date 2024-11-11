import { Plugin } from 'esbuild';
import { promises as fs } from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

import { HyperwebBuildOptions } from './build';

interface SchemaExtractorOptions {
  outputPath?: string;
  baseDir?: string;
  include?: RegExp[];
  exclude?: RegExp[];
}

export const schemaExtractorPlugin = (
  pluginOptions: SchemaExtractorOptions = {}
): Plugin => ({
  name: 'schema-extractor',

  setup(build) {
    const hyperwebBuildOptions = build.initialOptions;

    build.onEnd(async () => {
      const baseDir = pluginOptions.baseDir || process.cwd();
      const sourceFiles = getSourceFiles(
        pluginOptions,
        hyperwebBuildOptions,
        baseDir
      );

      if (!sourceFiles.length) {
        console.error(
          'No entry files provided or matched for schema extraction.'
        );
        return;
      }

      const program = ts.createProgram(sourceFiles, {
        target: ts.ScriptTarget.ESNext,
        module: ts.ModuleKind.CommonJS,
        strict: true,
      });

      const checker = program.getTypeChecker();

      const schemaData: Record<string, any> = { state: {}, methods: {} };

      const interfacesToExtract = ['State'];

      interfacesToExtract.forEach((interfaceName) => {
        const sourceFile = program.getSourceFiles().find((file) =>
          file.statements.some(
            (stmt) =>
              ts.isInterfaceDeclaration(stmt) &&
              stmt.name.text === interfaceName
          )
        );

        if (sourceFile) {
          const interfaceNode = sourceFile.statements.find(
            (stmt): stmt is ts.InterfaceDeclaration =>
              ts.isInterfaceDeclaration(stmt) &&
              stmt.name.text === interfaceName
          );

          if (interfaceNode) {
            console.log(`Extracting schema for interface: ${interfaceName}`);
            schemaData[interfaceName.toLowerCase()] = serializeType(
              checker.getTypeAtLocation(interfaceNode),
              checker
            );
          }
        } else {
          console.warn(`Interface ${interfaceName} not found.`);
        }
      });

      const outputPath =
        pluginOptions.outputPath || path.join(baseDir, 'dist/schema.json');
      console.log('Writing schema data to:', outputPath);

      try {
        await fs.writeFile(
          outputPath,
          JSON.stringify(schemaData, null, 2),
          'utf8'
        );
        console.log(`Schema successfully written to ${outputPath}`);
      } catch (error) {
        console.error('Error writing schema data:', error);
      }
    });
  },
});

function getSourceFiles(
  pluginOptions: SchemaExtractorOptions,
  hyperwebBuildOptions: HyperwebBuildOptions,
  baseDir: string
): string[] {
  const includePatterns = pluginOptions.include || [/\.tsx?$/];
  const excludePatterns = pluginOptions.exclude || [/node_modules/];

  // Log the entryPoints for debugging purposes
  console.log('Debug - entryPoints value:', hyperwebBuildOptions.entryPoints);

  if (!hyperwebBuildOptions.entryPoints) {
    throw new Error('No entryPoints provided in build options.');
  }

  let resolvedFiles: string[] = [];

  if (Array.isArray(hyperwebBuildOptions.entryPoints)) {
    resolvedFiles = hyperwebBuildOptions.entryPoints.map((entry) => {
      if (typeof entry === 'string') {
        return path.resolve(baseDir, entry);
      } else {
        throw new Error('Invalid entryPoints array item: expected string');
      }
    });
  } else if (typeof hyperwebBuildOptions.entryPoints === 'object') {
    resolvedFiles = Object.values(hyperwebBuildOptions.entryPoints).map(
      (file) => path.resolve(baseDir, file)
    );
  } else {
    throw new Error(
      'Invalid entryPoints format: expected string[] or Record<string, string>'
    );
  }

  return resolvedFiles.filter((fileName) => {
    const relativeFileName = path.relative(baseDir, fileName);
    console.log('Checking file:', relativeFileName);
    const matchesInclude = includePatterns.some((pattern) =>
      pattern.test(relativeFileName)
    );
    const matchesExclude = excludePatterns.some((pattern) =>
      pattern.test(relativeFileName)
    );
    return matchesInclude && !matchesExclude;
  });
}

function serializeType(
  type: ts.Type,
  checker: ts.TypeChecker,
  typeStack: ts.Type[] = []
): any {
  const typeString = checker.typeToString(type);
  const isPrimitive = ['string', 'number', 'boolean', 'null', 'undefined', 'any'].includes(typeString);

  if (typeStack.includes(type)) {
    // Circular reference detected
    return { $ref: typeString };
  }

  // Add the current type to the stack
  const newTypeStack = [...typeStack, type];

  // Handle primitive types directly
  if (type.isStringLiteral()) {
    return { type: 'string', enum: [type.value] };
  }
  if (type.isNumberLiteral()) {
    return { type: 'number', enum: [type.value] };
  }
  if (typeString === 'string') {
    return { type: 'string' };
  }
  if (typeString === 'number') {
    return { type: 'number' };
  }
  if (typeString === 'boolean') {
    return { type: 'boolean' };
  }
  if (typeString === 'null') {
    return { type: 'null' };
  }
  if (typeString === 'undefined') {
    return { type: 'undefined' };
  }
  if (typeString === 'any') {
    return { type: 'any' };
  }

  if (checker.isArrayType(type)) {
    const typeReference = type as ts.TypeReference;
    const typeArguments = checker.getTypeArguments(typeReference);
    const elementType = typeArguments[0] || checker.getAnyType();

    return {
      type: 'array',
      items: serializeType(elementType, checker, newTypeStack),
    };
  }

  if (checker.isTupleType(type)) {
    const typeArguments = checker.getTypeArguments(type as ts.TypeReference);
    return {
      type: 'array',
      items: typeArguments.map((elementType) =>
        serializeType(elementType, checker, newTypeStack)
      ),
    };
  }

  if (type.isUnion()) {
    return {
      anyOf: type.types.map((subType) =>
        serializeType(subType, checker, newTypeStack)
      ),
    };
  }

  if (type.isIntersection()) {
    return {
      allOf: type.types.map((subType) =>
        serializeType(subType, checker, newTypeStack)
      ),
    };
  }

  if (type.getCallSignatures().length) {
    // Function type
    return { type: 'function' };
  }

  const properties = checker.getPropertiesOfType(type);
  if (properties.length) {
    const result: Record<string, any> = {};
    properties.forEach((prop) => {
      const propType = checker.getTypeOfSymbolAtLocation(
        prop,
        prop.valueDeclaration || prop.declarations[0]
      );
      result[prop.getName()] = serializeType(
        propType,
        checker,
        newTypeStack
      );
    });
    return { type: 'object', properties: result };
  }

  // If none of the above, return any
  return { type: 'any' };
}

