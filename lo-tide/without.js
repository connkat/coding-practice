const without = function (arr, itemsToRemove) {
  let output = [...arr];
 for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      if (itemsToRemove[i] === arr[j]){
        output.splice(i, 1);
      }
    }
 }
  return output;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(["1", "2", "3"], [1, 2, "3"]));