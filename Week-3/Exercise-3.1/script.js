//Given reducer method:
const add = (...args) => {
  const numbers = [...args];
  return numbers.reduce((sum, num) => (sum = sum + num));
};

const memoize = (...arg) => {
  const cache = new Map();
  const argString = arg.toString();

  if (cache.has(argString)) {
    return cache.get(argString);
  }
  let value = add(...arg);

  cache.set(argString, value);

  console.log(cache);
  return value;
};

console.log(memoize(100, 100)); //returns 200
console.log(memoize(100)); //returns 100
console.log(memoize(100, 200)); //returns 300
console.log(memoize(100, 100)); //returns 200 without computing
