function sortedSquaredArray(array) {
    let pows = []
    for(let num of array) {
      pows.push(Math.pow(num, 2) )
    } 
    
    return pows.sort((a,b) => a - b) 
  };

  console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))