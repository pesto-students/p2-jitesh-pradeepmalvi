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

const createStack = () => {
  // Write your code here...
  let items = [];

  return {
    push(item) {
      items.push(item);
    },
    pop() {
      items.pop();
    },
    getItems() {
      console.log(items.length);
    },
  };
};
const stack = createStack();
stack.push(10);
stack.push(5);
stack.getItems();
// console.log(stack);
stack.pop(); // => 5
stack.getItems();
console.log(stack.items); // => undefined
