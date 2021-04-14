/*
Write a function `avgVal(arr)` that accepts an array as an arg. The function
should return the average of all values in the array. If the array is empty,
it should return `null`.

Solve this using Array's `forEach()` method.

Examples:

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

*/

/*
    -write a function called avgVal(arr)
    -parameter = array
    -RETURN average of all values in the array
    - if array is empty = return 'null'
    -solve this using forEach method
*/

function avgVal(arr){
  let avg = 0;


  if (arr.length === 0){
    return null;
  }

  arr.forEach(function(num){
    avg += num;

  });

  return avg / arr.length;
};

//testing function works below
console.log(avgVal([]));
console.log(avgVal([15, 20, 5, 35, 40]));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = avgVal;
} catch (e) {
  module.exports = null;
}
