import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import * as t from '@babel/types';
import * as path from 'path';
import { Plugin } from 'esbuild';
import { HyperwebBuildOptions } from './build';
import { promises as fs } from 'fs';

interface SchemaExtractorOptions {
  outputPath?: string;
  include?: RegExp[];
  exclude?: RegExp[];
}

const schemaData: Record<string, any> = { state: {}, methods: {} };

export const createSchemaExtractorPlugin = (
  pluginOptions: SchemaExtractorOptions = {},
  hyperwebOptions?: HyperwebBuildOptions
): Plugin => ({
  name: 'schema-extractor',

  setup(build) {
    const filter = {
      include: pluginOptions.include || [/\.[jt]sx?$/],
      exclude: pluginOptions.exclude || [/node_modules/],
    };

    build.onLoad({ filter: new RegExp(filter.include.map(r => r.source).join('|')) }, async (args) => {
      if (filter.exclude.some(pattern => pattern.test(args.path))) return null;

      const source = await fs.readFile(args.path, 'utf8');
      const ast = parser.parse(source, { sourceType: 'module', plugins: ['typescript'] });

      traverse(ast, {
        TSInterfaceDeclaration(path) {
          if (path.node.id.name === 'State') {
            schemaData.state = extractStateSchema(path.node);
          }
        },
        ClassDeclaration(path) {
          if (path.node.id?.name === 'Contract') {
            schemaData.methods = extractPublicMethods(path.node);
          }
        }
      });

      return null;
    });

    build.onEnd(async () => {
      const bundlePath = hyperwebOptions?.outfile || 'dist/bundle.js';
      const schemaJsonPath = `${bundlePath}.schema.json`;
      await fs.writeFile(schemaJsonPath, JSON.stringify(schemaData, null, 2), 'utf8');
    });
  }
});

// Extracts schema from State interface
function extractStateSchema(interfaceNode: t.TSInterfaceDeclaration): Record<string, any> {
  const schema: Record<string, any> = { type: 'object', properties: {} };
  interfaceNode.body.body.forEach(member => {
    if (t.isTSPropertySignature(member) && member.key) {
      const propName = (member.key as t.Identifier).name;
      schema.properties[propName] = parseType(member.typeAnnotation?.typeAnnotation);
    }
  });
  return schema;
}

// Extracts public methods from the Contract class
function extractPublicMethods(classNode: t.ClassDeclaration): Record<string, any>[] {
  return classNode.body.body
    .filter((member): member is t.ClassMethod => t.isClassMethod(member) && member.accessibility === 'public')
    .map(member => ({
      functionName: (member.key as t.Identifier).name,
      parameters: member.params.map(param => {
        if (t.isIdentifier(param)) {
          return { name: param.name, type: 'unknown' };
        } else if (t.isAssignmentPattern(param) && t.isIdentifier(param.left)) {
          // Handle parameters with default values (AssignmentPattern)
          return { name: param.left.name, type: 'unknown' };
        } else if (t.isRestElement(param) && t.isIdentifier(param.argument)) {
          // Handle rest parameters (RestElement)
          return { name: param.argument.name, type: 'unknown' };
        }
        return { name: 'unknown', type: 'unknown' }; // Fallback for unsupported patterns
      })
    }));
}

// Parses type nodes to schema-compatible format
function parseType(typeNode: t.TSType): Record<string, any> {
  if (t.isTSNumberKeyword(typeNode)) return { type: 'number' };
  if (t.isTSStringKeyword(typeNode)) return { type: 'string' };
  if (t.isTSBooleanKeyword(typeNode)) return { type: 'boolean' };
  return { type: 'unknown' };
}
