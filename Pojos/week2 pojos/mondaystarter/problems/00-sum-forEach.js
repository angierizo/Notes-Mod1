/*
Write a function `sumForEach(arr)` that accepts an array as an arg.
The function should return the total sum of all values in the array.

Solve this using Array's `forEach()` method.

Examples:

console.log(sumForEach([4, 3, -1, 10])); // 16
console.log(sumForEach([6, 7, 2])); // 15
console.log(sumForEach([])); // 0
*/

/*
    - write a function named sumForEach(arr)
    - parameter is an array
    - using forEach
        -return total sum of all values in array
*/

// // - write a function named sumForEach(arr)
// function sumForEach(arr) {
//   let sum = 0;// its ok to declare a function outside of forEach function
//   arr.forEach(function(ele, i, arr) {
//     sum += ele; // dont forget to declare variables to equal the sum or average. you start it a equaling zero then you basically push a number through that varible to hold it through each iteration.

//   });
// return sum;//return variable outside of forEach function
// };

function sumForEach(arr){
  let sum = 0;
  arr.forEach(function (ele, i, arr){
    sum += ele;
  });
  return sum;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sumForEach;
} catch (e) {
  module.exports = null;
}

console.log('hello world')
