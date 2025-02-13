# Hyperweb Build

<p align="center" width="100%">
   <img src="https://raw.githubusercontent.com/hyperweb-io/.github/refs/heads/main/assets/logo.svg" alt="hyperweb" width="80"><br />
</p>

<p align="center" width="100%">
  <a href="https://github.com/hyperweb-io/hyperweb-build/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/hyperweb-io/hyperweb-build/actions/workflows/run-tests.yml/badge.svg" />
  </a>
  <br />
   <a href="https://github.com/hyperweb-io/hyperweb-build/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@hyperweb/build"><img height="20" src="https://img.shields.io/github/package-json/v/hyperweb-io/hyperweb-build?filename=packages%2Fbuild%2Fpackage.json"></a>
</p>

Hyperweb Build is a powerful wrapper around esbuild, designed to simplify and streamline your build process for Hyperweb projects.

## Features

- Simple API for building TypeScript projects
- Customizable build options
- Built-in support for common Hyperweb project configurations
- Easy integration with existing projects

## Installation

```sh
npm install @hyperweb/build
```

## Usage

Here's a basic example of how to use Hyperweb Build:

```js
import { HyperwebBuild, defaultOptions } from '@hyperweb/build';

// Use default options
HyperwebBuild.build();

// Customize options
HyperwebBuild.build({
  entryPoints: ['src/custom-entry.ts'],
  outfile: 'dist/custom-bundle.js',
  minify: true,
});

// Use default options as a base for a custom configuration
const myConfig = {
  ...defaultOptions,
  minify: true,
  target: 'es2018',
};
HyperwebBuild.build(myConfig);
```

## API Reference

### `HyperwebBuild.build(options)`

Builds your project using the provided options.

- `options` (optional): An object containing build options. If not provided, default options will be used.

Returns a Promise that resolves to the build result.

### `defaultOptions`

An object containing the default build options. You can spread these into your own configuration for easy customization.

## Default Configuration

Hyperweb Build comes with the following default configuration:

```ts
{
  bundle: true,
  minify: false,
  outfile: 'dist/bundle.js',
  platform: 'node',
  sourcemap: true,
  target: 'ESNext',
  logLevel: 'info',
}
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