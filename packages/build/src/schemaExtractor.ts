import { Plugin } from 'esbuild';
import { promises as fs } from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

import { HyperwebBuildOptions } from './build';
import { extractDecoratorsFromSourceFile } from "./decorators";

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
    const hyperwebBuildOptions: HyperwebBuildOptions = build.initialOptions;

    build.onEnd(async () => {
      const baseDir = pluginOptions.baseDir || process.cwd();
      const sourceFiles = hyperwebBuildOptions.entryPoints as string[];

      const program = ts.createProgram(sourceFiles, {
        target: ts.ScriptTarget.ESNext,
        module: ts.ModuleKind.CommonJS,
        strict: true,
      });

      const checker = program.getTypeChecker();
      const schemaData: Record<string, any> = { state: {}, methods: [], decorators: [] };

      // Extract state and methods from the contract's default export
      program.getSourceFiles().forEach((sourceFile) => {
        if (sourceFile.isDeclarationFile) return;

        extractDefaultExport(sourceFile, checker, schemaData);
        extractStateInterface(sourceFile, checker, schemaData);
        extractDecoratorsFromSourceFile(sourceFile, checker, schemaData, baseDir);
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

// Helper function to check if a declaration has public visibility
function isPublicDeclaration(node: ts.Node): boolean {
  // Check if the node has modifiers and is of a type that may include them
  if ('modifiers' in node && Array.isArray(node.modifiers)) {
    return !node.modifiers.some(
      (mod: ts.Modifier) =>
        mod.kind === ts.SyntaxKind.PrivateKeyword ||
        mod.kind === ts.SyntaxKind.ProtectedKeyword
    );
  }
  // If no modifiers exist, assume the node is public
  return true;
}

function extractDefaultExport(
  sourceFile: ts.SourceFile,
  checker: ts.TypeChecker,
  schemaData: Record<string, any>
) {
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
          name: prop.getName(),
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
        console.log(`Extracted public method: ${methodSchema.name}`);
      }
    }
  });
}

function extractStateInterface(
  sourceFile: ts.SourceFile,
  checker: ts.TypeChecker,
  schemaData: Record<string, any>
) {
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
