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

  describe('analyzeMultiFile', () => {
    it('should analyze a simple project with single file', () => {
      const sourceFiles = {
        'src/contract.ts': `
          export default class SimpleContract {
            state = { count: 0 };
            
            getCount() {
              return this.state.count;
            }
            
            increment() {
              this.state.count++;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles, 'src/contract.ts');
      expect(result.queries).toEqual([{ name: 'getCount', params: [], returnType: 'void' }]);
      expect(result.mutations).toEqual([
        { name: 'increment', params: [], returnType: 'void' },
      ]);
    });

    it('should analyze a project with imported types', () => {
      const sourceFiles = {
        'src/types.ts': `
          export interface UserData {
            name: string;
            age: number;
          }
          
          export type Status = 'active' | 'inactive';
        `,
        'src/contract.ts': `
          import { UserData, Status } from './types';
          
          export default class UserContract {
            state: { users: UserData[]; status: Status } = { users: [], status: 'active' };
            
            getUsers(): UserData[] {
              return this.state.users;
            }
            
            addUser(user: UserData): void {
              this.state.users.push(user);
            }
            
            setStatus(status: Status): void {
              this.state.status = status;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles, 'src/contract.ts');
      expect(result.queries).toEqual([
        { name: 'getUsers', params: [], returnType: 'UserData[]' },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'addUser',
          params: [{ name: 'user', type: 'UserData' }],
          returnType: 'void',
        },
        {
          name: 'setStatus',
          params: [{ name: 'status', type: 'Status' }],
          returnType: 'void',
        },
      ]);
    });

    it('should analyze a project with nested imports', () => {
      const sourceFiles = {
        'src/shared/types.ts': `
          export interface BaseConfig {
            id: string;
          }
        `,
        'src/models/user.ts': `
          import { BaseConfig } from '../shared/types';
          
          export interface User extends BaseConfig {
            name: string;
            email: string;
          }
        `,
        'src/contract.ts': `
          import { User } from './models/user';
          
          export default class UserManager {
            private state = { users: [] as User[] };
            
            findUser(id: string): User | undefined {
              return this.state.users.find(u => u.id === id);
            }
            
            createUser(userData: Omit<User, 'id'>): User {
              const user: User = { ...userData, id: Date.now().toString() };
              this.state.users.push(user);
              return user;
            }
            
            deleteUser(id: string): boolean {
              const index = this.state.users.findIndex(u => u.id === id);
              if (index >= 0) {
                this.state.users.splice(index, 1);
                return true;
              }
              return false;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles, 'src/contract.ts');
      expect(result.queries).toEqual([
        {
          name: 'findUser',
          params: [{ name: 'id', type: 'string' }],
          returnType: 'User | undefined',
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'createUser',
          params: [{ name: 'userData', type: "Omit<User, 'id'>" }],
          returnType: 'User',
        },
        {
          name: 'deleteUser',
          params: [{ name: 'id', type: 'string' }],
          returnType: 'boolean',
        },
      ]);
    });

    it('should handle re-exports and barrel files', () => {
      const sourceFiles = {
        'src/types/user.ts': `
          export interface User {
            id: string;
            name: string;
          }
        `,
        'src/types/index.ts': `
          export * from './user';
          export type ID = string;
        `,
        'src/contract.ts': `
          import { User, ID } from './types';
          
          export default class UserService {
            state = { users: new Map<ID, User>() };
            
            getUser(id: ID): User | null {
              return this.state.users.get(id) || null;
            }
            
            setUser(id: ID, user: User): void {
              this.state.users.set(id, user);
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles, 'src/contract.ts');
      expect(result.queries).toEqual([
        {
          name: 'getUser',
          params: [{ name: 'id', type: 'ID' }],
          returnType: 'User | null',
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'setUser',
          params: [
            { name: 'id', type: 'ID' },
            { name: 'user', type: 'User' },
          ],
          returnType: 'void',
        },
      ]);
    });

    it('should handle project with utility modules containing actual code', () => {
      const sourceFiles = {
        'src/utils/validation.ts': `
          export function isValidEmail(email: string): boolean {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
          }
          
          export function sanitizeInput(input: string): string {
            return input.trim().toLowerCase();
          }
        `,
        'src/utils/crypto.ts': `
          export class Hasher {
            static hash(value: string): string {
              return btoa(value);
            }
            
            static verify(value: string, hash: string): boolean {
              return this.hash(value) === hash;
            }
          }
        `,
        'src/types.ts': `
          export interface Account {
            id: string;
            email: string;
            passwordHash: string;
          }
        `,
        'src/contract.ts': `
          import { Account } from './types';
          import { isValidEmail, sanitizeInput } from './utils/validation';
          import { Hasher } from './utils/crypto';
          
          export default class AccountManager {
            state = { accounts: [] as Account[] };
            
            createAccount(email: string, password: string): Account | null {
              const cleanEmail = sanitizeInput(email);
              if (!isValidEmail(cleanEmail)) {
                return null;
              }
              
              const account: Account = {
                id: Date.now().toString(),
                email: cleanEmail,
                passwordHash: Hasher.hash(password)
              };
              
              this.state.accounts.push(account);
              return account;
            }
            
            authenticate(email: string, password: string): boolean {
              const cleanEmail = sanitizeInput(email);
              const account = this.state.accounts.find(a => a.email === cleanEmail);
              return account ? Hasher.verify(password, account.passwordHash) : false;
            }
            
            getAccount(id: string): Account | undefined {
              return this.state.accounts.find(a => a.id === id);
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles, 'src/contract.ts');
      expect(result.queries).toEqual([
        {
          name: 'authenticate',
          params: [
            { name: 'email', type: 'string' },
            { name: 'password', type: 'string' },
          ],
          returnType: 'boolean',
        },
        {
          name: 'getAccount',
          params: [{ name: 'id', type: 'string' }],
          returnType: 'Account | undefined',
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'createAccount',
          params: [
            { name: 'email', type: 'string' },
            { name: 'password', type: 'string' },
          ],
          returnType: 'Account | null',
        },
      ]);
    });

    it('should handle project with service classes and dependency injection', () => {
      const sourceFiles = {
        'src/services/storage.ts': `
          export interface StorageService {
            get<T>(key: string): T | null;
            set<T>(key: string, value: T): void;
            delete(key: string): boolean;
          }
          
          export class MemoryStorage implements StorageService {
            private data = new Map<string, any>();
            
            get<T>(key: string): T | null {
              return this.data.get(key) || null;
            }
            
            set<T>(key: string, value: T): void {
              this.data.set(key, value);
            }
            
            delete(key: string): boolean {
              return this.data.delete(key);
            }
          }
        `,
        'src/services/logger.ts': `
          export enum LogLevel {
            INFO = 'info',
            ERROR = 'error',
            DEBUG = 'debug'
          }
          
          export class Logger {
            log(level: LogLevel, message: string): void {
              console.log(\`[\${level.toUpperCase()}] \${message}\`);
            }
            
            info(message: string): void {
              this.log(LogLevel.INFO, message);
            }
            
            error(message: string): void {
              this.log(LogLevel.ERROR, message);
            }
          }
        `,
        'src/models/task.ts': `
          export interface Task {
            id: string;
            title: string;
            completed: boolean;
            createdAt: Date;
          }
          
          export type TaskStatus = 'pending' | 'completed' | 'failed';
        `,
        'src/contract.ts': `
          import { StorageService, MemoryStorage } from './services/storage';
          import { Logger, LogLevel } from './services/logger';
          import { Task, TaskStatus } from './models/task';
          
          export default class TaskManager {
            private storage: StorageService;
            private logger: Logger;
            
            constructor() {
              this.storage = new MemoryStorage();
              this.logger = new Logger();
            }
            
            state = { tasks: [] as Task[] };
            
            getTasks(): Task[] {
              this.logger.info('Retrieving all tasks');
              return this.state.tasks;
            }
            
            createTask(title: string): Task {
              const task: Task = {
                id: crypto.randomUUID(),
                title,
                completed: false,
                createdAt: new Date()
              };
              
              this.state.tasks.push(task);
              this.storage.set(\`task_\${task.id}\`, task);
              this.logger.info(\`Created task: \${task.title}\`);
              
              return task;
            }
            
            updateTaskStatus(id: string, status: TaskStatus): boolean {
              const task = this.state.tasks.find(t => t.id === id);
              if (!task) {
                this.logger.error(\`Task not found: \${id}\`);
                return false;
              }
              
              task.completed = status === 'completed';
              this.storage.set(\`task_\${task.id}\`, task);
              this.logger.info(\`Updated task \${id} to \${status}\`);
              
              return true;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles, 'src/contract.ts');
      expect(result.queries).toEqual([
        {
          name: 'getTasks',
          params: [],
          returnType: 'Task[]',
        },
        {
          name: 'updateTaskStatus',
          params: [
            { name: 'id', type: 'string' },
            { name: 'status', type: 'TaskStatus' },
          ],
          returnType: 'boolean',
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'createTask',
          params: [{ name: 'title', type: 'string' }],
          returnType: 'Task',
        },
      ]);
    });

    it('should handle complex barrel exports with mixed content', () => {
      const sourceFiles = {
        'src/domain/user.ts': `
          export interface User {
            id: string;
            name: string;
            role: UserRole;
          }
          
          export enum UserRole {
            ADMIN = 'admin',
            USER = 'user',
            GUEST = 'guest'
          }
          
          export function isAdmin(user: User): boolean {
            return user.role === UserRole.ADMIN;
          }
        `,
        'src/domain/permissions.ts': `
          import { User, UserRole } from './user';
          
          export class PermissionChecker {
            static canRead(user: User): boolean {
              return user.role !== UserRole.GUEST;
            }
            
            static canWrite(user: User): boolean {
              return user.role === UserRole.ADMIN;
            }
          }
          
          export type Permission = 'read' | 'write' | 'admin';
        `,
        'src/domain/index.ts': `
          export * from './user';
          export * from './permissions';
          
          // Additional types defined in barrel
          export interface Session {
            userId: string;
            token: string;
            expiresAt: Date;
          }
          
          // Utility functions in barrel
          export function createSession(userId: string): Session {
            return {
              userId,
              token: Math.random().toString(36),
              expiresAt: new Date(Date.now() + 3600000)
            };
          }
        `,
        'src/contract.ts': `
          import { 
            User, 
            UserRole, 
            PermissionChecker, 
            Permission,
            Session,
            createSession,
            isAdmin
          } from './domain';
          
          export default class UserSystemContract {
            state = { 
              users: [] as User[],
              sessions: [] as Session[]
            };
            
            getUsers(): User[] {
              return this.state.users;
            }
            
            createUser(name: string, role: UserRole): User {
              const user: User = {
                id: crypto.randomUUID(),
                name,
                role
              };
              
              this.state.users.push(user);
              return user;
            }
            
            login(userId: string): Session | null {
              const user = this.state.users.find(u => u.id === userId);
              if (!user || !PermissionChecker.canRead(user)) {
                return null;
              }
              
              const session = createSession(userId);
              this.state.sessions.push(session);
              return session;
            }
            
            promoteToAdmin(userId: string): boolean {
              const user = this.state.users.find(u => u.id === userId);
              if (!user) return false;
              
              user.role = UserRole.ADMIN;
              return true;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles, 'src/contract.ts');
      expect(result.queries).toEqual([
        {
          name: 'getUsers',
          params: [],
          returnType: 'User[]',
        },
        {
          name: 'promoteToAdmin',
          params: [{ name: 'userId', type: 'string' }],
          returnType: 'boolean',
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'createUser',
          params: [
            { name: 'name', type: 'string' },
            { name: 'role', type: 'UserRole' },
          ],
          returnType: 'User',
        },
        {
          name: 'login',
          params: [{ name: 'userId', type: 'string' }],
          returnType: 'Session | null',
        },
      ]);
    });

    it('should handle pure index file with only re-exports', () => {
      const sourceFiles = {
        'src/lib/math.ts': `
          export class Calculator {
            static add(a: number, b: number): number {
              return a + b;
            }
            
            static multiply(a: number, b: number): number {
              return a * b;
            }
          }
        `,
        'src/lib/string.ts': `
          export class StringUtils {
            static capitalize(str: string): string {
              return str.charAt(0).toUpperCase() + str.slice(1);
            }
            
            static reverse(str: string): string {
              return str.split('').reverse().join('');
            }
          }
        `,
        'src/lib/validation.ts': `
          export interface ValidationResult {
            isValid: boolean;
            errors: string[];
          }
          
          export class Validator {
            static validateEmail(email: string): ValidationResult {
              const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
              return {
                isValid,
                errors: isValid ? [] : ['Invalid email format']
              };
            }
          }
        `,
        'src/index.ts': `
          // Pure barrel file - only re-exports
          export { Calculator } from './lib/math';
          export { StringUtils } from './lib/string';
          export { Validator, ValidationResult } from './lib/validation';
        `,
        'src/contract.ts': `
          import { Calculator, StringUtils, Validator, ValidationResult } from './index';
          
          export default class UtilityContract {
            state = { operations: [] as string[] };
            
            calculate(operation: string, a: number, b: number): number {
              this.state.operations.push(\`\${operation}: \${a}, \${b}\`);
              
              switch(operation) {
                case 'add':
                  return Calculator.add(a, b);
                case 'multiply':
                  return Calculator.multiply(a, b);
                default:
                  throw new Error('Unknown operation');
              }
            }
            
            processText(text: string): string {
              const capitalized = StringUtils.capitalize(text);
              const reversed = StringUtils.reverse(capitalized);
              this.state.operations.push(\`text processing: \${text}\`);
              return reversed;
            }
            
            validateAndStore(email: string): ValidationResult {
              const result = Validator.validateEmail(email);
              if (result.isValid) {
                this.state.operations.push(\`validated email: \${email}\`);
              }
              return result;
            }
            
            getOperationHistory(): string[] {
              return this.state.operations;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles, 'src/contract.ts');
      expect(result.queries).toEqual([
        {
          name: 'getOperationHistory',
          params: [],
          returnType: 'string[]',
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'calculate',
          params: [
            { name: 'operation', type: 'string' },
            { name: 'a', type: 'number' },
            { name: 'b', type: 'number' },
          ],
          returnType: 'number',
        },
        {
          name: 'processText',
          params: [{ name: 'text', type: 'string' }],
          returnType: 'string',
        },
        {
          name: 'validateAndStore',
          params: [{ name: 'email', type: 'string' }],
          returnType: 'ValidationResult',
        },
      ]);
    });

    it('should handle project with abstract classes and inheritance', () => {
      const sourceFiles = {
        'src/base/entity.ts': `
          export abstract class BaseEntity {
            id: string;
            createdAt: Date;
            
            constructor(id: string) {
              this.id = id;
              this.createdAt = new Date();
            }
            
            abstract validate(): boolean;
            
            getAge(): number {
              return Date.now() - this.createdAt.getTime();
            }
          }
        `,
        'src/models/product.ts': `
          import { BaseEntity } from '../base/entity';
          
          export interface ProductData {
            name: string;
            price: number;
            category: string;
          }
          
          export class Product extends BaseEntity {
            name: string;
            price: number;
            category: string;
            
            constructor(id: string, data: ProductData) {
              super(id);
              this.name = data.name;
              this.price = data.price;
              this.category = data.category;
            }
            
            validate(): boolean {
              return this.name.length > 0 && this.price > 0;
            }
            
            getDisplayName(): string {
              return \`\${this.name} (\${this.category})\`;
            }
          }
        `,
        'src/services/inventory.ts': `
          import { Product, ProductData } from '../models/product';
          
          export class InventoryService {
            private products: Map<string, Product> = new Map();
            
            addProduct(id: string, data: ProductData): Product {
              const product = new Product(id, data);
              this.products.set(id, product);
              return product;
            }
            
            getProduct(id: string): Product | undefined {
              return this.products.get(id);
            }
            
            getAllProducts(): Product[] {
              return Array.from(this.products.values());
            }
          }
        `,
        'src/contract.ts': `
          import { ProductData } from './models/product';
          import { InventoryService } from './services/inventory';
          
          export default class ShopContract {
            private inventory: InventoryService;
            
            constructor() {
              this.inventory = new InventoryService();
            }
            
            state = { orderCount: 0 };
            
            createProduct(id: string, data: ProductData): ProductData & { id: string } {
              const product = this.inventory.addProduct(id, data);
              return {
                id: product.id,
                name: product.name,
                price: product.price,
                category: product.category
              };
            }
            
            getProduct(id: string): (ProductData & { id: string }) | null {
              const product = this.inventory.getProduct(id);
              if (!product) return null;
              
              return {
                id: product.id,
                name: product.name,
                price: product.price,
                category: product.category
              };
            }
            
            placeOrder(productId: string, quantity: number): boolean {
              const product = this.inventory.getProduct(productId);
              if (!product || !product.validate()) {
                return false;
              }
              
              this.state.orderCount += 1;
              return true;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles, 'src/contract.ts');
      expect(result.queries).toEqual([
        {
          name: 'createProduct',
          params: [
            { name: 'id', type: 'string' },
            { name: 'data', type: 'ProductData' },
          ],
          returnType: 'ProductData & { id: string }',
        },
        {
          name: 'getProduct',
          params: [{ name: 'id', type: 'string' }],
          returnType: '(ProductData & { id: string }) | null',
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'placeOrder',
          params: [
            { name: 'productId', type: 'string' },
            { name: 'quantity', type: 'number' },
          ],
          returnType: 'boolean',
        },
      ]);
    });

    it('should handle project with constants and configuration modules', () => {
      const sourceFiles = {
        'src/config/constants.ts': `
          export const API_ENDPOINTS = {
            USERS: '/api/users',
            ORDERS: '/api/orders',
            PRODUCTS: '/api/products'
          } as const;
          
          export const DEFAULT_LIMITS = {
            MAX_USERS: 1000,
            MAX_ORDERS: 5000,
            CACHE_TTL: 3600
          } as const;
          
          export enum Environment {
            DEVELOPMENT = 'development',
            STAGING = 'staging',
            PRODUCTION = 'production'
          }
        `,
        'src/config/settings.ts': `
          import { Environment, DEFAULT_LIMITS } from './constants';
          
          export interface AppConfig {
            environment: Environment;
            maxUsers: number;
            debug: boolean;
          }
          
          export class ConfigManager {
            private config: AppConfig;
            
            constructor(env: Environment) {
              this.config = {
                environment: env,
                maxUsers: DEFAULT_LIMITS.MAX_USERS,
                debug: env === Environment.DEVELOPMENT
              };
            }
            
            getConfig(): AppConfig {
              return { ...this.config };
            }
            
            updateMaxUsers(limit: number): void {
              this.config.maxUsers = Math.min(limit, DEFAULT_LIMITS.MAX_USERS);
            }
          }
        `,
        'src/types/user.ts': `
          export interface User {
            id: string;
            username: string;
            level: number;
          }
        `,
        'src/contract.ts': `
          import { Environment, DEFAULT_LIMITS } from './config/constants';
          import { ConfigManager, AppConfig } from './config/settings';
          import { User } from './types/user';
          
          export default class ConfigurableContract {
            private configManager: ConfigManager;
            
            constructor() {
              this.configManager = new ConfigManager(Environment.DEVELOPMENT);
            }
            
            state = { 
              users: [] as User[],
              initialized: false
            };
            
            initialize(environment: Environment): AppConfig {
              this.configManager = new ConfigManager(environment);
              this.state.initialized = true;
              return this.configManager.getConfig();
            }
            
            addUser(username: string): User | null {
              const config = this.configManager.getConfig();
              if (this.state.users.length >= config.maxUsers) {
                return null;
              }
              
              const user: User = {
                id: crypto.randomUUID(),
                username,
                level: 1
              };
              
              this.state.users.push(user);
              return user;
            }
            
            getUsers(): User[] {
              return this.state.users;
            }
            
            updateUserLimit(limit: number): void {
              this.configManager.updateMaxUsers(limit);
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles, 'src/contract.ts');
      expect(result.queries).toEqual([
        {
          name: 'getUsers',
          params: [],
          returnType: 'User[]',
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'initialize',
          params: [{ name: 'environment', type: 'Environment' }],
          returnType: 'AppConfig',
        },
        {
          name: 'addUser',
          params: [{ name: 'username', type: 'string' }],
          returnType: 'User | null',
        },
      ]);
    });

    it('should handle class with no default export gracefully', () => {
      const sourceFiles = {
        'src/contract.ts': `
          export class NamedContract {
            state = {};
            
            getValue() {
              return this.state;
            }
          }
        `,
      };

      expect(() => analyzer.analyzeMultiFile(sourceFiles)).toThrow(
        'No files with default exported classes found in source files'
      );
    });

    it('should handle missing entry file', () => {
      const sourceFiles = {
        'src/other.ts': `export const x = 1;`,
      };

      expect(() => analyzer.analyzeMultiFile(sourceFiles)).toThrow(
        'No files with default exported classes found in source files'
      );
    });
  });

  describe('analyzeMultiFileWithSchema', () => {
    it('should analyze project and return JSON schemas', () => {
      const sourceFiles = {
        'src/types.ts': `
          export interface Point {
            x: number;
            y: number;
          }
        `,
        'src/contract.ts': `
          import { Point } from './types';
          
          export default class GeometryContract {
            state = { points: [] as Point[] };
            
            getPoints(): Point[] {
              return this.state.points;
            }
            
            addPoint(point: Point): void {
              this.state.points.push(point);
            }
            
            movePoint(index: number, delta: Point): Point {
              const current = this.state.points[index];
              const updated = {
                x: current.x + delta.x,
                y: current.y + delta.y
              };
              this.state.points[index] = updated;
              return updated;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles, 'src/contract.ts');
      expect(result.queries).toEqual([
        {
          name: 'getPoints',
          params: [],
          returnSchema: { type: 'array', items: {} },
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'addPoint',
          params: [{ name: 'point', schema: {} }],
          returnSchema: {},
        },
        {
          name: 'movePoint',
          params: [
            { name: 'index', schema: { type: 'number' } },
            { name: 'delta', schema: {} },
          ],
          returnSchema: {},
        },
      ]);
    });

    it('should handle basic types in multi-file project', () => {
      const sourceFiles = {
        'src/contract.ts': `
          export default class BasicContract {
            state = { value: 0 };
            
            getValue(): number {
              return this.state.value;
            }
            
            setValue(value: number): void {
              this.state.value = value;
            }
            
            checkFlag(flag: boolean): boolean {
              return flag;
            }
            
            getName(name: string): string {
              return name.toUpperCase();
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'getValue',
          params: [],
          returnSchema: { type: 'number' },
        },
        {
          name: 'checkFlag',
          params: [{ name: 'flag', schema: { type: 'boolean' } }],
          returnSchema: { type: 'boolean' },
        },
        {
          name: 'getName',
          params: [{ name: 'name', schema: { type: 'string' } }],
          returnSchema: { type: 'string' },
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'setValue',
          params: [{ name: 'value', schema: { type: 'number' } }],
          returnSchema: {},
        },
      ]);
    });

    it('should handle array types across files', () => {
      const sourceFiles = {
        'src/types.ts': `
          export type StringList = string[];
          export type NumberArray = Array<number>;
        `,
        'src/contract.ts': `
          import { StringList, NumberArray } from './types';
          
          export default class ArrayContract {
            state = { items: [], numbers: [] };
            
            processStrings(items: string[]): string[] {
              return items.map(s => s.toUpperCase());
            }
            
            getNumbers(): number[] {
              return [1, 2, 3];
            }
            
            handleList(list: StringList): void {
              this.state.items.push(...list);
            }
            
            updateNumbers(nums: NumberArray): NumberArray {
              this.state.numbers = nums;
              return nums;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'processStrings',
          params: [
            {
              name: 'items',
              schema: { type: 'array', items: { type: 'string' } },
            },
          ],
          returnSchema: { type: 'array', items: { type: 'string' } },
        },
        {
          name: 'getNumbers',
          params: [],
          returnSchema: { type: 'array', items: { type: 'number' } },
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'handleList',
          params: [{ name: 'list', schema: { type: 'array', items: { type: 'string' } } }],
          returnSchema: {},
        },
        {
          name: 'updateNumbers',
          params: [{ name: 'nums', schema: { type: 'array', items: { type: 'number' } } }],
          returnSchema: { type: 'array', items: { type: 'number' } },
        },
      ]);
    });

    it('should handle Set and Map types', () => {
      const sourceFiles = {
        'src/contract.ts': `
          export default class CollectionContract {
            state = { tags: new Set(), mappings: new Map() };
            
            getTags(tags: Set<string>): Set<string> {
              return tags;
            }
            
            getMapping(map: Map<string, number>): Map<string, number> {
              return map;
            }
            
            addTags(tags: Set<string>): void {
              tags.forEach(tag => this.state.tags.add(tag));
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'getTags',
          params: [
            {
              name: 'tags',
              schema: { type: 'array', items: { type: 'string' } },
            },
          ],
          returnSchema: { type: 'array', items: { type: 'string' } },
        },
        {
          name: 'getMapping',
          params: [
            {
              name: 'map',
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
      expect(result.mutations).toEqual([
        {
          name: 'addTags',
          params: [
            {
              name: 'tags',
              schema: { type: 'array', items: { type: 'string' } },
            },
          ],
          returnSchema: {},
        },
      ]);
    });

    it('should handle inline object types', () => {
      const sourceFiles = {
        'src/contract.ts': `
          export default class ObjectContract {
            state = { config: {} };
            
            processData(data: { name: string; age: number }): { name: string; age: number } {
              return data;
            }
            
            updateConfig(config: { debug: boolean; timeout: number }): void {
              this.state.config = config;
            }
            
            getMetadata(): { version: string; features: string[] } {
              return { version: "1.0", features: ["auth", "db"] };
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'processData',
          params: [
            {
              name: 'data',
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  age: { type: 'number' },
                },
                required: ['name', 'age'],
              },
            },
          ],
          returnSchema: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              age: { type: 'number' },
            },
            required: ['name', 'age'],
          },
        },
        {
          name: 'getMetadata',
          params: [],
          returnSchema: {
            type: 'object',
            properties: {
              version: { type: 'string' },
              features: { type: 'array', items: { type: 'string' } },
            },
            required: ['version', 'features'],
          },
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'updateConfig',
          params: [
            {
              name: 'config',
              schema: {
                type: 'object',
                properties: {
                  debug: { type: 'boolean' },
                  timeout: { type: 'number' },
                },
                required: ['debug', 'timeout'],
              },
            },
          ],
          returnSchema: {},
        },
      ]);
    });

    it('should handle Promise types', () => {
      const sourceFiles = {
        'src/contract.ts': `
          export default class AsyncContract {
            state = { data: null };
            
            async fetchData(): Promise<string> {
              return "data";
            }
            
            async loadUser(id: number): Promise<{ id: number; name: string }> {
              return { id, name: "User" };
            }
            
            async saveData(data: string): Promise<void> {
              this.state.data = data;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'fetchData',
          params: [],
          returnSchema: { type: 'string' },
        },
        {
          name: 'loadUser',
          params: [{ name: 'id', schema: { type: 'number' } }],
          returnSchema: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              name: { type: 'string' },
            },
            required: ['id', 'name'],
          },
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'saveData',
          params: [{ name: 'data', schema: { type: 'string' } }],
          returnSchema: {},
        },
      ]);
    });

    it('should handle union types', () => {
      const sourceFiles = {
        'src/contract.ts': `
          export default class UnionContract {
            state = { value: null };
            
            getValue(input: string | number): string | number {
              return input;
            }
            
            setMode(mode: 'read' | 'write' | 'admin'): void {
              this.state.value = mode;
            }
            
            checkStatus(): boolean | null {
              return true;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'getValue',
          params: [
            {
              name: 'input',
              schema: { anyOf: [{ type: 'string' }, { type: 'number' }] },
            },
          ],
          returnSchema: { anyOf: [{ type: 'string' }, { type: 'number' }] },
        },
        {
          name: 'checkStatus',
          params: [],
          returnSchema: { anyOf: [{ type: 'boolean' }, {}] },
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'setMode',
          params: [
            {
              name: 'mode',
              schema: { type: 'string', enum: ['read', 'write', 'admin'] },
            },
          ],
          returnSchema: {},
        },
      ]);
    });

    it('should handle tuple types', () => {
      const sourceFiles = {
        'src/contract.ts': `
          export default class TupleContract {
            state = { pairs: [] };
            
            processCoordinate(coord: [number, number]): [number, number] {
              return [coord[0] * 2, coord[1] * 2];
            }
            
            createPair(a: string, b: number): [string, number] {
              return [a, b];
            }
            
            storePair(pair: [string, number]): void {
              this.state.pairs.push(pair);
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'processCoordinate',
          params: [
            {
              name: 'coord',
              schema: {
                type: 'array',
                items: { anyOf: [{ type: 'number' }, { type: 'number' }] },
              },
            },
          ],
          returnSchema: {
            type: 'array',
            items: { anyOf: [{ type: 'number' }, { type: 'number' }] },
          },
        },
        {
          name: 'createPair',
          params: [
            { name: 'a', schema: { type: 'string' } },
            { name: 'b', schema: { type: 'number' } },
          ],
          returnSchema: {
            type: 'array',
            items: { anyOf: [{ type: 'string' }, { type: 'number' }] },
          },
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'storePair',
          params: [
            {
              name: 'pair',
              schema: {
                type: 'array',
                items: { anyOf: [{ type: 'string' }, { type: 'number' }] },
              },
            },
          ],
          returnSchema: {},
        },
      ]);
    });

    it('should handle local interfaces within same file', () => {
      const sourceFiles = {
        'src/contract.ts': `
          interface User {
            id: string;
            name: string;
            age: number;
          }
          
          interface Config {
            debug: boolean;
            timeout?: number;
          }
          
          export default class LocalInterfaceContract {
            state = { users: [], config: {} };
            
            getUser(id: string): User | null {
              return { id, name: "Test", age: 25 };
            }
            
            createUser(userData: User): User {
              this.state.users.push(userData);
              return userData;
            }
            
            updateConfig(config: Config): void {
              this.state.config = config;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'getUser',
          params: [{ name: 'id', schema: { type: 'string' } }],
          returnSchema: {
            anyOf: [{}],
          },
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'createUser',
          params: [
            {
              name: 'userData',
              schema: {},
            },
          ],
          returnSchema: {},
        },
        {
          name: 'updateConfig',
          params: [
            {
              name: 'config',
              schema: {},
            },
          ],
          returnSchema: {},
        },
      ]);
    });

    it('should handle imported interfaces as unresolved references', () => {
      const sourceFiles = {
        'src/types.ts': `
          export interface UserProfile {
            username: string;
            email: string;
            preferences: {
              theme: 'light' | 'dark';
              notifications: boolean;
            };
          }
          
          export interface ApiResponse<T> {
            data: T;
            status: number;
            message: string;
          }
        `,
        'src/contract.ts': `
          import { UserProfile, ApiResponse } from './types';
          
          export default class ImportedInterfaceContract {
            state = { users: [], responses: [] };
            
            getProfile(id: string): UserProfile {
              return {
                username: "user",
                email: "user@example.com",
                preferences: { theme: "light", notifications: true }
              };
            }
            
            saveProfile(profile: UserProfile): void {
              this.state.users.push(profile);
            }
            
            handleResponse(response: ApiResponse<UserProfile>): ApiResponse<UserProfile> {
              this.state.responses.push(response);
              return response;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'getProfile',
          params: [{ name: 'id', schema: { type: 'string' } }],
          returnSchema: {},
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'saveProfile',
          params: [{ name: 'profile', schema: {} }],
          returnSchema: {},
        },
        {
          name: 'handleResponse',
          params: [{ name: 'response', schema: {} }],
          returnSchema: {},
        },
      ]);
    });

    it('should handle complex nested structures with mixed types', () => {
      const sourceFiles = {
        'src/contract.ts': `
          export default class ComplexContract {
            state = { data: {} };
            
            processNestedData(
              input: {
                metadata: { version: string; tags: string[] };
                payload: { [key: string]: number | boolean };
                coords: [number, number];
              }
            ): {
              processed: boolean;
              results: Array<{ id: string; value: any }>;
            } {
              return {
                processed: true,
                results: []
              };
            }
            
            updateNestedState(
              updates: {
                config?: { enabled: boolean };
                items: Array<{ name: string; count: number }>;
              }
            ): void {
              this.state.data = updates;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'processNestedData',
          params: [
            {
              name: 'input',
              schema: {
                type: 'object',
                properties: {
                  metadata: {
                    type: 'object',
                    properties: {
                      version: { type: 'string' },
                      tags: { type: 'array', items: { type: 'string' } },
                    },
                    required: ['version', 'tags'],
                  },
                  payload: {
                    type: 'object',
                    additionalProperties: {
                      anyOf: [{ type: 'number' }, { type: 'boolean' }],
                    },
                  },
                  coords: {
                    type: 'array',
                    items: { anyOf: [{ type: 'number' }, { type: 'number' }] },
                  },
                },
                required: ['metadata', 'payload', 'coords'],
              },
            },
          ],
          returnSchema: {
            type: 'object',
            properties: {
              processed: { type: 'boolean' },
              results: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: { type: 'string' },
                    value: {},
                  },
                  required: ['id', 'value'],
                },
              },
            },
            required: ['processed', 'results'],
          },
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'updateNestedState',
          params: [
            {
              name: 'updates',
              schema: {
                type: 'object',
                properties: {
                  config: {
                    type: 'object',
                    properties: {
                      enabled: { type: 'boolean' },
                    },
                    required: ['enabled'],
                  },
                  items: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        name: { type: 'string' },
                        count: { type: 'number' },
                      },
                      required: ['name', 'count'],
                    },
                  },
                },
                required: ['items'],
              },
            },
          ],
          returnSchema: {},
        },
      ]);
    });

    it('should handle parameter destructuring with schemas', () => {
      const sourceFiles = {
        'src/contract.ts': `
          export default class DestructuringContract {
            state = { sum: 0 };
            
            calculateSum({ a, b }: { a: number; b: number }): number {
              return a + b;
            }
            
            updateValues({ x, y, z = 0 }: { x: number; y: string; z?: number }): void {
              this.state.sum = x + z;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'calculateSum',
          params: [
            {
              name: '{ a, b }: { a: number; b: number }',
              schema: {
                type: 'object',
                properties: {
                  a: { type: 'number' },
                  b: { type: 'number' },
                },
                required: ['a', 'b'],
              },
            },
          ],
          returnSchema: { type: 'number' },
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'updateValues',
          params: [
            {
              name: '{ x, y, z = 0 }: { x: number; y: string; z?: number }',
              schema: {
                type: 'object',
                properties: {
                  x: { type: 'number' },
                  y: { type: 'string' },
                  z: { type: 'number' },
                },
                required: ['x', 'y'],
              },
            },
          ],
          returnSchema: {},
        },
      ]);
    });

    it('should handle type aliases with proper schema expansion', () => {
      const sourceFiles = {
        'src/types.ts': `
          export type Status = 'pending' | 'completed' | 'failed';
          export type UserRole = 'admin' | 'user' | 'guest';
          
          export type TaskData = {
            id: string;
            title: string;
            status: Status;
          };
        `,
        'src/contract.ts': `
          import { Status, UserRole, TaskData } from './types';
          
          export default class TypeAliasContract {
            state = { tasks: [], users: [] };
            
            getStatus(): Status {
              return 'pending';
            }
            
            setUserRole(role: UserRole): void {
              this.state.users.push({ role });
            }
            
            processTask(task: TaskData): TaskData {
              this.state.tasks.push(task);
              return task;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'getStatus',
          params: [],
          returnSchema: { type: 'string', enum: ['pending', 'completed', 'failed'] },
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'setUserRole',
          params: [
            { name: 'role', schema: { type: 'string', enum: ['admin', 'user', 'guest'] } },
          ],
          returnSchema: {},
        },
        {
          name: 'processTask',
          params: [
            {
              name: 'task',
              schema: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  title: { type: 'string' },
                  status: { type: 'string', enum: ['pending', 'completed', 'failed'] },
                },
                required: ['id', 'title', 'status'],
              },
            },
          ],
          returnSchema: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              title: { type: 'string' },
              status: { type: 'string', enum: ['pending', 'completed', 'failed'] },
            },
            required: ['id', 'title', 'status'],
          },
        },
      ]);
    });

    it('should work with auto-detected entry file', () => {
      const sourceFiles = {
        'src/models.ts': `
          export interface Item {
            id: string;
            value: number;
          }
        `,
        'src/contract.ts': `
          import { Item } from './models';
          
          export default class AutoDetectedContract {
            state = { items: [] as Item[] };
            
            getItemCount(): number {
              return this.state.items.length;
            }
            
            addItem(item: Item): void {
              this.state.items.push(item);
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'getItemCount',
          params: [],
          returnSchema: { type: 'number' },
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'addItem',
          params: [{ name: 'item', schema: {} }],
          returnSchema: {},
        },
      ]);
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

  describe('auto-detection of entry file', () => {
    it('should auto-detect entry file when only one file has default exported class', () => {
      const sourceFiles = {
        'src/types.ts': `
          export interface User {
            id: string;
            name: string;
          }
        `,
        'src/utils.ts': `
          export function helper() {
            return true;
          }
        `,
        'src/contract.ts': `
          import { User } from './types';
          
          export default class MyContract {
            state = { users: [] as User[] };
            
            getUsers(): User[] {
              return this.state.users;
            }
            
            addUser(user: User): void {
              this.state.users.push(user);
            }
          }
        `,
      };

      // Call without specifying entry file
      const result = analyzer.analyzeMultiFile(sourceFiles);
      expect(result.queries).toEqual([{ name: 'getUsers', params: [], returnType: 'User[]' }]);
      expect(result.mutations).toEqual([
        {
          name: 'addUser',
          params: [{ name: 'user', type: 'User' }],
          returnType: 'void',
        },
      ]);
    });

    it('should prioritize contract.ts over other files', () => {
      const sourceFiles = {
        'src/other.ts': `
          export default class OtherClass {
            getValue() {
              return "other";
            }
          }
        `,
        'src/contract.ts': `
          export default class MainContract {
            getValue() {
              return "main";
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles);
      expect(result.queries).toEqual([{ name: 'getValue', params: [], returnType: 'void' }]);
      // Should have analyzed MainContract, not OtherClass
    });

    it('should prioritize index.ts when no contract.ts exists', () => {
      const sourceFiles = {
        'src/other.ts': `
          export default class OtherClass {
            getValue() {
              return "other";
            }
          }
        `,
        'src/index.ts': `
          export default class IndexContract {
            getIndexValue() {
              return "index";
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles);
      expect(result.queries).toEqual([
        { name: 'getIndexValue', params: [], returnType: 'void' },
      ]);
    });

    it("should handle files with 'contract' in the name", () => {
      const sourceFiles = {
        'src/other.ts': `
          export default class OtherClass {
            getValue() {
              return "other";
            }
          }
        `,
        'src/user.contract.ts': `
          export default class UserContract {
            getUserValue() {
              return "user-contract";
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles);
      expect(result.queries).toEqual([
        { name: 'getUserValue', params: [], returnType: 'void' },
      ]);
    });

    it('should handle class expression exports', () => {
      const sourceFiles = {
        'src/contract.ts': `
          const MyContract = class {
            state = {};
            
            getValue() {
              return this.state;
            }
          };
          
          export { MyContract as default };
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles);
      expect(result.queries).toEqual([{ name: 'getValue', params: [], returnType: 'void' }]);
    });

    it('should throw error when no files have default exported classes', () => {
      const sourceFiles = {
        'src/types.ts': `
          export interface User {
            id: string;
          }
        `,
        'src/utils.ts': `
          export function helper() {
            return true;
          }
        `,
      };

      expect(() => analyzer.analyzeMultiFile(sourceFiles)).toThrow(
        'No files with default exported classes found in source files'
      );
    });

    it('should choose shortest path when no naming patterns match', () => {
      const sourceFiles = {
        'src/very/deep/path/service.ts': `
          export default class DeepService {
            getValue() {
              return "deep";
            }
          }
        `,
        'src/app.ts': `
          export default class App {
            getAppValue() {
              return "app";
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles);
      expect(result.queries).toEqual([
        { name: 'getAppValue', params: [], returnType: 'void' },
      ]);
    });

    it('should work with analyzeMultiFileWithSchema auto-detection', () => {
      const sourceFiles = {
        'src/contract.ts': `
          export default class Contract {
            state = { count: 0 };
            
            getCount(): number {
              return this.state.count;
            }
            
            increment(): void {
              this.state.count++;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'getCount',
          params: [],
          returnSchema: { type: 'number' },
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'increment',
          params: [],
          returnSchema: {},
        },
      ]);
    });
  });
});
