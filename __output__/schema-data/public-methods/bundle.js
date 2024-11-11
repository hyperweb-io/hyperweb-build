// ../../__fixtures__/schema-data/public-methods/contract.ts
var MyContract = class {
  state;
  constructor() {
    this.state = {
      count: 0,
      startCoin: {
        denom: "uatom",
        amount: "1000"
      },
      tokens: []
    };
  }
  increment() {
    this.state.count++;
  }
  reset() {
    this.state.count = 0;
  }
  addToken(denom, amount) {
    this.state.tokens.push({ denom, amount });
  }
  removeToken(index) {
    this.state.tokens.splice(index, 1);
  }
};

// ../../__fixtures__/schema-data/public-methods/index.ts
var public_methods_default = MyContract;
export {
  public_methods_default as default
};
//# sourceMappingURL=bundle.js.map
