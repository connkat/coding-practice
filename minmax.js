// minMaxSum
// write a function that given 5 numbers in an array will return the lowest
// and the highest possible values when summing 4 out of the 5 numbers.
// return these values as a string

function minMaxSum(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let maxVal = Math.max(...arr);
  let minVal = Math.min(...arr);
  return sum - maxVal + " " + (sum - minVal);
}

//easy solution
function minMaxSum2(arr) {
  let output = [];
  const sortedArr = arr.sort((a, b) => a - b);

  let minArr = sortedArr.slice(0, 4);
  let maxArr = sortedArr.slice(1);

  let minSum = 0
  let maxSum = 0
  for (let i = 0; i < minArr.length; i++) {
    minSum += minArr[i]
    maxSum += maxArr[i]
    
  }
  return minSum + " " + maxSum;
}

console.log(minMaxSum([4, 2, 3, 1, 5]));
console.log(minMaxSum2([4, 2, 3, 1, 5]));
