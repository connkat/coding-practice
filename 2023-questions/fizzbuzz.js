// FizzBuzz
// Write a function that takes in an argument (num) and counts from 1 to num. 
// Print `Fizz` if divisible by 3
// Print `Buzz` if divisible by 5
// Print `FizzBuzz` if divisible by both 5 and 3 
// Print the number (num) if none of the above conditions are met

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}
console.log(fizzBuzz(15));

function fizzBuzz2(n) {
  for (let i = 1; i <= n; i++) {
    let word = "";
    if (i % 3 === 0) word += "Fizz";
    if (i % 5 === 0) word += "Buzz";
    console.log(word || i);
  }
}

console.log(fizzBuzz2(15));