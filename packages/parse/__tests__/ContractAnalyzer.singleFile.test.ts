import { ContractAnalyzer } from '../src/ContractAnalyzer';

describe('ContractAnalyzer - Single File Analysis', () => {
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
      {
        name: 'setState',
        params: [{ name: 'newState', type: 'any' }],
        returnType: 'void',
      },
      {
        name: 'updateValue',
        params: [{ name: 'value', type: 'any' }],
        returnType: 'void',
      },
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
    expect(result.queries).toEqual([{ name: 'getState', params: [], returnType: 'void' }]);
    expect(result.mutations).toEqual([
      {
        name: 'setState',
        params: [{ name: 'newState', type: 'any' }],
        returnType: 'void',
      },
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
    expect(result.queries).toEqual([{ name: 'getState', params: [], returnType: 'void' }]);
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
    expect(result.queries).toEqual([{ name: 'getState', params: [], returnType: 'void' }]);
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

    expect(() => analyzer.analyzeFromCode(code)).toThrow(
      'No default exported class found in the code'
    );
  });

  it('should throw error when default export is not a class', () => {
    const code = `
      export default function Contract() {
        return {};
      }
    `;

    expect(() => analyzer.analyzeFromCode(code)).toThrow(
      'No default exported class found in the code'
    );
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
      {
        name: 'foo',
        params: [{ name: 'param', type: 'any' }],
        returnType: 'void',
      },
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
      {
        name: 'handle',
        params: [{ name: 'data', type: '{ nested: { x: string } }' }],
        returnType: 'void',
      },
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
      {
        name: 'process',
        params: [{ name: 'data', type: 'Data' }],
        returnType: 'void',
      },
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
      {
        name: 'fetchValue',
        params: [{ name: 'id', type: 'number' }],
        returnType: 'Promise<string>',
      },
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
      {
        name: 'loadData',
        params: [],
        returnType: 'Promise<{ user: { name: string age: number } }>',
      },
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
      {
        name: 'mapItems',
        params: [{ name: 'items', type: 'T[]' }],
        returnType: 'T[]',
      },
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
      expect(result.mutations.map((m) => m.name)).toEqual(['inc', 'dec', 'postDec', 'preInc']);
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
      expect(result.mutations.map((m) => m.name)).toEqual(['add', 'append', 'mul', 'or']);
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
      expect(result.mutations.map((m) => m.name)).toEqual(['setName', 'setTheme', 'incAge']);
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
      expect(result.mutations.map((m) => m.name)).toEqual([
        'pushItem',
        'popHist',
        'doSplice',
        'shiftQueue',
      ]);
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
      expect(result.mutations.map((m) => m.name)).toEqual([
        'setSomething',
        'assignConfig',
        'customUpdate',
      ]);
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
      expect(result.mutations.map((m) => m.name)).toEqual(['reset', 'destr', 'spreadCoords']);
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
      expect(result.mutations.map((m) => m.name)).toEqual(['incNested', 'statInc']);
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
      expect(result.mutations.map((m) => m.name)).toEqual(['assignCall', 'assignNot']);
      expect(result.queries).toEqual([]);
    });
  });

  describe('intelligent method classification', () => {
    it('should classify getter methods as queries', () => {
      const code = `
        export default class Contract {
          state = { users: [], config: {} };
          
          checkUsers() {
            return this.state.users.getLength(); // custom getter
          }
          
          verifyConfig() {
            return this.state.config.isValid(); // is* pattern
          }
          
          lookupUser() {
            return this.state.users.hasUser('id'); // has* pattern
          }
        }
      `;

      const result = analyzer.analyzeFromCode(code);
      expect(result.queries.map((q) => q.name)).toEqual([
        'checkUsers',
        'verifyConfig',
        'lookupUser',
      ]);
      expect(result.mutations).toEqual([]);
    });

    it('should classify search/query methods as queries', () => {
      const code = `
        export default class Contract {
          state = { items: [] };
          
          findItems() {
            return this.state.items.findByCategory('electronics');
          }
          
          searchProducts() {
            return this.state.items.searchByName('laptop');
          }
          
          queryInventory() {
            return this.state.items.queryAvailable();
          }
        }
      `;

      const result = analyzer.analyzeFromCode(code);
      expect(result.queries.map((q) => q.name)).toEqual([
        'findItems',
        'searchProducts',
        'queryInventory',
      ]);
      expect(result.mutations).toEqual([]);
    });

    it('should classify transformation methods as queries', () => {
      const code = `
        export default class Contract {
          state = { data: {} };
          
          convertData() {
            return this.state.data.toString();
          }
          
          exportData() {
            return this.state.data.toJSON();
          }
          
          formatData() {
            return this.state.data.toDisplayString();
          }
        }
      `;

      const result = analyzer.analyzeFromCode(code);
      expect(result.queries.map((q) => q.name)).toEqual([
        'convertData',
        'exportData',
        'formatData',
      ]);
      expect(result.mutations).toEqual([]);
    });

    it('should classify functional methods as queries', () => {
      const code = `
        export default class Contract {
          state = { items: [] };
          
          processItems() {
            return this.state.items.map(x => x.id);
          }
          
          filterItems() {
            return this.state.items.filter(x => x.active);
          }
          
          checkItems() {
            return this.state.items.every(x => x.valid);
          }
          
          findFirst() {
            return this.state.items.at(0);
          }
        }
      `;

      const result = analyzer.analyzeFromCode(code);
      expect(result.queries.map((q) => q.name)).toEqual([
        'processItems',
        'filterItems',
        'checkItems',
        'findFirst',
      ]);
      expect(result.mutations).toEqual([]);
    });

    it('should classify setter/mutator methods as mutations', () => {
      const code = `
        export default class Contract {
          state = { users: [], config: {} };
          
          updateUser() {
            this.state.users.setActive(true);
          }
          
          modifyConfig() {
            this.state.config.addProperty('key', 'value');
          }
          
          changeState() {
            this.state.users.insertUser(user);
          }
          
          resetData() {
            this.state.config.clear();
          }
        }
      `;

      const result = analyzer.analyzeFromCode(code);
      expect(result.queries).toEqual([]);
      expect(result.mutations.map((m) => m.name)).toEqual([
        'updateUser',
        'modifyConfig',
        'changeState',
        'resetData',
      ]);
    });

    it('should classify action methods as mutations', () => {
      const code = `
        export default class Contract {
          state = { counter: 0, flags: {} };
          
          incrementCounter() {
            this.state.counter.increment();
          }
          
          toggleFlag() {
            this.state.flags.toggle('active');
          }
          
          enableFeature() {
            this.state.flags.enable('feature');
          }
          
          activateMode() {
            this.state.flags.activate('mode');
          }
        }
      `;

      const result = analyzer.analyzeFromCode(code);
      expect(result.queries).toEqual([]);
      expect(result.mutations.map((m) => m.name)).toEqual([
        'incrementCounter',
        'toggleFlag',
        'enableFeature',
        'activateMode',
      ]);
    });

    it('should handle unknown methods conservatively (as mutations)', () => {
      const code = `
        export default class Contract {
          state = { data: {} };
          
          customMethod() {
            this.state.data.unknownOperation();
          }
          
          mysteryFunction() {
            this.state.data.doSomething();
          }
        }
      `;

      const result = analyzer.analyzeFromCode(code);
      expect(result.queries).toEqual([]);
      expect(result.mutations.map((m) => m.name)).toEqual(['customMethod', 'mysteryFunction']);
    });

    it('should handle mixed patterns correctly', () => {
      const code = `
        export default class Contract {
          state = { items: [], metadata: {} };
          
          // Query patterns
          getItems() {
            return this.state.items.filter(x => x.active);
          }
          
          // Mutation patterns  
          addItem() {
            this.state.items.push(newItem);
          }
          
          // Custom method (unknown, defaults to mutation)
          processItem() {
            this.state.items.customProcess();
          }
          
          // Clear getter
          isReady() {
            return this.state.metadata.hasRequiredFields();
          }
        }
      `;

      const result = analyzer.analyzeFromCode(code);
      expect(result.queries.map((q) => q.name)).toEqual(['getItems', 'isReady']);
      expect(result.mutations.map((m) => m.name)).toEqual(['addItem', 'processItem']);
    });
  });
});
