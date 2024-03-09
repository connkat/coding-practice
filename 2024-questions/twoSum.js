// Given an array of integers nums and an integer target, return indices of the two
// numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not
// use the same element twice. You can return the answer in any order.

// Example 1: Output: [0,1]
const nums = [2, 7, 11, 15];
const target = 9;

// Example 2: Output: [1,2]
// const nums = [3, 2, 4];
// const target = 6;

// Example 3: Output: [0,1]
// const nums = [3, 3];
// const target = 6;

function twoSum(nums, target) {
	let indices = false;

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0 + 1; j < nums.length; j++) {
			let sum = 0;
			sum = nums[i] + nums[j];
			if (sum === target) {
				return (indices = [i, j]);
			}
		}
	}

	return indices;
}

function twoSum2(nums, target) {
	let map = new Map();

	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i];
		if (map.has(diff)) {
			return [i, map.get(diff)];
		}
		map.set(nums[i], i);
	}
}

console.log(twoSum2(nums, target));
