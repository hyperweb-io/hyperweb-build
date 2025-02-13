# Hyperweb Build Tools

<p align="center" width="100%">
   <img src="https://raw.githubusercontent.com/hyperweb-io/.github/refs/heads/main/assets/logo.svg" alt="hyperweb" width="80"><br />
</p>

<p align="center" width="100%">
  <a href="https://github.com/hyperweb-io/hyperweb-build/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/hyperweb-io/hyperweb-build/actions/workflows/run-tests.yml/badge.svg" />
  </a>
  <br />
   <a href="https://github.com/hyperweb-io/hyperweb-build/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>

Hyperweb is a collection of powerful tools designed to simplify and streamline your development process for web and TypeScript projects.

- [Packages](#packages)
  - [@hyperweb/build](#hyperwebbuild)
  - [@hyperweb/ts-json-schema](#hyperwebts-json-schema)
  - [hyperwebjs](#hyperwebjs)
- [Development](#development)
  - [Project Setup](#project-setup)
  - [Running Tests](#running-tests)
  - [Jest Watch Mode](#jest-watch-mode)
  - [Workflow Tips](#workflow-tips)
- [Interchain JavaScript Stack](#interchain-javascript-stack)

## Packages

This monorepo contains the following packages:

### [hyperwebjs](./packages/hyperwebjs)

[![npm version](https://img.shields.io/npm/v/hyperwebjs.svg)](https://www.npmjs.com/package/hyperwebjs)

HyperwebJS is a library for working with the Hyperweb blockchain.

#### Installation
```sh
npm install hyperwebjs
```

[Read more about @hyperweb/ts-json-schema](./packages/hyperwebjs)

### [@hyperweb/build](./packages/build)

[![npm version](https://img.shields.io/npm/v/@hyperweb/build.svg)](https://www.npmjs.com/package/@hyperweb/build)

Hyperweb Build is a powerful wrapper around esbuild, designed to simplify and streamline your build process for Hyperweb projects.

#### Installation
```sh
npm install @hyperweb/build
```

[Read more about @hyperweb/build](./packages/build)

### [@hyperweb/ts-json-schema](./packages/ts-json-schema)

[![npm version](https://img.shields.io/npm/v/@hyperweb/ts-json-schema.svg)](https://www.npmjs.com/package/@hyperweb/ts-json-schema)

Hyperweb TS JSON Schema is a powerful wrapper around ts-json-schema-generator, designed to simplify the process of generating JSON schemas from TypeScript files in Hyperweb projects.

#### Installation
```sh
npm install @hyperweb/ts-json-schema
```

[Read more about @hyperweb/ts-json-schema](./packages/ts-json-schema)

## Development

This section explains how to set up the project for development and how to run tests.

### Project Setup

To bootstrap the project, run the following commands from the root of the monorepo:

```sh
yarn 
yarn build
yarn symlink
```

This will install dependencies, build all packages, and create symlinks between them.


### Initialize Submodules

Before proceeding, make sure to initialize and update the submodules:

```sh
git submodule update --init --recursive
```

This command will initialize and fetch the submodules defined in the project.

### Running Tests

To run tests for a specific package, navigate to the package directory and use the `test:watch` script. For example, to run tests for `@hyperweb/build`:

```sh
cd ./packages/build
yarn test:watch
```

This command leverages Jest's watch mode, which provides a convenient interface for running tests.

### Jest Watch Mode

Jest watch mode offers several useful hotkeys to control test execution:

- `a` - Run all tests
- `f` - Run only failed tests
- `p` - Filter by a filename regex pattern
- `t` - Filter by a test name regex pattern
- `q` - Quit watch mode
- `Enter` - Trigger a test run

Here are some examples of how to use these hotkeys:

1. Press `p`, then type `utils` to run tests only in files with "utils" in their name.
2. Press `t`, then type `should calculate` to run only tests with "should calculate" in their description.
3. Press `a` to run all tests again after filtering.

These hotkeys make it easy to focus on specific tests or files during development.

### Workflow Tips

1. Keep the test runner in watch mode while you're developing. This provides instant feedback as you make changes.
2. Use the `p` and `t` filters to focus on the specific area you're working on. This can significantly speed up the test-debug cycle.
3. Remember to run all tests (`a`) before committing changes to ensure you haven't inadvertently broken anything elsewhere in the package.

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