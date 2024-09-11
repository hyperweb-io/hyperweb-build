import fs from 'fs/promises';
import { join, resolve } from 'path';

import { InterwebBuild, InterwebBuildOptions } from '../src/index';

const fixtureDir = resolve(join(__dirname, '/../../../__fixtures__/', 'first'));
const outputDir = resolve(join(__dirname, '/../../../__output__/', 'first'));

describe('InterwebBuild', () => {
  it('builds the fixture project successfully', async () => {
    const outfile = join(outputDir, 'bundle.js');
    
    const options: Partial<InterwebBuildOptions> = {
      entryPoints: [join(fixtureDir, 'src/index.ts')],
      outfile
    };

    await InterwebBuild.build(options);

    // Check if the output file exists
    const outfileExists = await fs.access(outfile)
      .then(() => true)
      .catch(() => false);

    expect(outfileExists).toBe(true);

    // Optionally, you can read the contents of the file and perform additional checks
    const bundleContent = await fs.readFile(outfile, 'utf-8');
    expect(bundleContent).toContain('function greet');
    expect(bundleContent).toContain('function farewell');
  });
});