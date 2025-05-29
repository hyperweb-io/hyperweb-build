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
    expect(result.queries).toEqual(['getState', 'getValue']);
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
    expect(result.mutations).toEqual(['setState', 'updateValue']);
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
    expect(result.queries).toEqual(['getState']);
    expect(result.mutations).toEqual(['setState', 'updateAndGet']);
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
    expect(result.queries).toEqual(['getState']);
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
    expect(result.queries).toEqual(['getState']);
    expect(result.mutations).toEqual(['initialize', 'exp']);
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
}); 