import { State } from './state';

export class MyContract {
  private state: State;

  constructor() {
    this.state = {
      count: 0,
      startCoin: {
        denom: 'uatom',
        amount: '1000'
      },
      tokens: []
    };
  }

  public increment() {
    this.state.count++;
  }

  private reset() {
    this.state.count = 0;
  }

  public addToken(denom: string, amount: string) {
    this.state.tokens.push({ denom, amount });
  }

  public removeToken(index: number) {
    this.state.tokens.splice(index, 1);
  }
}