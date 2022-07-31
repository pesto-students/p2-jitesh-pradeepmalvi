const findPair = (nums, result) => {
  let sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length; i++) {
    let value = sortedNums[i] + result;
    if (sortedNums.indexOf(value) !== -1) {
      return 1;
    }
  }
  return 0;
};

console.log(findPair([5, 10, 3, 2, 50, 80], 78));
console.log(findPair([-10, 20], 30));
