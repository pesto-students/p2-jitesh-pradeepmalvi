const nextGraterElement = (arr, n) => {
  const finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    let nextElement = arr[i + 1];

    if (!nextElement) {
      finalArr.push(-1);
    } else if (arr[i] < nextElement) {
      finalArr.push(nextElement);
    } else {
      for (let j = i; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          finalArr.push(arr[j]);
          break;
        }
      }
    }
  }
  return finalArr;
};

console.log(nextGraterElement([1, 3, 2, 4], 4));
console.log(nextGraterElement([6, 8, 0, 1, 3], 5));
