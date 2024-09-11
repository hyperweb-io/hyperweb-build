import fs from 'fs/promises';
import { join, resolve } from 'path';

import { generateSchema } from '../src/index';

const fixtureDir = resolve(join(__dirname, '/../../../__fixtures__/', 'schema-test'));
const outputDir = resolve(join(__dirname, '/../../../__output__/', 'schema-test'));

describe('Schema Generator Integration', () => {
  const sourcePath = join(fixtureDir, 'src/types.ts');
  const tsconfigPath = join(fixtureDir, 'tsconfig.json');
  const outputPath = join(outputDir, 'schema.json');

  beforeAll(async () => {
    // Ensure the output directory exists
    await fs.mkdir(outputDir, { recursive: true });
  });

  it('generates schema from fixture project successfully', async () => {
    await generateSchema({
      sourcePath,
      tsconfigPath,
      outputPath,
    });

    // Check if the output file exists
    const outfileExists = await fs.access(outputPath)
      .then(() => true)
      .catch(() => false);

    expect(outfileExists).toBe(true);

    // Read and parse the generated schema
    const schemaContent = await fs.readFile(outputPath, 'utf-8');
    const schema = JSON.parse(schemaContent);

    // Perform assertions on the schema content
    expect(schema).toHaveProperty('$schema');
    expect(schema).toHaveProperty('definitions');
    
    // Assuming we have a User type in our fixture
    expect(schema.definitions).toHaveProperty('User');
    expect(schema.definitions.User).toHaveProperty('type', 'object');
    expect(schema.definitions.User.properties).toHaveProperty('id');
    expect(schema.definitions.User.properties).toHaveProperty('name');
    expect(schema.definitions.User.properties).toHaveProperty('email');
  });

  it('generates schema for a specific type', async () => {
    const specificOutputPath = join(outputDir, 'specific-schema.json');

    await generateSchema({
      sourcePath,
      tsconfigPath,
      type: 'User',
      outputPath: specificOutputPath,
    });

    const schemaContent = await fs.readFile(specificOutputPath, 'utf-8');
    const schema = JSON.parse(schemaContent);

    expect(schema).toHaveProperty('$ref', '#/definitions/User');
    expect(schema.definitions).toHaveProperty('User');
  });

//   afterAll(async () => {
//     // Clean up: remove the output directory
//     await fs.rm(outputDir, { recursive: true, force: true });
//   });
});