// Three Number Sum
// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
// The function should find all triplets in the array that sum up to the target sum and return a two-dimensional 
// array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets
// themselves should be ordered in ascending order with respect to the numbers they hold.
// If no three numbers sum up to the target sum, the function should return an empty array.

function threeNumberSum(arr, target) {
  arr.sort((a, b) => a - b);
	const result = [];
	for (let i = 0; i < arr.length - 2; i++) {
		let left = i + 1;
		let right = arr.length - 1;
		while (left < right) {
			const currentSum = arr[i] + arr[left] + arr[right];
			if (currentSum === target) {
				result.push([arr[i], arr[left], arr[right]]);
				left++;
				right--;
			} else if (currentSum < target) {
				left++;
			} else if (currentSum > target) {
				right--;
			}
		}
	}
	return result; 
}