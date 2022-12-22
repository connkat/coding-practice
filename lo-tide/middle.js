const middle = function(arr) {
    let newArr = [];
    
    if (arr.length < 3) {
      return newArr = [];
    }
    if (arr.length % 2 === 0) {
        // takes the length of the array, divides by 2, and subtracts 1 to find the index.
      return newArr.splice((arr.length / 2) - 1,  2);
    }
    // takes the length of the array, divides by 2, and subtracts 1 to find the index.  Math.ceil is used to change the decimal into an integer
    return newArr.splice(Math.ceil((arr.length / 2) - 1), 1);
  };