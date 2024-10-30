import fs from 'fs/promises';
import { join, resolve } from 'path';

import { createDecoratorExtractorPlugin } from '../src/decorators';
import { HyperwebBuild, HyperwebBuildOptions } from '../src/index';

const fixtureDir = resolve(join(__dirname, '/../../../__fixtures__/', 'decorators'));
const outputDir = resolve(join(__dirname, '/../../../__output__/', 'decorators'));

describe('HyperwebBuild', () => {
  it('builds the fixture project successfully', async () => {
    const outfile = join(outputDir, 'bundle.js');

    const options: Partial<HyperwebBuildOptions> = {
      entryPoints: [join(fixtureDir, 'src/index.ts')],
      outfile,
      external: ['otherpackage', '~somepackage'],
      customPlugins: [
        createDecoratorExtractorPlugin({
          outputPath: join(outputDir, 'decorators.json'),
          include: [/\.ts$/],  // Only process TypeScript files
          exclude: [/node_modules/, /\.test\.ts$/]  // Skip node_modules and test files
        })
      ]
    };

    await HyperwebBuild.build(options);

    // Check if the output file exists
    const outfileExists = await fs.access(outfile)
      .then(() => true)
      .catch(() => false);

    expect(outfileExists).toBe(true);

    // Optionally, you can read the contents of the file and perform additional checks
    // const bundleContent = await fs.readFile(outfile, 'utf-8');
    // expect(bundleContent).toContain('function greet');
    // expect(bundleContent).toContain('function farewell');
  });
});