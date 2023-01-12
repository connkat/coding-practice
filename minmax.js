// minMaxSum
// write a function that given 5 numbers in an array will return the lowest 
// and the highest possible values when summing 4 out of the 5 numbers.

function minMaxSum(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let maxVal = Math.max(...arr);
  let minVal = Math.min(...arr);
  return sum - maxVal + " " + (sum - minVal);
}

console.log(minMaxSum([4, 2, 3, 1, 5]));
