import { ContractAnalyzer } from '../src/ContractAnalyzer';

describe('ContractAnalyzer - Multi-File with Schema', () => {
  let analyzer: ContractAnalyzer;

  beforeEach(() => {
    analyzer = new ContractAnalyzer();
  });

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
        returnSchema: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              x: { type: 'number' },
              y: { type: 'number' },
            },
            required: ['x', 'y'],
          },
        },
      },
    ]);
    expect(result.mutations).toEqual([
      {
        name: 'addPoint',
        params: [
          {
            name: 'point',
            schema: {
              type: 'object',
              properties: {
                x: { type: 'number' },
                y: { type: 'number' },
              },
              required: ['x', 'y'],
            },
          },
        ],
        returnSchema: {},
      },
      {
        name: 'movePoint',
        params: [
          { name: 'index', schema: { type: 'number' } },
          {
            name: 'delta',
            schema: {
              type: 'object',
              properties: {
                x: { type: 'number' },
                y: { type: 'number' },
              },
              required: ['x', 'y'],
            },
          },
        ],
        returnSchema: {
          type: 'object',
          properties: {
            x: { type: 'number' },
            y: { type: 'number' },
          },
          required: ['x', 'y'],
        },
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
        returnSchema: { anyOf: [{ type: 'boolean' }, { type: 'null' }] },
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
          anyOf: [
            {
              type: 'object',
              properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                age: { type: 'number' },
              },
              required: ['id', 'name', 'age'],
            },
            { type: 'null' },
          ],
        },
      },
    ]);
    expect(result.mutations).toEqual([
      {
        name: 'createUser',
        params: [
          {
            name: 'userData',
            schema: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                age: { type: 'number' },
              },
              required: ['id', 'name', 'age'],
            },
          },
        ],
        returnSchema: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            age: { type: 'number' },
          },
          required: ['id', 'name', 'age'],
        },
      },
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
              required: ['debug'],
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
        params: [
          {
            name: 'item',
            schema: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                value: { type: 'number' },
              },
              required: ['id', 'value'],
            },
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
        returnSchema: {
          type: 'object',
          properties: {
            username: { type: 'string' },
            email: { type: 'string' },
            preferences: {
              type: 'object',
              properties: {
                theme: { type: 'string', enum: ['light', 'dark'] },
                notifications: { type: 'boolean' },
              },
              required: ['theme', 'notifications'],
            },
          },
          required: ['username', 'email', 'preferences'],
        },
      },
    ]);
    expect(result.mutations).toEqual([
      {
        name: 'saveProfile',
        params: [
          {
            name: 'profile',
            schema: {
              type: 'object',
              properties: {
                username: { type: 'string' },
                email: { type: 'string' },
                preferences: {
                  type: 'object',
                  properties: {
                    theme: { type: 'string', enum: ['light', 'dark'] },
                    notifications: { type: 'boolean' },
                  },
                  required: ['theme', 'notifications'],
                },
              },
              required: ['username', 'email', 'preferences'],
            },
          },
        ],
        returnSchema: {},
      },
      {
        name: 'handleResponse',
        params: [
          {
            name: 'response',
            schema: {
              type: 'object',
              properties: {
                data: {},
                status: { type: 'number' },
                message: { type: 'string' },
              },
              required: ['data', 'status', 'message'],
            },
          },
        ],
        returnSchema: {
          type: 'object',
          properties: {
            data: {},
            status: { type: 'number' },
            message: { type: 'string' },
          },
          required: ['data', 'status', 'message'],
        },
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

  describe('null and undefined union types with schemas', () => {
    it('should handle multi-file contract with null union schemas', () => {
      const sourceFiles = {
        'src/types.ts': `
          export interface UserProfile {
            id: string;
            email: string | null;
            verified: boolean;
          }
        `,
        'src/contract.ts': `
          import { UserProfile } from './types';
          
          export default class NullableSchemaContract {
            state = { profiles: [] as UserProfile[] };
            
            getProfile(id: string | null): UserProfile | null {
              return this.state.profiles[0];
            }
            
            createProfile(data: UserProfile | null): void {
              if (data) {
                this.state.profiles.push(data);
              }
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'getProfile',
          params: [
            {
              name: 'id',
              schema: { anyOf: [{ type: 'string' }, { type: 'null' }] },
            },
          ],
          returnSchema: {
            anyOf: [
              {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  email: { anyOf: [{ type: 'string' }, { type: 'null' }] },
                  verified: { type: 'boolean' },
                },
                required: ['id', 'email', 'verified'],
              },
              { type: 'null' },
            ],
          },
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'createProfile',
          params: [
            {
              name: 'data',
              schema: {
                anyOf: [
                  {
                    type: 'object',
                    properties: {
                      id: { type: 'string' },
                      email: { anyOf: [{ type: 'string' }, { type: 'null' }] },
                      verified: { type: 'boolean' },
                    },
                    required: ['id', 'email', 'verified'],
                  },
                  { type: 'null' },
                ],
              },
            },
          ],
          returnSchema: {},
        },
      ]);
    });

    it('should handle multi-file contract with undefined union schemas', () => {
      const sourceFiles = {
        'src/config.ts': `
          export type OptionalConfig = {
            timeout?: number | undefined;
            retries: number | null;
          };
        `,
        'src/contract.ts': `
          import { OptionalConfig } from './config';
          
          export default class UndefinedSchemaContract {
            state = { settings: {} };
            
            updateConfig(config: OptionalConfig): OptionalConfig {
              this.state.settings = { ...this.state.settings, ...config };
              return config;
            }
            
            getTimeout(defaultValue: number | undefined): number {
              return this.state.settings.timeout ?? defaultValue ?? 5000;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFileWithSchema(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'getTimeout',
          params: [
            {
              name: 'defaultValue',
              schema: { anyOf: [{ type: 'number' }, { type: 'null' }] },
            },
          ],
          returnSchema: { type: 'number' },
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
                  timeout: { anyOf: [{ type: 'number' }, { type: 'null' }] },
                  retries: { anyOf: [{ type: 'number' }, { type: 'null' }] },
                },
                required: ['retries'],
              },
            },
          ],
          returnSchema: {
            type: 'object',
            properties: {
              timeout: { anyOf: [{ type: 'number' }, { type: 'null' }] },
              retries: { anyOf: [{ type: 'number' }, { type: 'null' }] },
            },
            required: ['retries'],
          },
        },
      ]);
    });
  });
});
