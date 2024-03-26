// Given a string s, return the longest palindromic substring in s.

// Example 1: Output: "bab"
const s = "babad";

//Example 2: Output: "bb"
// const s = "cbbd";

//Example 3: Output: "12321"
// const s = "hg12321h";

function longestPalindrome(string) {
	let startIndex = 0;
	let maxLength = 1;

	function expandAroundCenter(left, right) {
		while (
			left >= 0 &&
			right < string.length &&
			string[left] === string[right]
		) {
			const currentPalLength = right - left + 1;
			if (currentPalLength > maxLength) {
				maxLength = currentPalLength;
				startIndex = left;
			}
			left -= 1;
			right += 1;
		}
	}

	for (let i = 0; i < string.length; i++) {
		expandAroundCenter(i - 1, i + 1);
		expandAroundCenter(i, i + 1);
	}

	return string.slice(startIndex, startIndex + maxLength);
}

console.log(longestPalindrome(s));
