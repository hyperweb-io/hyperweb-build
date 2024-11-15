var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decoratorStart = (base) => [, , , __create(base?.[__knownSymbol("metadata")] ?? null)];
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : { get [name]() {
    return __privateGet(this, extra);
  }, set [name](x) {
    return __privateSet(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// ../../__fixtures__/schema-data/decorators/class.ts
var _decrement_dec, _increment_dec, _getCount_dec, _init;
import { admin, creator, external, internal } from "@hyperweb/decorators";
_getCount_dec = [external, admin], _increment_dec = [internal, admin], _decrement_dec = [creator];
var Counter = class {
  constructor(initialState) {
    __runInitializers(_init, 5, this);
    __publicField(this, "state");
    this.state.count = initialState;
  }
  getCount() {
    return this.state.count;
  }
  increment(amount) {
    this.state.count = this.state.count.add(amount);
  }
  decrement(amount) {
    if (this.state.count.lt(amount)) {
      throw new Error("Count cannot be negative");
    }
    this.state.count = this.state.count.sub(amount);
  }
};
_init = __decoratorStart(null);
__decorateElement(_init, 1, "getCount", _getCount_dec, Counter);
__decorateElement(_init, 1, "increment", _increment_dec, Counter);
__decorateElement(_init, 1, "decrement", _decrement_dec, Counter);
__decoratorMetadata(_init, Counter);

// ../../__fixtures__/schema-data/decorators/object.ts
var start = (initialCount) => {
  let state = {
    count: initialCount
  };
  return {
    getCount: () => state.count,
    increment: (amount) => {
      state.count = state.count.add(amount);
      return state.count;
    },
    decrement: (amount) => {
      if (state.count.lt(amount)) {
        throw new Error("Count cannot be negative");
      }
      state.count = state.count.sub(amount);
      return state.count;
    }
  };
};

// ../../__fixtures__/schema-data/decorators/index.ts
var _fetchData_dec, _init2;
_fetchData_dec = [permission("debug", "level"), performance];
var MyClass = class {
  constructor() {
    __runInitializers(_init2, 5, this);
  }
  async fetchData() {
  }
};
_init2 = __decoratorStart(null);
__decorateElement(_init2, 1, "fetchData", _fetchData_dec, MyClass);
__decoratorMetadata(_init2, MyClass);
var decorators_default = MyClass;
export {
  Counter,
  MyClass,
  decorators_default as default,
  start
};
//# sourceMappingURL=decorators.bundle.js.map
