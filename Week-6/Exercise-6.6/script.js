const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let closest = nums[0] + nums[1] + nums[n - 1];

  for (let i = 0; i < n - 2; i++) {
    let firstPointer = i + 1;
    let lastPointer = n - 1;
    while (firstPointer < lastPointer) {
      let sum = nums[i] + nums[firstPointer] + nums[lastPointer];

      if (sum <= target) {
        firstPointer++;
      } else {
        lastPointer--;
      }
      if (Math.abs(closest - target) > Math.abs(sum - target)) {
        closest = sum;
      }
    }
  }
  return closest;
};
console.log(threeSumClosest([-1, 2, 1, -4], 1));
