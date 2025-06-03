import { SourceCollector, FileMap, CollectOptions } from '../src/collect';

describe('SourceCollector', () => {
  let collector: SourceCollector;
  let collectorWithoutContent: SourceCollector;
  let collectorWithCustomExtensions: SourceCollector;

  beforeAll(() => {
    collector = new SourceCollector();
    collectorWithoutContent = new SourceCollector({ includeContent: false });
    collectorWithCustomExtensions = new SourceCollector({ extensions: ['.custom', '.ts'] });
  });

  describe('basic functionality', () => {
    it('should collect a single file with no imports', () => {
      const files = [{ path: 'main.ts', content: 'const x = 1;' }];

      const result = collector.collect('main.ts', files);

      expect(result).toEqual({
        'main.ts': 'const x = 1;',
      });
    });

    it('should return empty object when entry file not found', () => {
      const files = [{ path: 'other.ts', content: 'const x = 1;' }];

      const result = collector.collect('main.ts', files);

      expect(result).toEqual({});
    });
  });

  describe('import following', () => {
    it('should follow import statements', () => {
      const files = [
        { path: 'main.ts', content: 'import { foo } from "./helper";' },
        { path: 'helper.ts', content: 'export const foo = 1;' },
      ];

      const result = collector.collect('main.ts', files);

      expect(result).toEqual({
        'main.ts': 'import { foo } from "./helper";',
        'helper.ts': 'export const foo = 1;',
      });
    });

    it('should follow nested imports', () => {
      const files = [
        { path: 'main.ts', content: 'import { foo } from "./utils/helper";' },
        {
          path: 'utils/helper.ts',
          content: 'import { bar } from "./shared"; export const foo = bar;',
        },
        { path: 'utils/shared.ts', content: 'export const bar = 1;' },
      ];

      const result = collector.collect('main.ts', files);

      expect(result).toEqual({
        'main.ts': 'import { foo } from "./utils/helper";',
        'utils/helper.ts': 'import { bar } from "./shared"; export const foo = bar;',
        'utils/shared.ts': 'export const bar = 1;',
      });
    });

    it('should handle relative imports with ../', () => {
      const files = [
        { path: 'src/main.ts', content: 'import { foo } from "../utils/helper";' },
        { path: 'utils/helper.ts', content: 'export const foo = 1;' },
      ];

      const result = collector.collect('src/main.ts', files);

      expect(result).toEqual({
        'src/main.ts': 'import { foo } from "../utils/helper";',
        'utils/helper.ts': 'export const foo = 1;',
      });
    });
  });

  describe('import patterns', () => {
    it('should handle different import syntaxes', () => {
      const files = [
        {
          path: 'main.ts',
          content: `
            import { foo } from './helper1';
            import * as helper2 from "./helper2";
            import helper3, { bar } from './helper3';
            import('./helper4');
            const helper5 = require('./helper5');
            export { baz } from './helper6';
          `,
        },
        { path: 'helper1.ts', content: 'export const foo = 1;' },
        { path: 'helper2.ts', content: 'export const x = 1;' },
        { path: 'helper3.ts', content: 'export const bar = 1; export default 1;' },
        { path: 'helper4.ts', content: 'export const y = 1;' },
        { path: 'helper5.ts', content: 'module.exports = { z: 1 };' },
        { path: 'helper6.ts', content: 'export const baz = 1;' },
      ];

      const result = collector.collect('main.ts', files);
      const keys = Object.keys(result);

      expect(keys).toHaveLength(7);
      expect(keys.includes('main.ts')).toBe(true);
      expect(keys.includes('helper1.ts')).toBe(true);
      expect(keys.includes('helper2.ts')).toBe(true);
      expect(keys.includes('helper3.ts')).toBe(true);
      expect(keys.includes('helper4.ts')).toBe(true);
      expect(keys.includes('helper5.ts')).toBe(true);
      expect(keys.includes('helper6.ts')).toBe(true);
    });

    it('should ignore external package imports', () => {
      const files = [
        {
          path: 'main.ts',
          content: `
            import React from 'react';
            import { lodash } from 'lodash';
            import { foo } from './helper';
          `,
        },
        { path: 'helper.ts', content: 'export const foo = 1;' },
      ];

      const result = collector.collect('main.ts', files);
      const keys = Object.keys(result);

      expect(keys).toHaveLength(2);
      expect(keys.includes('main.ts')).toBe(true);
      expect(keys.includes('helper.ts')).toBe(true);
      expect(result['helper.ts']).toBe('export const foo = 1;');
    });
  });

  describe('extension resolution', () => {
    it('should resolve imports without extensions using default extensions', () => {
      const files = [
        { path: 'main.ts', content: 'import { foo } from "./helper";' },
        { path: 'helper.ts', content: 'export const foo = 1;' },
      ];

      const result = collector.collect('main.ts', files);

      expect(result).toEqual({
        'main.ts': 'import { foo } from "./helper";',
        'helper.ts': 'export const foo = 1;',
      });
    });

    it('should try multiple extensions in order', () => {
      const files = [
        { path: 'main.ts', content: 'import { foo } from "./helper";' },
        { path: 'helper.jsx', content: 'export const foo = 1;' },
      ];

      const result = collector.collect('main.ts', files);

      expect(result).toEqual({
        'main.ts': 'import { foo } from "./helper";',
        'helper.jsx': 'export const foo = 1;',
      });
    });

    it('should use custom extensions when provided', () => {
      const files = [
        { path: 'main.ts', content: 'import { foo } from "./helper";' },
        { path: 'helper.custom', content: 'export const foo = 1;' },
      ];

      const result = collectorWithCustomExtensions.collect('main.ts', files);

      expect(result).toEqual({
        'main.ts': 'import { foo } from "./helper";',
        'helper.custom': 'export const foo = 1;',
      });
    });

    it('should prefer exact path match over extension resolution', () => {
      const files = [
        { path: 'main.ts', content: 'import { foo } from "./helper";' },
        { path: 'helper', content: 'export const foo = "exact";' },
        { path: 'helper.ts', content: 'export const foo = "with-ext";' },
      ];

      const result = collector.collect('main.ts', files);

      expect(result['helper']).toBe('export const foo = "exact";');
    });
  });

  describe('circular dependencies', () => {
    it('should handle circular dependencies without infinite loop', () => {
      const files = [
        { path: 'a.ts', content: 'import { b } from "./b"; export const a = 1;' },
        { path: 'b.ts', content: 'import { a } from "./a"; export const b = 2;' },
      ];

      const result = collector.collect('a.ts', files);

      expect(result).toEqual({
        'a.ts': 'import { b } from "./b"; export const a = 1;',
        'b.ts': 'import { a } from "./a"; export const b = 2;',
      });
    });

    it('should handle self-imports', () => {
      const files = [
        { path: 'main.ts', content: 'import { foo } from "./main"; export const foo = 1;' },
      ];

      const result = collector.collect('main.ts', files);

      expect(result).toEqual({
        'main.ts': 'import { foo } from "./main"; export const foo = 1;',
      });
    });
  });

  describe('options', () => {
    it('should exclude content when includeContent is false', () => {
      const files = [
        { path: 'main.ts', content: 'import { foo } from "./helper";' },
        { path: 'helper.ts', content: 'export const foo = 1;' },
      ];

      const result = collectorWithoutContent.collect('main.ts', files);

      expect(result).toEqual({
        'main.ts': '',
        'helper.ts': '',
      });
    });

    it('should use default options when not provided', () => {
      const files = [{ path: 'main.ts', content: 'const x = 1;' }];

      const result1 = collector.collect('main.ts', files);
      const collector2 = new SourceCollector({});
      const result2 = collector2.collect('main.ts', files);

      expect(result1).toEqual(result2);
    });
  });

  describe('edge cases', () => {
    it('should handle empty file content', () => {
      const files = [{ path: 'main.ts', content: '' }];

      const result = collector.collect('main.ts', files);

      expect(result).toEqual({
        'main.ts': '',
      });
    });

    it('should handle files with only comments', () => {
      const files = [
        { path: 'main.ts', content: '// This is a comment\n/* Block comment */' },
      ];

      const result = collector.collect('main.ts', files);

      expect(result).toEqual({
        'main.ts': '// This is a comment\n/* Block comment */',
      });
    });

    it('should handle malformed import statements', () => {
      const files = [
        {
          path: 'main.ts',
          content: `
            import from './missing-specifier';
            import { from './missing-closing-brace';
            import { foo } from;
            import { foo } from "./helper";
          `,
        },
        { path: 'helper.ts', content: 'export const foo = 1;' },
      ];

      const result = collector.collect('main.ts', files);
      const keys = Object.keys(result);

      expect(keys).toHaveLength(2);
      expect(keys.includes('main.ts')).toBe(true);
      expect(keys.includes('helper.ts')).toBe(true);
    });

    it('should handle imports in strings and comments', () => {
      const files = [
        {
          path: 'main.ts',
          content: `
            // import { fake } from "./fake";
            /* import { fake } from "./fake"; */
            const str = 'import { fake } from "./fake";';
            import { foo } from "./helper";
          `,
        },
        { path: 'helper.ts', content: 'export const foo = 1;' },
      ];

      const result = collector.collect('main.ts', files);
      const keys = Object.keys(result);

      // Should only collect the real import, not the ones in comments/strings
      expect(keys).toHaveLength(2);
      expect(keys.includes('main.ts')).toBe(true);
      expect(keys.includes('helper.ts')).toBe(true);
      expect(result['helper.ts']).toBe('export const foo = 1;');
    });

    it('should handle absolute path imports that start with /', () => {
      const files = [
        { path: 'main.ts', content: 'import { foo } from "/absolute/helper";' },
        { path: 'absolute/helper.ts', content: 'export const foo = 1;' },
      ];

      const result = collector.collect('main.ts', files);

      expect(result).toEqual({
        'main.ts': 'import { foo } from "/absolute/helper";',
        'absolute/helper.ts': 'export const foo = 1;',
      });
    });

    it('should handle missing intermediate directories', () => {
      const files = [{ path: 'main.ts', content: 'import { foo } from "./missing/helper";' }];

      const result = collector.collect('main.ts', files);

      expect(result).toEqual({
        'main.ts': 'import { foo } from "./missing/helper";',
      });
    });
  });

  describe('complex scenarios', () => {
    it('should handle deep directory structures', () => {
      const files = [
        {
          path: 'src/components/Button/index.ts',
          content: 'import { styles } from "./styles"; export { Button } from "./Button";',
        },
        {
          path: 'src/components/Button/Button.tsx',
          content: 'import { Props } from "../types"; export const Button = () => {};',
        },
        { path: 'src/components/Button/styles.ts', content: 'export const styles = {};' },
        { path: 'src/components/types.ts', content: 'export interface Props {}' },
      ];

      const result = collector.collect('src/components/Button/index.ts', files);
      const keys = Object.keys(result);

      expect(keys).toHaveLength(4);
      expect(keys.includes('src/components/Button/index.ts')).toBe(true);
      expect(keys.includes('src/components/Button/Button.tsx')).toBe(true);
      expect(keys.includes('src/components/Button/styles.ts')).toBe(true);
      expect(keys.includes('src/components/types.ts')).toBe(true);
    });

    it('should handle mixed import styles in single file', () => {
      const files = [
        {
          path: 'main.ts',
          content: `
            import React from 'react';
            import { Component } from './components';
            const utils = require('./utils');
            import('./dynamic');
            export { helper } from './helper';
          `,
        },
        { path: 'components.ts', content: 'export const Component = {};' },
        { path: 'utils.js', content: 'module.exports = {};' },
        { path: 'dynamic.ts', content: 'export default {};' },
        { path: 'helper.ts', content: 'export const helper = {};' },
      ];

      const result = collector.collect('main.ts', files);
      const keys = Object.keys(result);

      expect(keys).toHaveLength(5);
      expect(keys.includes('main.ts')).toBe(true);
      expect(keys.includes('components.ts')).toBe(true);
      expect(keys.includes('utils.js')).toBe(true);
      expect(keys.includes('dynamic.ts')).toBe(true);
      expect(keys.includes('helper.ts')).toBe(true);
    });
  });
});
