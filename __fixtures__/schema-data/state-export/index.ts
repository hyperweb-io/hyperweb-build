import { Coin } from "./coin";

export interface State {
  count: number;
  startCoin: Coin;
  tokens: Coin[];
}
