// ../../__fixtures__/schema-data/inheritance-contract/contract.ts
var BaseContract = class {
  state = { count: 0 };
  baseMethod() {
    console.log("baseMethod");
  }
};
var InheritedContract = class extends BaseContract {
  increment() {
    this.state.count += 1;
  }
  reset() {
    this.state.count = 0;
  }
};

// ../../__fixtures__/schema-data/inheritance-contract/index.ts
var inheritance_contract_default = InheritedContract;
export {
  inheritance_contract_default as default
};
//# sourceMappingURL=inheritance-contract.bundle.js.map
