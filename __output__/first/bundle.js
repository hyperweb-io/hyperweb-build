// ../../__fixtures__/first/src/greet.ts
function greet(name) {
  return `Hello, ${name}!`;
}

// ../../__fixtures__/first/src/farewell.ts
function farewell(name) {
  myname();
  return `Goodbye, ${name}!`;
}
function myname() {
  console.log("hello");
}

// ../../__fixtures__/first/src/index.ts
function myname2() {
  console.log("hello");
}
console.log(greet("World"));
console.log(farewell("World"));
myname2();
//# sourceMappingURL=bundle.js.map
