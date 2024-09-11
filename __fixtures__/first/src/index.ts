import { greet } from './greet';
import { farewell } from './farewell';

function myname() {
  console.log('hello');
}

console.log(greet('World'));
console.log(farewell('World'));
myname();
