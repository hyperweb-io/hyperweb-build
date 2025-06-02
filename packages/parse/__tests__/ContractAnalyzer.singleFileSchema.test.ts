import { ContractAnalyzer } from '../src/ContractAnalyzer';

describe('ContractAnalyzer - Single File with Schema', () => {
  let analyzer: ContractAnalyzer;

  beforeEach(() => {
    analyzer = new ContractAnalyzer();
  });

  it('should handle array types', () => {
    const code = `
      export default class Contract {
        foo(items: string[]): string[] {
          return items;
        }
      }
    `;

    const result = analyzer.analyzeWithSchema(code);
    expect(result.queries).toEqual([
      {
        name: 'foo',
        params: [
          {
            name: 'items',
            schema: { type: 'array', items: { type: 'string' } },
          },
        ],
        returnSchema: { type: 'array', items: { type: 'string' } },
      },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle Set types', () => {
    const code = `
      export default class Contract {
        getSet(s: Set<number>): Set<number> {
          return s;
        }
      }
    `;

    const result = analyzer.analyzeWithSchema(code);
    expect(result.queries).toEqual([
      {
        name: 'getSet',
        params: [{ name: 's', schema: { type: 'array', items: { type: 'number' } } }],
        returnSchema: { type: 'array', items: { type: 'number' } },
      },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle Map types', () => {
    const code = `
      export default class Contract {
        getMap(m: Map<string, number>): Map<string, number> {
          return m;
        }
      }
    `;

    const result = analyzer.analyzeWithSchema(code);
    expect(result.queries).toEqual([
      {
        name: 'getMap',
        params: [
          {
            name: 'm',
            schema: {
              type: 'object',
              additionalProperties: { type: 'number' },
            },
          },
        ],
        returnSchema: {
          type: 'object',
          additionalProperties: { type: 'number' },
        },
      },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle inline object types with arrays', () => {
    const code = `
      export default class Contract {
        transform(data: { a: number; b: string[] }): { a: number; b: string[] } {
          return data;
        }
      }
    `;

    const result = analyzer.analyzeWithSchema(code);
    expect(result.queries).toEqual([
      {
        name: 'transform',
        params: [
          {
            name: 'data',
            schema: {
              type: 'object',
              properties: {
                a: { type: 'number' },
                b: { type: 'array', items: { type: 'string' } },
              },
              required: ['a', 'b'],
            },
          },
        ],
        returnSchema: {
          type: 'object',
          properties: {
            a: { type: 'number' },
            b: { type: 'array', items: { type: 'string' } },
          },
          required: ['a', 'b'],
        },
      },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle class property arrow functions', () => {
    const code = `
      export default class Contract {
        state: any;
        foo = (x: number) => {
          return this.state.value;
        }
      }
    `;

    const result = analyzer.analyzeWithSchema(code);
    expect(result.queries).toEqual([
      {
        name: 'foo',
        params: [{ name: 'x', schema: { type: 'number' } }],
        returnSchema: {},
      },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle optional chaining on state', () => {
    const code = `
      export default class Contract {
        state: any;
        getVal() {
          return this.state?.foo;
        }
      }
    `;

    const result = analyzer.analyzeWithSchema(code);
    expect(result.queries).toEqual([
      {
        name: 'getVal',
        params: [],
        returnSchema: {},
      },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle destructured parameters', () => {
    const code = `
      export default class Contract {
        diff({ a, b }: { a: number; b: number }) {
          return a - b;
        }
      }
    `;

    const result = analyzer.analyzeWithSchema(code);
    expect(result.queries).toEqual([
      {
        name: 'diff',
        params: [
          {
            name: '{ a, b }: { a: number; b: number }',
            schema: {
              type: 'object',
              properties: { a: { type: 'number' }, b: { type: 'number' } },
              required: ['a', 'b'],
            },
          },
        ],
        returnSchema: {},
      },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle default and rest parameters', () => {
    const code = `
      export default class Contract {
        sum(x = 1, ...rest: number[]): number {
          return rest.reduce((u, v) => u + v, x);
        }
      }
    `;

    const result = analyzer.analyzeWithSchema(code);
    expect(result.queries).toEqual([
      {
        name: 'sum',
        params: [
          { name: 'x', schema: {} },
          {
            name: 'rest',
            schema: { type: 'array', items: { type: 'number' } },
          },
        ],
        returnSchema: { type: 'number' },
      },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle tuple types', () => {
    const code = `
      export default class Contract {
        pair(p: [number, string]): [number, string] {
          return p;
        }
      }
    `;

    const result = analyzer.analyzeWithSchema(code);
    expect(result.queries).toEqual([
      {
        name: 'pair',
        params: [
          {
            name: 'p',
            schema: {
              type: 'array',
              items: { anyOf: [{ type: 'number' }, { type: 'string' }] },
            },
          },
        ],
        returnSchema: {
          type: 'array',
          items: { anyOf: [{ type: 'number' }, { type: 'string' }] },
        },
      },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle index signature object types', () => {
    const code = `
      export default class Contract {
        lookup(m: { [key: string]: number }) {
          return m['foo'];
        }
      }
    `;

    const result = analyzer.analyzeWithSchema(code);
    expect(result.queries).toEqual([
      {
        name: 'lookup',
        params: [
          {
            name: 'm',
            schema: {
              type: 'object',
              additionalProperties: { type: 'number' },
            },
          },
        ],
        returnSchema: {},
      },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle intersections and unions', () => {
    const code = `
      type A = { x: string };
      type B = { y: number };
      export default class Contract {
        either(x: string | number): string | number {
          return x;
        }
        both(x: A & B): A & B {
          return x;
        }
      }
    `;

    const result = analyzer.analyzeWithSchema(code);
    expect(result.queries).toEqual([
      {
        name: 'either',
        params: [
          {
            name: 'x',
            schema: { anyOf: [{ type: 'string' }, { type: 'number' }] },
          },
        ],
        returnSchema: { anyOf: [{ type: 'string' }, { type: 'number' }] },
      },
      {
        name: 'both',
        params: [{ name: 'x', schema: {} }],
        returnSchema: {},
      },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle literal types', () => {
    const code = `
      export default class Contract {
        mode(m: 'on' | 'off'): 'on' | 'off' {
          return m;
        }
      }
    `;

    const result = analyzer.analyzeWithSchema(code);
    expect(result.queries).toEqual([
      {
        name: 'mode',
        params: [{ name: 'm', schema: { type: 'string', enum: ['on', 'off'] } }],
        returnSchema: { type: 'string', enum: ['on', 'off'] },
      },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle generic Array<T> types', () => {
    const code = `
      export default class Contract {
        wrapList(a: Array<string>): Array<string> {
          return a;
        }
      }
    `;

    const result = analyzer.analyzeWithSchema(code);
    expect(result.queries).toEqual([
      {
        name: 'wrapList',
        params: [{ name: 'a', schema: { type: 'array', items: { type: 'string' } } }],
        returnSchema: { type: 'array', items: { type: 'string' } },
      },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle function type parameters', () => {
    const code = `
      export default class Contract {
        call(cb: (x: number) => boolean): boolean {
          return cb(1);
        }
      }
    `;

    const result = analyzer.analyzeWithSchema(code);
    expect(result.queries).toEqual([
      {
        name: 'call',
        params: [{ name: 'cb', schema: {} }],
        returnSchema: { type: 'boolean' },
      },
    ]);
    expect(result.mutations).toEqual([]);
  });
});
