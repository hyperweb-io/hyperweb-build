import { State } from './state';

class BaseContract {
  protected state: State = { count: 0 };

  public baseMethod() {
    console.log('baseMethod');
  }
}

export class InheritedContract extends BaseContract {
  public increment() {
    this.state.count += 1;
  }

  private reset() {
    this.state.count = 0;
  }
}
