// write a function that given 5 numbers in an array will return the lowest 
// and the highest possible values when summing 4 of the numbers.

function miniMaxSum(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let maxVal = Math.max(...arr);
  let minVal = Math.min(...arr);
  return sum - maxVal + " " + (sum - minVal);
}

console.log(miniMaxSum([4, 2, 3, 1, 5]));
