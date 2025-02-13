# @hyperweb/ts-json-schema

<p align="center" width="100%">
   <img src="https://raw.githubusercontent.com/hyperweb-io/.github/refs/heads/main/assets/logo.svg" alt="hyperweb" width="80"><br />
</p>

<p align="center" width="100%">
  <a href="https://github.com/hyperweb-io/hyperweb-build/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/hyperweb-io/hyperweb-build/actions/workflows/run-tests.yml/badge.svg" />
  </a>
  <br />
   <a href="https://github.com/hyperweb-io/hyperweb-build/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@hyperweb/ts-json-schema"><img height="20" src="https://img.shields.io/github/package-json/v/hyperweb-io/hyperweb-build?filename=packages%2Fts-json-schema%2Fpackage.json"></a>
</p>

`@hyperweb/ts-json-schema` is a wrapper around ts-json-schema-generator, designed to simplify the process of generating JSON schemas from TypeScript files in Hyperweb projects.

## Features

- Simple API for generating JSON schemas from TypeScript
- Customizable schema generation options
- Built-in support for common Hyperweb project configurations

## Installation

```sh
npm install @hyperweb/ts-json-schema
```

## Usage

Here's a basic example of how to use Hyperweb TS JSON Schema:

```ts
import { generateSchema } from '@hyperweb/ts-json-schema';

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

Hyperweb TS JSON Schema uses the following configuration by default:

```ts
{
  path: sourcePath,
  tsconfig: tsconfigPath,
  type: '*', // Or the specified type if provided
}
```

These options are passed to the underlying `ts-json-schema-generator`. You can customize these by modifying the `generateSchema` function or by creating your own wrapper around it.

## Example

Here's an example of how you might use Hyperweb TS JSON Schema in a project:

```ts
import { generateSchema } from '@hyperweb/ts-json-schema';
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

## Interchain JavaScript Stack 

A unified toolkit for building applications and smart contracts in the Interchain ecosystem ⚛️

| Category              | Tools                                                                                                                  | Description                                                                                           |
|----------------------|------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| **Chain Information**   | [**Chain Registry**](https://github.com/hyperweb-io/chain-registry), [**Utils**](https://www.npmjs.com/package/@chain-registry/utils), [**Client**](https://www.npmjs.com/package/@chain-registry/client) | Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application. |
| **Wallet Connectors**| [**Interchain Kit**](https://github.com/hyperweb-io/interchain-kit)<sup>beta</sup>, [**Cosmos Kit**](https://github.com/hyperweb-io/cosmos-kit) | Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface. |
| **Signing Clients**          | [**InterchainJS**](https://github.com/hyperweb-io/interchainjs)<sup>beta</sup>, [**CosmJS**](https://github.com/cosmos/cosmjs) | A single, universal signing interface for any network |
| **SDK Clients**              | [**Telescope**](https://github.com/hyperweb-io/telescope)                                                          | Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules. |
| **Starter Kits**     | [**Create Interchain App**](https://github.com/hyperweb-io/create-interchain-app)<sup>beta</sup>, [**Create Cosmos App**](https://github.com/hyperweb-io/create-cosmos-app) | Set up a modern Interchain app by running one command. |
| **UI Kits**          | [**Interchain UI**](https://github.com/hyperweb-io/interchain-ui)                                                   | The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit. |
| **Testing Frameworks**          | [**Starship**](https://github.com/hyperweb-io/starship)                                                             | Unified Testing and Development for the Interchain. |
| **TypeScript Smart Contracts** | [**Create Hyperweb App**](https://github.com/hyperweb-io/create-hyperweb-app)                              | Build and deploy full-stack blockchain applications with TypeScript |
| **CosmWasm Contracts** | [**CosmWasm TS Codegen**](https://github.com/CosmWasm/ts-codegen)                                                   | Convert your CosmWasm smart contracts into dev-friendly TypeScript classes. |

## Credits

🛠 Built by Hyperweb (formerly Cosmology) — if you like our tools, please checkout and contribute to [our github ⚛️](https://github.com/hyperweb-io)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.