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