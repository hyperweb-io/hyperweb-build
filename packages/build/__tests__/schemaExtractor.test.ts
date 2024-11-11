import fs from 'fs/promises';
import { join, resolve } from 'path';
import { HyperwebBuild, HyperwebBuildOptions, schemaExtractorPlugin } from '../src';

const outputDir = resolve(join(__dirname, '/../../../__output__/schema-data'));

const runTest = async (fixtureName: string) => {
  const fixtureDir = resolve(join(__dirname, `/../../../__fixtures__/schema-data/${fixtureName}`));
  const schemaOutputPath = join(outputDir, `${fixtureName}.schema.json`);

  const buildOptions: Partial<HyperwebBuildOptions> = {
    entryPoints: [join(fixtureDir, 'index.ts')],
    outfile: join(outputDir, `${fixtureName}.bundle.js`),
    customPlugins: [
      schemaExtractorPlugin({
        outputPath: schemaOutputPath,
        baseDir: fixtureDir,
        include: [/\.ts$/],
        exclude: [/node_modules/, /\.test\.ts$/],
      }),
    ],
  };

  await HyperwebBuild.build(buildOptions);
  const schemaContent = await fs.readFile(schemaOutputPath, 'utf-8');
  return JSON.parse(schemaContent);
};

describe('schemaExtractorPlugin', () => {
  it('should extract a basic contract with public and private methods', async () => {
    const schemaData = await runTest('state-export');

    expect(schemaData).toHaveProperty('state');
    expect(schemaData.state).toHaveProperty('type', 'object');
    expect(schemaData.state).toHaveProperty('properties');

    expect(schemaData).toHaveProperty('methods');
    expect(schemaData.methods).toEqual([]);

    expect(schemaData).toMatchSnapshot();
  });

  it('should extract methods from classes public methods', async () => {
    const schemaData = await runTest('public-methods');

    expect(schemaData).toHaveProperty('state');
    expect(schemaData.state).toHaveProperty('type', 'object');
    expect(schemaData.state).toHaveProperty('properties');

    const methodNames = schemaData.methods.map((method: any) => method.functionName);
    expect(methodNames).toContain('addToken');
    expect(methodNames).toContain('increment');
    expect(methodNames).toContain('removeToken');
    expect(methodNames).not.toContain('reset');

    expect(schemaData).toMatchSnapshot();
  });
});
