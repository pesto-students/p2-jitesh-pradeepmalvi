let maxSumContiguousSubarray = (arr) => {
  let sum = 0
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {

    max = max + arr[i]

    if (sum < max) {
      sum = max
    }

    if (max < 0) {
      max = 0
    }

  }
  return sum;
};

console.log(maxSumContiguousSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

