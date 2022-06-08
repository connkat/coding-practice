// Print `Fizz` if divisible by 5
// Print `Buzz` if divisible by 3
// Print `FizzBuzz` if divisible by both 5 and 3 

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}
console.log(fizzBuzz(15));
