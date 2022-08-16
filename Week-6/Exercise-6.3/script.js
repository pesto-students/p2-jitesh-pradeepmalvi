const sortAscending = nums => {
  let low = 0;
  let high = nums.length - 1;
  let mid = 0;

  while (mid <= high) {
    if (nums[mid] === 0) {
      let temp = nums[mid];
      nums[mid] = nums[low];
      nums[low] = temp;
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      let temp = nums[mid];
      nums[mid] = nums[high];
      nums[high] = temp;
      high--;
    }
  }

  return nums;
};

console.log(
  sortAscending([0, 2, 1, 2, 0, 2, 2, 2, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0])
);
