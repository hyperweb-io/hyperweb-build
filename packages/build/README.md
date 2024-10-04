# Hyperweb Build

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/190171432-5526db8f-9952-45ce-a745-bea4302f912b.svg" />
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

## License

Hyperweb Build is MIT licensed.