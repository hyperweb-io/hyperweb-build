import fs from 'fs/promises';
import { join, resolve } from 'path';

import { HyperwebBuild, HyperwebBuildOptions, schemaExtractorPlugin } from '../src';

const fixtureDir = resolve(join(__dirname, '/../../../__fixtures__/', 'schema-data', 'state-export'));
const outputDir = resolve(join(__dirname, '/../../../__output__/', 'schema-data', 'state-export'));

describe('HyperwebBuild', () => {
  it('builds the fixture project successfully', async () => {
    const outfile = join(outputDir, 'bundle.js');
    const schemaOutputPath = `${outfile}.schema.json`;

    const options: Partial<HyperwebBuildOptions> = {
      entryPoints: [join(fixtureDir, 'index.ts')],
      outfile,
      customPlugins: [
        schemaExtractorPlugin({
          outputPath: schemaOutputPath,
          baseDir: fixtureDir,
          include: [/\.ts$/],  // Only process TypeScript files
          exclude: [/node_modules/, /\.test\.ts$/],  // Skip node_modules and test files
        }),
      ],
    };

    await HyperwebBuild.build(options);

    // Check if the output file exists
    const outfileExists = await fs.access(outfile)
      .then(() => true)
      .catch(() => false);

    expect(outfileExists).toBe(true);

    // Check if schema file exists
    const schemafileExists = await fs.access(schemaOutputPath)
      .then(() => true)
      .catch(() => false);

    expect(schemafileExists).toBe(true);

    // Optionally, read the schema file and verify the contents
    const schemaContent = await fs.readFile(schemaOutputPath, 'utf-8');
    const schemaData = JSON.parse(schemaContent);

    // Perform checks on schema structure (example: check if 'state' exists and has properties)
    expect(schemaData).toHaveProperty('state');
    expect(schemaData.state).toHaveProperty('type', 'object');
    expect(schemaData.state).toHaveProperty('properties');

    expect(schemaData).toMatchSnapshot();
  });
});
