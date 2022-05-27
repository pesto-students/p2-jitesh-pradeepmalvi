//Given reducer method:
function add(a, b) {
  return a + b;
}
let cache = new Map();

function memoize(...arg) {
  if (cache.has(arg.toString())) {
    return cache.get(arg.toString());
  }
  let value = add(...arg);

  cache.set(arg.toString(), value);

  console.log(cache);
  return value;
}

console.log(memoize(100, 100)); //returns 200
console.log(memoize(100)); //returns 100
console.log(memoize(100, 200)); //returns 300
console.log(memoize(100, 100)); //returns 200 without computing
