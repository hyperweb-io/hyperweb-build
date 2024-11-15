export interface State {
  count: number;
  startCoin: Coin;
  tokens: Coin[];
}

interface Coin {
  denom: string;
  amount: string;
}
