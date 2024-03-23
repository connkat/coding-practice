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

function lengthOfLongestSubstring2(string) {
	let left = 0;
	let right = 0;
	let maxSubLength = 0;
	const hashSet = new Set();
	while (right < string.length) {
		if (!hashSet.has(string[right])) {
			hashSet.add(string[right]);
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

function lengthOfLongestSubstring3(string) {
	let longestLength = 0;
	let pointer = 0;
	let start = 0;

	let charSet = new Set();

	while (pointer < string.length) {
		// check if the current char exists in the set
		if (charSet.has(string[pointer])) {
			//if yes, delete from set
			charSet.delete(string[start++]);
			//else, add current char to set, then move
		} else {
			charSet.add(string[pointer++]);
			longestLength = Math.max(longestLength, charSet.size);
		}
	}

	return longestLength;
}
