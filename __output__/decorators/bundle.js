// ../../__fixtures__/decorators/src/class.ts
var Counter = class {
  state;
  constructor(initialState) {
    this.state.count = initialState;
  }
  // Public by default (no decorator needed)
  getCount() {
    return this.state.count;
  }
  // Only admin and creator can increment
  increment(amount) {
    this.state.count = this.state.count.add(amount);
  }
  // Only creator can decrement
  decrement(amount) {
    if (this.state.count.lt(amount)) {
      throw new Error("Count cannot be negative");
    }
    this.state.count = this.state.count.sub(amount);
  }
};

// ../../__fixtures__/decorators/src/object.ts
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

// ../../__fixtures__/decorators/src/index.ts
var MyClass = class {
  async fetchData() {
  }
};
var src_default = MyClass;
export {
  Counter,
  MyClass,
  src_default as default,
  start
};
//# sourceMappingURL=bundle.js.map
