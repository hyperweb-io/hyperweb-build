import fs from 'fs/promises';
import { createGenerator } from 'ts-json-schema-generator';

import { generateSchema } from '../src/index';

jest.mock('fs/promises');
jest.mock('ts-json-schema-generator');

describe('generateSchema', () => {
  const mockOptions = {
    sourcePath: 'path/to/source/file',
    tsconfigPath: 'path/to/tsconfig.json',
    outputPath: 'path/to/output/file',
  };

  const mockSchema = { type: 'object', properties: {} };

  beforeEach(() => {
    jest.clearAllMocks();
    (createGenerator as jest.Mock).mockReturnValue({
      createSchema: jest.fn().mockReturnValue(mockSchema),
    });
  });

  it('generates and writes schema to file', async () => {
    await generateSchema(mockOptions);

    expect(createGenerator).toHaveBeenCalledWith({
      path: mockOptions.sourcePath,
      tsconfig: mockOptions.tsconfigPath,
      type: '*',
    });

    expect(fs.writeFile).toHaveBeenCalledWith(
      mockOptions.outputPath,
      JSON.stringify(mockSchema, null, 2)
    );
  });

  it('uses custom type when provided', async () => {
    await generateSchema({ ...mockOptions, type: 'CustomType' });

    expect(createGenerator).toHaveBeenCalledWith({
      path: mockOptions.sourcePath,
      tsconfig: mockOptions.tsconfigPath,
      type: 'CustomType',
    });
  });

  it('throws error if file writing fails', async () => {
    const error = new Error('Write failed');
    (fs.writeFile as jest.Mock).mockRejectedValue(error);

    await expect(generateSchema(mockOptions)).rejects.toThrow('Write failed');
  });
});