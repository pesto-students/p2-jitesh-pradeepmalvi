const getProfit = stocks => {
  let minSoFar = stocks[0];
  let maxProfit = 0;

  for (let i = 0; i < stocks.length; i++) {
    if (minSoFar > stocks[i]) {
      minSoFar = stocks[i];
    }

    let currentProfit = stocks[i] - minSoFar;
    if (maxProfit < currentProfit) {
      maxProfit = currentProfit;
    }
  }

  return maxProfit;
};

console.log(getProfit([8, 3, 6, 2, 3, 4, 1]));
console.log(getProfit([7, 6, 4, 3, 1]));
console.log(getProfit([7, 1, 5, 3, 6, 4]));
console.log(getProfit([2, 4, 1]));
console.log(getProfit([1, 2]));
