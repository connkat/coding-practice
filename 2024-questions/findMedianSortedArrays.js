function findMedianSortedArrays(nums1, nums2) {
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

const nums1 = [1, 2];
const nums2 = [3, 4];

findMedianSortedArrays(nums1, nums2);
