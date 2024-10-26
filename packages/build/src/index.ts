import esbuild from 'esbuild';

export interface HyperwebBuildOptions extends esbuild.BuildOptions {
  // Allow plugins to be either direct Plugin objects or functions that receive options
  customPlugins?: (esbuild.Plugin | ((options: HyperwebBuildOptions) => esbuild.Plugin))[];
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

    // Apply custom plugins if any, passing the merged options
    if (mergedOptions.customPlugins) {
      mergedOptions.plugins = [
        ...(mergedOptions.plugins || []),
        ...mergedOptions.customPlugins.map(plugin => {
          // If plugin is a function that accepts options, call it with options
          if (typeof plugin === 'function') {
            return plugin(mergedOptions);
          }
          return plugin;
        })
      ];
      delete mergedOptions.customPlugins;
    }

    // @ts-ignore
    return esbuild.build(mergedOptions);
  }
};

