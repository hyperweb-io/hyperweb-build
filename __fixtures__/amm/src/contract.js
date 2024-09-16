import { getBalance, sendCoins } from 'bank';

const store = (storeDefinition) => {
  return (target, state) => {
    Object.entries(storeDefinition).forEach(([key, value]) => {
      if (typeof value === 'function') {
        // For functions, create a getter and a setter
        Object.defineProperty(target, key, {
          get() {
            return (...args) => state.get([key, ...args].join('/')) ?? value(undefined); // TODO: support nested mappings
          },
          enumerable: true,
        });
  
        const setterName = `set${key.charAt(0).toUpperCase() + key.slice(1)}`;
        Object.defineProperty(target, setterName, {
          value: (...args) => {
            const newValue = args[args.length - 1];
            const keys = args.slice(0, -1);
            state.set([key, ...keys].join('/'), newValue);
          },
          enumerable: false,
        });
      } else {
        // For non-functions, create a getter and a setter
        Object.defineProperty(target, key, {
          get() {
            return state.get(key) ?? value;
          },
          set(newValue) {
            state.set(key, newValue);
          },
          enumerable: true,
        });

        const setterName = `set${key.charAt(0).toUpperCase() + key.slice(1)}`;
        Object.defineProperty(target, setterName, {
          value: (newValue) => {
            state.set(key, newValue);
          },
          enumerable: false,
        });
      }
    });
  };
};

//////////////////////////////////////////////////////////////////////////////////

const useStore = store({
  totalSupply: 0,
  balance:address => 0,
  reserves: [0, 0],
});
// should construct
// this.totalSupply // getter
// this.setTotalSupply(value) // setter
// this.balance(address) // getter
// this.setBalance(address, value) // setter
// this.reserves // getter
// this.setReserves(value) // setter
export default class AMMContract {
  constructor(state, {msg, address}) {
    this.msg = msg;
    this.address = address;

    useStore(this, state);
  }

  token0 = 'USDC';
  token1 = 'ATOM';

  getTotalSupply() {
    return this.totalSupply;
  }

  getBalance(address) {
    return this.balance(address);
  }

  getReserves() {
    return this.reserves;
  }

  #getBankBalance(address, token) {
    return getBalance(address, token);
  }

  #mint(to, amount) {
    const balance = this.balance(to);
    this.setBalance(to, balance + amount);
    this.totalSupply += amount;
  }

  #burn(from, amount) {
    const balance = this.balance(from);
    if (balance < amount) {
      throw Error('insufficient balance');
    }
    this.setBalance(from, balance - amount);
    this.totalSupply -= amount;
  }

  #update(amount0, amount1) {
    const [reserve0, reserve1] = this.reserves;
    this.reserves = [
      reserve0 + amount0,
      reserve1 + amount1,
    ];
  }

  swap({tokenIn, amountIn}) {
    const isToken0 = tokenIn == this.token0;
    const isToken1 = tokenIn == this.token1;

    if (!isToken0 && !isToken1) {
      throw Error('invalid token');
    }

    const [reserve0, reserve1] = this.reserves;
    let tokenOut, reserveIn, reserveOut;

    [tokenIn, tokenOut, reserveIn, reserveOut] = 
            isToken0 
              ? [this.token0, this.token1, reserve0, reserve1]
              : [this.token1, this.token0, reserve1, reserve0];

    sendCoins(this.msg.sender, this.address, {
      [tokenIn]: amountIn,
    });

    const amountInWithFee = amountIn * 997 / 1000;
    const amountOut = (reserveOut * amountInWithFee) / (reserveIn + amountInWithFee);

    sendCoins(this.address, this.msg.sender, {
      [tokenOut]: amountOut,
    });

    this.#update(
      this.#getBankBalance(this.address, this.token0).amount, 
      this.#getBankBalance(this.address, this.token1).amount,
    );

    return amountOut;
  }

  addLiquidity({amount0, amount1}) {
    sendCoins(this.msg.sender, this.address, {
      [this.token0]: amount0,
      [this.token1]: amount1,
    });

    const [reserve0, reserve1] = this.reserves;

    if (reserve0 > 0 || reserve1 > 0) {
      if (reserve0 * amount1 != reserve1 * amount0) {
        throw Error('invalid liquidity');
      }
    }

    let shares = 0;
    if (this.totalSupply > 0) {
      shares = Math.sqrt(amount0 * amount1);
    } else {
      shares = Math.min(
        (amount0 * this.totalSupply) / reserve0,
        (amount1 * this.totalSupply) / reserve1,
      );
    }

    this.#mint(this.msg.sender, shares);

    this.#update(
      this.#getBankBalance(this.address, this.token0).amount,
      this.#getBankBalance(this.address, this.token1).amount,
    );

    return shares;
  }

  removeLiquidity({shares}) {
    const bal0 = this.#getBankBalance(this.address, this.token0);
    const bal1 = this.#getBankBalance(this.address, this.token1);
    const totalSupply = this.totalSupply;

    const amount0 = bal0 * shares / totalSupply;
    const amount1 = bal1 * shares / totalSupply;
    this.#burn(this.msg.sender, shares);
    this.#update(bal0 - amount0, bal1 - amount1);
    sendCoins(this.address, this.msg.sender, {
      [this.token0]: amount0,
      [this.token1]: amount1,
    });

    return [amount0, amount1];
  }
}