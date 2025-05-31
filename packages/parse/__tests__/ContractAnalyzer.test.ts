import { ContractAnalyzer } from '../src/ContractAnalyzer';

describe('ContractAnalyzer', () => {
  let analyzer: ContractAnalyzer;

  beforeEach(() => {
    analyzer = new ContractAnalyzer();
  });

  it('should identify query methods', () => {
    const code = `
      export default class Contract {
        state: any;
        
        getState() {
          return this.state;
        }
        
        getValue() {
          const value = this.state.value;
          return value;
        }
      }
    `;

    const result = analyzer.analyzeFromCode(code);
    expect(result.queries).toEqual([
      { name: 'getState', params: [], returnType: 'void' },
      { name: 'getValue', params: [], returnType: 'void' },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should identify mutation methods', () => {
    const code = `
      export default class Contract {
        state: any;
        
        setState(newState: any) {
          this.state = newState;
        }
        
        updateValue(value: any) {
          this.state.value = value;
        }
      }
    `;

    const result = analyzer.analyzeFromCode(code);
    expect(result.queries).toEqual([]);
    expect(result.mutations).toEqual([
      { name: 'setState', params: [{ name: 'newState', type: 'any' }], returnType: 'void' },
      { name: 'updateValue', params: [{ name: 'value', type: 'any' }], returnType: 'void' },
    ]);
  });

  it('should identify both query and mutation methods', () => {
    const code = `
      export default class Contract {
        state: any;
        
        getState() {
          return this.state;
        }
        
        setState(newState: any) {
          this.state = newState;
        }
        
        updateAndGet() {
          this.state.value = 42;
          return this.state.value;
        }
      }
    `;

    const result = analyzer.analyzeFromCode(code);
    expect(result.queries).toEqual([
      { name: 'getState', params: [], returnType: 'void' },
    ]);
    expect(result.mutations).toEqual([
      { name: 'setState', params: [{ name: 'newState', type: 'any' }], returnType: 'void' },
      { name: 'updateAndGet', params: [], returnType: 'void' },
    ]);
  });

  it('should ignore static methods and constructors', () => {
    const code = `
      export default class Contract {
        state: any;
        
        constructor() {
          this.state = {};
        }
        
        static getStaticState() {
          return this.state;
        }
        
        getState() {
          return this.state;
        }
      }
    `;

    const result = analyzer.analyzeFromCode(code);
    expect(result.queries).toEqual([
      { name: 'getState', params: [], returnType: 'void' },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle class expression with named export', () => {
    const code = `
      var Contract = class {
        state = {};
        
        initialize() {
          this.state.value = 2.02234;
        }
        
        getState() {
          return this.state.value;
        }
        
        exp() {
          this.state.value = this.state.value * this.state.value;
          return this.state.value;
        }
      };
      
      export { Contract as default };
    `;

    const result = analyzer.analyzeFromCode(code);
    expect(result.queries).toEqual([
      { name: 'getState', params: [], returnType: 'void' },
    ]);
    expect(result.mutations).toEqual([
      { name: 'initialize', params: [], returnType: 'void' },
      { name: 'exp', params: [], returnType: 'void' },
    ]);
  });

  it('should throw error when no default export is found', () => {
    const code = `
      class Contract {
        state: any;
        
        getState() {
          return this.state;
        }
      }
    `;

    expect(() => analyzer.analyzeFromCode(code)).toThrow('No default exported class found in the code');
  });

  it('should throw error when default export is not a class', () => {
    const code = `
      export default function Contract() {
        return {};
      }
    `;

    expect(() => analyzer.analyzeFromCode(code)).toThrow('No default exported class found in the code');
  });

  it('should default parameter type to any when no type annotation', () => {
    const code = `
      export default class Contract {
        state: any;
        
        foo(param) {
          return this.state;
        }
      }
    `;

    const result = analyzer.analyzeFromCode(code);
    expect(result.queries).toEqual([
      { name: 'foo', params: [{ name: 'param', type: 'any' }], returnType: 'void' },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle nested object types inline', () => {
    const code = `
      export default class Contract {
        state: any;

        handle(data: { nested: { x: string } }) {
          return data.nested.x;
        }
      }
    `;

    const result = analyzer.analyzeFromCode(code);
    expect(result.queries).toEqual([
      { name: 'handle', params: [{ name: 'data', type: '{ nested: { x: string } }' }], returnType: 'void' },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle parameter type defined by interface with nested props', () => {
    const code = `
      interface Data {
        nested: {
          x: string;
        };
      }

      export default class Contract {
        state: any;

        process(data: Data) {
          return data.nested.x;
        }
      }
    `;

    const result = analyzer.analyzeFromCode(code);
    expect(result.queries).toEqual([
      { name: 'process', params: [{ name: 'data', type: 'Data' }], returnType: 'void' },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle async methods returning Promises', () => {
    const code = `
      export default class Contract {
        state: any;

        async fetchValue(id: number): Promise<string> {
          return this.state.values[id];
        }
      }
    `;

    const result = analyzer.analyzeFromCode(code);
    expect(result.queries).toEqual([
      { name: 'fetchValue', params: [{ name: 'id', type: 'number' }], returnType: 'Promise<string>' },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle inline nested object in Promise return types', () => {
    const code = `
      export default class Contract {
        state: any;

        async loadData(): Promise<{ user: { name: string; age: number } }> {
          return { user: this.state.user };
        }
      }
    `;

    const result = analyzer.analyzeFromCode(code);
    expect(result.queries).toEqual([
      { name: 'loadData', params: [], returnType: 'Promise<{ user: { name: string age: number } }>' },
    ]);
    expect(result.mutations).toEqual([]);
  });

  it('should handle generic methods', () => {
    const code = `
      export default class Contract {
        state: any;

        mapItems<T>(items: T[]): T[] {
          return items.map(i => i);
        }
      }
    `;

    const result = analyzer.analyzeFromCode(code);
    expect(result.queries).toEqual([
      { name: 'mapItems', params: [{ name: 'items', type: 'T[]' }], returnType: 'T[]' },
    ]);
    expect(result.mutations).toEqual([]);
  });

  describe('advanced mutation detection', () => {
    it('should detect increment and decrement mutations', () => {
      const code = `
        export default class Contract {
          inc() { this.state.count++; }
          dec() { --this.state.count; }
          postDec() { this.state.count--; }
          preInc() { ++this.state.count; }
        }
      `;
      const result = analyzer.analyzeFromCode(code);
      expect(result.mutations.map(m => m.name)).toEqual(['inc','dec','postDec','preInc']);
      expect(result.queries).toEqual([]);
    });
    it('should detect compound assignment mutations', () => {
      const code = `
        export default class Contract {
          add() { this.state.total += 5; }
          append() { this.state.name += ' Smith'; }
          mul() { this.state.count *= 2; }
          or() { this.state.flag |= 1; }
        }
      `;
      const result = analyzer.analyzeFromCode(code);
      expect(result.mutations.map(m => m.name)).toEqual(['add','append','mul','or']);
      expect(result.queries).toEqual([]);
    });
    it('should detect object property mutations', () => {
      const code = `
        export default class Contract {
          setName() { this.state.user.name = 'Dan'; }
          setTheme() { this.state.settings.theme = 'dark'; }
          incAge() { this.state.profile.age++; }
        }
      `;
      const result = analyzer.analyzeFromCode(code);
      expect(result.mutations.map(m => m.name)).toEqual(['setName','setTheme','incAge']);
      expect(result.queries).toEqual([]);
    });
    it('should detect array operation mutations', () => {
      const code = `
        export default class Contract {
          pushItem() { this.state.items.push('item'); }
          popHist() { this.state.history.pop(); }
          doSplice() { this.state.list.splice(1, 2); }
          shiftQueue() { this.state.queue.shift(); }
        }
      `;
      const result = analyzer.analyzeFromCode(code);
      expect(result.mutations.map(m => m.name)).toEqual(['pushItem','popHist','doSplice','shiftQueue']);
      expect(result.queries).toEqual([]);
    });
    it('should detect method-based and assign mutations', () => {
      const code = `
        export default class Contract {
          setSomething() { this.state.setSomething('value'); }
          assignConfig() { Object.assign(this.state.config, { debug: true }); }
          customUpdate() { this.state.data.update({ key: 'val' }); }
        }
      `;
      const result = analyzer.analyzeFromCode(code);
      expect(result.mutations.map(m => m.name)).toEqual(['setSomething','assignConfig','customUpdate']);
      expect(result.queries).toEqual([]);
    });
    it('should detect destructuring and spread mutations', () => {
      const code = `
        export default class Contract {
          reset() { this.state = { ...this.state, newProp: true }; }
          destr() { ({ a: this.state.a } = source); }
          spreadCoords() { this.state.coords = [...this.state.coords, [x, y]]; }
        }
      `;
      const result = analyzer.analyzeFromCode(code);
      expect(result.mutations.map(m => m.name)).toEqual(['reset','destr','spreadCoords']);
      expect(result.queries).toEqual([]);
    });
    it('should detect chained and nested mutations', () => {
      const code = `
        export default class Contract {
          incNested() { this.state.obj.nested.count += 1; }
          statInc() { this.state.stats.increment('xp'); }
        }
      `;
      const result = analyzer.analyzeFromCode(code);
      expect(result.mutations.map(m => m.name)).toEqual(['incNested','statInc']);
      expect(result.queries).toEqual([]);
    });
    it('should detect assignment of function calls and negation', () => {
      const code = `
        export default class Contract {
          assignCall() { this.state.value = getNewValue(); }
          assignNot() { this.state.flag = !this.state.flag; }
        }
      `;
      const result = analyzer.analyzeFromCode(code);
      expect(result.mutations.map(m => m.name)).toEqual(['assignCall','assignNot']);
      expect(result.queries).toEqual([]);
    });
  });

  describe('analyzeWithSchema', () => {
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
          params: [ { name: 'items', schema: { type: 'array', items: { type: 'string' } } } ],
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
          params: [ { name: 's', schema: { type: 'array', items: { type: 'number' } } } ],
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
          params: [ { name: 'm', schema: { type: 'object', additionalProperties: { type: 'number' } } } ],
          returnSchema: { type: 'object', additionalProperties: { type: 'number' } },
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
          params: [ { name: 'data', schema: {
            type: 'object',
            properties: {
              a: { type: 'number' },
              b: { type: 'array', items: { type: 'string' } },
            },
            required: ['a', 'b'],
          } } ],
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
          params: [ { name: 'x', schema: { type: 'number' } } ],
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
            { name: 'rest', schema: { type: 'array', items: { type: 'number' } } },
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
          params: [ { name: 'p', schema: { type: 'array', items: { anyOf: [ { type: 'number' }, { type: 'string' } ] } } } ],
          returnSchema: { type: 'array', items: { anyOf: [ { type: 'number' }, { type: 'string' } ] } },
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
          params: [ { name: 'm', schema: { type: 'object', additionalProperties: { type: 'number' } } } ],
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
          params: [ { name: 'x', schema: { anyOf: [ { type: 'string' }, { type: 'number' } ] } } ],
          returnSchema: { anyOf: [ { type: 'string' }, { type: 'number' } ] },
        },
        {
          name: 'both',
          params: [ { name: 'x', schema: {} } ],
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
          params: [ { name: 'm', schema: { anyOf: [ { type: 'string' } ] } } ],
          returnSchema: { anyOf: [ { type: 'string' } ] },
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
          params: [ { name: 'a', schema: { type: 'array', items: { type: 'string' } } } ],
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
          params: [ { name: 'cb', schema: {} } ],
          returnSchema: { type: 'boolean' },
        },
      ]);
      expect(result.mutations).toEqual([]);
    });
  });
}); 