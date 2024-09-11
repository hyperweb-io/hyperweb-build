# @interweb/ts-json-schema

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/190171432-5526db8f-9952-45ce-a745-bea4302f912b.svg" />
</p>

<p align="center" width="100%">
  <a href="https://github.com/cosmology-tech/interweb-build/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/cosmology-tech/interweb-build/actions/workflows/run-tests.yml/badge.svg" />
  </a>
  <br />
   <a href="https://github.com/cosmology-tech/interweb-build/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@interweb/ts-json-schema"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/interweb-build?filename=packages%2Fts-json-schema%2Fpackage.json"></a>
</p>

`@interweb/ts-json-schema` is a wrapper around ts-json-schema-generator, designed to simplify the process of generating JSON schemas from TypeScript files in Interweb projects.

## Features

- Simple API for generating JSON schemas from TypeScript
- Customizable schema generation options
- Built-in support for common Interweb project configurations

## Installation

```sh
npm install @interweb/ts-json-schema
```

## Usage

Here's a basic example of how to use Interweb TS JSON Schema:

```ts
import { generateSchema } from '@interweb/ts-json-schema';

// Generate schema for all types in a file
await generateSchema({
  sourcePath: 'path/to/source/file.ts',
  tsconfigPath: 'path/to/tsconfig.json',
  outputPath: 'path/to/output/schema.json'
});

// Generate schema for a specific type
await generateSchema({
  sourcePath: 'path/to/source/file.ts',
  tsconfigPath: 'path/to/tsconfig.json',
  outputPath: 'path/to/output/schema.json',
  type: 'User'
});
```

## API Reference

### `generateSchema(options)`

Generates a JSON schema from TypeScript files using the provided options.

- `options`: An object containing the following properties:
  - `sourcePath` (required): Path to the source TypeScript file.
  - `tsconfigPath` (required): Path to the tsconfig.json file.
  - `outputPath` (required): Path where the generated schema will be saved.
  - `type` (optional): Specific type to generate schema for. If not provided, generates schema for all types.

Returns a Promise that resolves when the schema has been generated and saved.

## Configuration

Interweb TS JSON Schema uses the following configuration by default:

```ts
{
  path: sourcePath,
  tsconfig: tsconfigPath,
  type: '*', // Or the specified type if provided
}
```

These options are passed to the underlying `ts-json-schema-generator`. You can customize these by modifying the `generateSchema` function or by creating your own wrapper around it.

## Example

Here's an example of how you might use Interweb TS JSON Schema in a project:

```ts
import { generateSchema } from '@interweb/ts-json-schema';
import { join } from 'path';

const sourcePath = join(__dirname, 'src/types.ts');
const tsconfigPath = join(__dirname, 'tsconfig.json');
const outputPath = join(__dirname, 'schema.json');

async function generateProjectSchema() {
  try {
    await generateSchema({
      sourcePath,
      tsconfigPath,
      outputPath
    });
    console.log('Schema generated successfully!');
  } catch (error) {
    console.error('Error generating schema:', error);
  }
}

generateProjectSchema();
```

## License

Interweb TS JSON Schema is MIT licensed.