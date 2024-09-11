export function farewell(name: string): string {
  myname();
  return `Goodbye, ${name}!`;
}

function myname() {
  console.log('hello');
}
