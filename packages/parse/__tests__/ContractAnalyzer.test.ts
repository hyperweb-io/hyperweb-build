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
}); 