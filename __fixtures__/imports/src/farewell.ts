import * as yolo from 'otherpackage';

export function farewell(name: string): string {
  myname();
  console.log(yolo);
  return `Goodbye, ${name}!`;
}

function myname() {
  console.log('hello');
}
