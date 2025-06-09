import { ContractAnalyzer } from '../src/ContractAnalyzer';

describe('ContractAnalyzer - Multi-File Analysis', () => {
  let analyzer: ContractAnalyzer;

  beforeEach(() => {
    analyzer = new ContractAnalyzer();
  });

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
    expect(result.mutations).toEqual([{ name: 'increment', params: [], returnType: 'void' }]);
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

  describe('null and undefined union types', () => {
    it('should handle multi-file contract with null union parameters', () => {
      const sourceFiles = {
        'src/types.ts': `
          export interface UserData {
            id: string;
            name: string | null;
          }
        `,
        'src/contract.ts': `
          import { UserData } from './types';
          
          export default class NullableContract {
            state = { users: [] as UserData[] };
            
            addUser(userData: UserData | null): boolean {
              if (userData) {
                this.state.users.push(userData);
                return true;
              }
              return false;
            }
            
            findUser(id: string | null): UserData | null {
              return id ? this.state.users.find(u => u.id === id) || null : null;
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'findUser',
          params: [{ name: 'id', type: 'string | null' }],
          returnType: 'UserData | null',
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'addUser',
          params: [{ name: 'userData', type: 'UserData | null' }],
          returnType: 'boolean',
        },
      ]);
    });

    it('should handle multi-file contract with undefined union parameters', () => {
      const sourceFiles = {
        'src/models.ts': `
          export type OptionalString = string | undefined;
          export type NullableNumber = number | null | undefined;
        `,
        'src/contract.ts': `
          import { OptionalString, NullableNumber } from './models';
          
          export default class UndefinedContract {
            state = { data: {} };
            
            processValue(value: OptionalString): string {
              return value || 'default';
            }
            
            updateCounter(increment: NullableNumber): void {
              this.state.data.counter = (this.state.data.counter || 0) + (increment || 0);
            }
          }
        `,
      };

      const result = analyzer.analyzeMultiFile(sourceFiles);
      expect(result.queries).toEqual([
        {
          name: 'processValue',
          params: [{ name: 'value', type: 'OptionalString' }],
          returnType: 'string',
        },
      ]);
      expect(result.mutations).toEqual([
        {
          name: 'updateCounter',
          params: [{ name: 'increment', type: 'NullableNumber' }],
          returnType: 'void',
        },
      ]);
    });
  });
});
