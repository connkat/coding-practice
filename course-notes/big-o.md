# Big O notation

## Motivation
There are tons of ways to solve issues, but how to determine the best solutions? Faster? Less memory? Readable? 

For now we are going to evaluate speed:

Ex: `write a function that calculates the sum of all numbers from one up to and including n`
There are many different ways to solve this quesiton. Big o lets us evaluate the complexity of the 
solution and have a numeric representation. 

### Basic solution:
```
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

### Faster solutton: 
```
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

So for speed, it is best to use built in timing methods:
* Calling the first function with 1billion: 1.25^ seconds. 
* The second function runs at around 0.0001^ seconds.

## How to do it better: 
Instead of counting in time, count the numebr of simple operations that the computer has to deal with. In ex2, we have 3 operations (multiplication, addition, division). It doesn't matter what `n` is, just that there is only 3 caluclations. 

In ex1: because we are in a loop, every operation is multiplied by n. `+=` is technically 2 operations, and if n grows, it will be multiplied by that amount. IE if n is 10, there is 20, if n is 1000, then there are 20000 operations. It has 5 operations * n. `5n + 2`

[Performance Tracking Tool](https://rithmschool.github.io/function-timer-demo/)

As n grows larger, time (n) grows consistency.

## Big O
How the runtime of an algorithm grows affects the time relative to that import. We don't care about details, just broad trends. 

In ex2, because we aren't looping, the growth is pretty consistent. Whereas in ex1, we can see a pretty standard 1:1 pattern. 

We say that  an algorithm is `O(f(n)) if the number of simple operations the computer has to dois eventually less than a constant time `f(n)`, as `n` increases.
* f(n) could be linear (f(n) = n)--function of the input of n is equal to n
* f(n) could be quadratic (f(n) = (n2))
* f(n) could be constant(f(n) = 1)  
* f(n) could be something entirely different

Think about it like this: when n grows, will the graph grow with it? When talking about big O, that's the worst-case-scenario for runtime. 

* O(1)--as n grows it has no change in the runtime. 
  EX: ```
  function addUpTo(n) {
    n * N (n + 1) /2;
  }
  ```

  * O(n)
  num of operations is eventually bounded by a multiple of n--we simplify it down to n
    ```
    function addUpTo(n) {
      let total = 0;
      for (let i = 1; i <= n ; i++){
        total += i ;
      }
      return total
    }

## Simplified: 

  ### Get rid of variables
  A- O(2n) = O(n)
  B- O(500) = O(1)
  C- O(13n2) = O(n2) (squared)
  This is just simplified down because these are consistent values. It doesn't matter what the value is because the actual caluclation is consistent. We know that B will be faster than A and that C will be the slowest based off of the visible trends.

  ### Smaller terms don't matter
  O(n+10) = O(n)
  O(1000n + 50) = O(n)
  O(n2 = 5n + 8) = O(n2) ---the differnece between having and not having that secornd equation is negligable

  ### Shorthand
  - Arithmatic  operations are constant, your computer takes the same time to add 2 + 2 as it does 1Million + 2
  - Variable assignment is consistent, 10 is the same as 1Billion
  - Accessing alaments in an array(by index) or object (by key) is constant, so long as you have that value ready. 
  - In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.




  