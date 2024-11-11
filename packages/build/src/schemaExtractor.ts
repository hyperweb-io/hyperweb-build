import * as ts from 'typescript';
import { promises as fs } from 'fs';
import * as path from 'path';
import { Plugin } from 'esbuild';
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
      const schemaData: Record<string, any> = { state: {}, methods: [] };

      // Extract state and methods from the contract's default export
      program.getSourceFiles().forEach((sourceFile) => {
        if (sourceFile.isDeclarationFile) return;

        const defaultExport = sourceFile.statements.find((stmt) =>
          ts.isExportAssignment(stmt) && !stmt.isExportEquals
        ) as ts.ExportAssignment | undefined;

        if (defaultExport && defaultExport.expression) {
          console.log(`Found default export in file: ${sourceFile.fileName}`);

          const contractSymbol = checker.getSymbolAtLocation(defaultExport.expression);

          if (contractSymbol) {
            console.log(`Extracting methods from contract symbol: ${contractSymbol.getName()}`);
            extractPublicMethods(contractSymbol, checker, schemaData);
          } else {
            console.warn(`No symbol found for default export in ${sourceFile.fileName}`);
          }
        }

        // Extract the State interface
        const stateInterface = sourceFile.statements.find(
          (stmt): stmt is ts.InterfaceDeclaration =>
            ts.isInterfaceDeclaration(stmt) && stmt.name.text === 'State'
        );

        if (stateInterface) {
          console.log("Extracting schema for 'State' interface");
          schemaData.state = serializeType(
            checker.getTypeAtLocation(stateInterface),
            checker
          );
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
    const matchesInclude = includePatterns.some((pattern) =>
      pattern.test(relativeFileName)
    );
    const matchesExclude = excludePatterns.some((pattern) =>
      pattern.test(relativeFileName)
    );
    return matchesInclude && !matchesExclude;
  });
}

function hasModifiers(node: ts.Node): node is ts.ClassElement | ts.MethodDeclaration {
  return (
    ts.isClassElement(node) ||
    ts.isMethodDeclaration(node) ||
    ts.isPropertyDeclaration(node) ||
    ts.isGetAccessorDeclaration(node) ||
    ts.isSetAccessorDeclaration(node)
  );
}

// Helper function to check if a declaration has public visibility
function isPublicDeclaration(node: ts.Node): boolean {
  // Check if the node has modifiers and is of a type that may include them
  if ("modifiers" in node && Array.isArray(node.modifiers)) {
    return !node.modifiers.some(
      (mod: ts.Modifier) =>
        mod.kind === ts.SyntaxKind.PrivateKeyword ||
        mod.kind === ts.SyntaxKind.ProtectedKeyword
    );
  }
  // If no modifiers exist, assume the node is public
  return true;
}

// Extract only public methods from the contract and add them to schemaData
function extractPublicMethods(
  symbol: ts.Symbol,
  checker: ts.TypeChecker,
  schemaData: Record<string, any>
) {
  const type = checker.getDeclaredTypeOfSymbol(symbol);
  const properties = checker.getPropertiesOfType(type);

  properties.forEach((prop) => {
    const propType = checker.getTypeOfSymbolAtLocation(
      prop,
      prop.valueDeclaration || prop.declarations[0]
    );

    // Check if the property is a method and explicitly public
    if (propType.getCallSignatures().length && prop.valueDeclaration) {
      // Check if the declaration is public
      const isPublic = isPublicDeclaration(prop.valueDeclaration);

      if (isPublic) {
        const methodSchema = {
          functionName: prop.getName(),
          parameters: [] as { name: string; type: any }[],
          returnType: serializeType(
            propType.getCallSignatures()[0].getReturnType(),
            checker
          ),
        };

        // Get parameter types for the method
        propType.getCallSignatures()[0].parameters.forEach((param) => {
          const paramType = checker.getTypeOfSymbolAtLocation(
            param,
            param.valueDeclaration || param.declarations[0]
          );
          methodSchema.parameters.push({
            name: param.getName(),
            type: serializeType(paramType, checker),
          });
        });

        schemaData.methods.push(methodSchema);
        console.log(`Extracted public method: ${methodSchema.functionName}`);
      }
    }
  });
}

function serializeType(
  type: ts.Type,
  checker: ts.TypeChecker,
  typeStack: ts.Type[] = []
): any {
  const typeString = checker.typeToString(type);

  if (typeStack.includes(type)) {
    return { $ref: typeString };
  }

  const newTypeStack = [...typeStack, type];

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

  return { type: 'any' };
}
