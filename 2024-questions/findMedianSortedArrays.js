function findMedianSortedArrays2(nums1, nums2) {
	let singleArr = [...nums1, ...nums2];
	let sortedArr = singleArr.sort((a, b) => a - b);

	const middle = sortedArr[Math.floor(sortedArr.length / 2)];
	const midIndex = sortedArr.indexOf(middle);

	if (sortedArr.length % 2 === 0) {
		return (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2;
	} else {
		return middle;
	}
}

function findMedianSortedArrays(nums1, nums2) {
	let mergedArr = nums1.concat(nums2);
	let sortedArr = mergedArr.sort((a, b) => a - b);
	if (sortedArr.length % 2 == 0) {
		let mid = sortedArr.length / 2;
		return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
	} else {
		let mid = (sortedArr.length - 1) / 2;

		return sortedArr[mid];
	}
}

let nums1 = [0, 0];
let nums2 = [0, 0];

console.log(findMedianSortedArrays(nums1, nums2));
