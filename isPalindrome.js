function isPalindrome (string) {
  y = string.toString().split("").reverse().join("");
  if (y == string) {
    return true;
  } else return false;
};

console.log(isPalindrome(101))