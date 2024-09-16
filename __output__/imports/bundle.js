// ../../__fixtures__/imports/src/greet.ts
import * as yolo from "~somepackage";
function greet(name) {
  console.log(yolo);
  return `Hello, ${name}!`;
}

// ../../__fixtures__/imports/src/farewell.ts
import * as yolo2 from "otherpackage";
function farewell(name) {
  myname();
  console.log(yolo2);
  return `Goodbye, ${name}!`;
}
function myname() {
  console.log("hello");
}

// ../../__fixtures__/imports/src/index.ts
function myname2() {
  console.log("hello");
}
console.log(greet("World"));
console.log(farewell("World"));
myname2();
//# sourceMappingURL=bundle.js.map
