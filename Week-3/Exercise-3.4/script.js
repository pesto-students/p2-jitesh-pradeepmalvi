// function createStack() {
//   return {
//     items: [],
//     push(item) {
//       this.items.push(item);
//     },
//     pop() {
//       return this.items.pop();
//     },
//   };
// }
// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop(); // => 5
// console.log(stack.items); // => [10]
// stack.items = [10, 100, 1000]; // Encapsulation broken!
// console.log(stack.items);

console.log("--------------------");

function createStack() {
  // Write your code here...
  const obj = {
    items: [],
    push(item) {
      this.items.push(item);
    },
    pop() {
      this.items.pop();
    },
  };

  return obj;
}
const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack);
console.log(stack.pop()); // => 5
console.log(stack.items); // => undefined
