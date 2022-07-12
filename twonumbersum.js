function twoNumberSum(array, targetSum) {
  let finalArr = [];
  for (let num of array) {

    let num2 = targetSum - num;

    if (num2 === num) {
      const index = array.indexOf(num);
      if (index > -1) {
        array.splice(index, 1);
      }
    }

    if (array.includes(num2)) {
      finalArr.push(num);
      finalArr.push(num2);
      return finalArr;
    }
  }
  return finalArr;
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

console.log(twoNumberSum([4, 6, 1, -3], 3));
