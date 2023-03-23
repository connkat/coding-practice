/** 
isValidSubsequence
Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array.
For instance, the numbers  [1, 3, 4  form a subsequence of the array [1, 2, 3, 4] and so do the numbers [2, 4].

*Sample Input*
array = [5, 1, 22, 25, 6, -1, 8, 10]`
sequence = [1, 6, -1, 10]
result: 
true
*/

function isValidSubsequence(array, sequence) {
  let j = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === sequence[j]) {
      j++;
    }
  }
  if (j === sequence.length) {
    return true;
  } else {
    return false;
  }
}


console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10])); //true

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[5, 1, 22, 23, 6, -1, 8, 10])); //false