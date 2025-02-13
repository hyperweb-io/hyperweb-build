import { BigNumber } from "jsd-std";

interface State {
  count: BigNumber;
}

// Core contract logic
export const start = (initialCount: BigNumber) => {
  let state: State = {
    count: initialCount
  };

  // HOW TO EVEN DO DECORATORS
  return {
    getCount: () => state.count,
    
    increment: (amount: BigNumber) => {
      state.count = state.count.add(amount);
      return state.count;
    },
    
    decrement: (amount: BigNumber) => {
      if (state.count.lt(amount)) {
        throw new Error("Count cannot be negative");
      }
      state.count = state.count.sub(amount);
      return state.count;
    }
  };
};