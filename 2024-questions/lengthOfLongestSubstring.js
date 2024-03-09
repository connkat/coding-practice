//Given a string s, find the length of the longest substring
// without repeating characters.

// Example 1: Output: 3
const s = "abcabcbb";

// Example 2: Output: 1
// const s = "bbbbb";

// Example 3: Output: 3
// const s = "pwwkew";

function lengthOfLongestSubstring(s) {
	let longest = 0;

	for (let i = 0; i < s.length; i++) {
		let currentSet = new Set();

		for (let j = i; j < s.length; j++) {
			if (currentSet.has(s[j])) {
				break;
			} else {
				currentSet.add(s[j]);
			}
		}
		longest = Math.max(longest, currentSet.size);
	}
	return longest;
}

function lengthOfLongestSubstring2(s) {
	let left = 0;
	let right = 0;
	let maxSubLength = 0;
	const hashSet = new Set();
	while (right < s.length) {
		if (!hashSet.has(s[right])) {
			hashSet.add(s[right]);
			maxSubLength = Math.max(maxSubLength, right + 1 - left);
			right++;
		} else {
			hashSet.delete(s[left]);
			left++;
		}
	}
	return maxSubLength;
}

console.log(lengthOfLongestSubstring2(s));
