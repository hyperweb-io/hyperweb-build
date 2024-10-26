import { BigNumber } from "jsd-std";

// Permission decorators
export const admin = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => descriptor;
export const creator = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => descriptor;

export interface State {
    count: BigNumber;
}

export class Counter {
  private state: State;

  constructor(initialState: State) {
    this.state.count = initialState;
  }

  // Public by default (no decorator needed)
  public getCount(): BigNumber {
    return this.state.count;
  }

  // Only admin and creator can increment
  @admin
  public increment(amount: BigNumber): void {
    this.state.count = this.state.count.add(amount);
  }

  // Only creator can decrement
  @creator
  public decrement(amount: BigNumber): void {
    if (this.state.count.lt(amount)) {
      throw new Error("Count cannot be negative");
    }
    this.state.count = this.state.count.sub(amount);
  }
}