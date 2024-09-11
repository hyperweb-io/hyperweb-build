import fs from 'fs/promises';
import { Config, createGenerator } from 'ts-json-schema-generator';

export interface SchemaGeneratorOptions {
  sourcePath: string;
  tsconfigPath: string;
  type?: string;
  outputPath: string;
}

export async function generateSchema({
  sourcePath,
  tsconfigPath,
  type = '*',
  outputPath,
}: SchemaGeneratorOptions): Promise<void> {
  const config: Config = {
    path: sourcePath,
    tsconfig: tsconfigPath,
    type: type,
  };

  const schema = createGenerator(config).createSchema(config.type);
  const schemaString = JSON.stringify(schema, null, 2);

  await fs.writeFile(outputPath, schemaString);
}