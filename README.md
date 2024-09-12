# Interweb Build Tools

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/190171432-5526db8f-9952-45ce-a745-bea4302f912b.svg" />
</p>

<p align="center" width="100%">
  <a href="https://github.com/cosmology-tech/interweb-build/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/cosmology-tech/interweb-build/actions/workflows/run-tests.yml/badge.svg" />
  </a>
  <br />
   <a href="https://github.com/cosmology-tech/interweb-build/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>

Interweb is a collection of powerful tools designed to simplify and streamline your development process for web and TypeScript projects.

- [Packages](#packages)
  - [@interweb/build](#interwebbuild)
  - [@interweb/ts-json-schema](#interwebts-json-schema)
- [Development](#development)
  - [Project Setup](#project-setup)
  - [Running Tests](#running-tests)
  - [Jest Watch Mode](#jest-watch-mode)
  - [Workflow Tips](#workflow-tips)
- [License](#license)

## Packages

This monorepo contains the following packages:

### [@interweb/build](./packages/build)

[![npm version](https://img.shields.io/npm/v/@interweb/build.svg)](https://www.npmjs.com/package/@interweb/build)

Interweb Build is a powerful wrapper around esbuild, designed to simplify and streamline your build process for Interweb projects.

#### Installation
```sh
npm install @interweb/build
```

[Read more about @interweb/build](./packages/build)

### [@interweb/ts-json-schema](./packages/ts-json-schema)

[![npm version](https://img.shields.io/npm/v/@interweb/ts-json-schema.svg)](https://www.npmjs.com/package/@interweb/ts-json-schema)

Interweb TS JSON Schema is a powerful wrapper around ts-json-schema-generator, designed to simplify the process of generating JSON schemas from TypeScript files in Interweb projects.

#### Installation
```sh
npm install @interweb/ts-json-schema
```

[Read more about @interweb/ts-json-schema](./packages/ts-json-schema)

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

### Running Tests

To run tests for a specific package, navigate to the package directory and use the `test:watch` script. For example, to run tests for `@interweb/build`:

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

## License

Interweb Build is [MIT licensed](./LICENSE).