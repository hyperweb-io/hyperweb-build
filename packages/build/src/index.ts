import esbuild from 'esbuild';

export interface HyperwebBuildOptions extends esbuild.BuildOptions {
  // Add any Hyperweb-specific options here
  customPlugins?: esbuild.Plugin[];
}

export const defaultOptions: HyperwebBuildOptions = {
  bundle: true,
  minify: false,
  outfile: 'dist/bundle.js',
  platform: 'neutral',
  sourcemap: true,
  target: 'es2022',
  logLevel: 'info',
  format: 'esm',
  minifyIdentifiers: false,
  minifySyntax: false,
  minifyWhitespace: false,
  treeShaking: false,
};

export const HyperwebBuild = {
  async build(options: Partial<HyperwebBuildOptions> = {}): Promise<esbuild.BuildResult> {
    const mergedOptions: HyperwebBuildOptions = { ...defaultOptions, ...options };

    // Apply custom plugins if any
    if (mergedOptions.customPlugins) {
      mergedOptions.plugins = [
        ...(mergedOptions.plugins || []),
        ...mergedOptions.customPlugins
      ];
      delete mergedOptions.customPlugins;
    }

    // @ts-ignore
    return esbuild.build(mergedOptions);
  }
};

