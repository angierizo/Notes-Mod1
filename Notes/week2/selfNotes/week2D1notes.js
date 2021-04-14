/* ******** WEEK 2 NOTES************/

//DAY 1

//****************** *      /.forEach   **********
//          - is EQUAL to standard for loop, ONLY standard for loop ++
//          -RETURN VALUE IS ALWAYS UNDEFINED CANNOT RETURN FOREACH
//////////////  ARRAY #forEACH  /////////////////////
// let parks = ['Zion', 'Yellowstone', 'Acadia', 'Yosemite'];

//     // ---------classic for loop-----------
// //      for(let i = 0; i < parks.length; i++){
// //           let park = parks[i]; //saved each element of array into its own park variable
// //              console.log(park);//print it out
// //               }
// let str = '';
// parks.forEach(function(element, i, array)//(park) represents current element of array, (i) is index, (array) entire array must be in that order
// {
//     str+= element;//turns the array into a string
//     //console.log(element);
//    // console.log(i);
//     //console.log(array);
//     //console.log('----dashes inbetween each string------');


// });
// console.log(str);

/* Write a function called hello that intakes an
array of names and prints "Hello," plus the name, for
each name. Must use .forEach()

hello(['Mylo', 'Buster']) prints 'Hello, Mylo', 'Hello, Buster'
I'm gunna make a function that intakes a name and prints hello + name
*/

//----------This is same as ------------
//          function printsHello(name) {
//              console.log('Hello ' + name);
//              }
//          function hello(names){
//              names.forEach(printsHello)// the forEach method parameter is a function
//          }
// ------- SAME AS THIS --------------
            // function hello(names){
            //     names.forEach(function(name, i, array){
            //         console.log('Hello ' + name + ' at index ' + i + ' in array ' + array);
            //      });
            // }

            // let instructors = ['mylo', 'javier', 'warren']
            // hello(instructors);



//**********************   ARRAY MAP METHOD************************** */
// let parks = ['Zion', 'Yellowstone', 'Acadia', 'Yosemite'];

// let newParks = [];// populate the empty array with uppercast version of strings
// for(let i = 0; i < parks.length; i++){
//     let park =parks[i];
//     newParks.push(park.toUpperCase());
// }
// console.log(newParks);


/*
USE MAP METHOD IF:
    -you need a new array
    -you need to go through each element in the array
    -you need to change that element to something new

*/


//example
/*
  Write a function called timesTwo that intakes an
  array of numbers and returns a new array where all
  of the numbers are multiplied by 2. You must use .map()

  */
/////////  //////   ORIGINAL WAY TO DO IT /////// */ This is equal to:

// let timesTwopt2 = function(arr){
// let res = [];
// for (let i = 0; i < arr.length; i++){
//     let el = arr[i];
//     res.push( el * 2);
// }
// return res;

// }
// console.log(timesTwopt2([1, 2, 3]));
//  console.log(timesTwopt2([-1, 6, 0]) );



//    /// /// MAP WAY TO DO IT ///////////
  let timesTwo = function(nums){
      return nums.map(function (num){ // also has order to to intake element, index, and array inside parameters()
        return num * 2;

      });
  }

console.log(timesTwopt2([1, 2, 3]));
 console.log(timesTwopt2([-1, 6, 0]) );



/******************** ARRAY FILTER METHOD*************

 */
// //// //// /// ORIGINAL WAY TO DO THIS///// **THIS IS SAME AS**
 //let parks = ['Zion', 'Yellowstone', 'Acadia', 'Yosemite'];

//  let yParks = [];
//  for(let i = 0; i < parks.length; i++){
//      let park = parks[i];

//      if(park[0] === 'Y'){
//          yParks.push(park);
//      }
//  }
//  console.log(yParks);
//
// ARRAY FILTER WAY TO DO THIS **SAME AS THIS**
//  -make sure to give filter a function that will return a true or fasle aka a boolean
//  -will return array smaller than original

//         let yParks = parks.filter(function(park){ //also function parameters order: element, index, array
// //we want function to return a boolean (like a true or false)(true pick the item, false not picking)
//         return park.includes('o'); // RETURNS THE ELEMENTS THAT HAVE THE LETTER O
//         });
//     console.log(yParks);
//
//
//
//
/* LECTURE EXAMPLE
  Write a function called evens that intakes an
  array of numbers and returns a new array of only the
  even numbers from the original array. You must use
  .filter()

  */

//   function evens(nums){
//     return nums.filter(function(num, i, array){
//         return num % 2 === 0;

//     });
// }
// console.log(evens([1, 2, 3])) ;
// console.log(evens([42, 44, 45]));





//*************** ARRAY REDUCE METHOD */
//      -accum = accumulator value, begins with first element in the array and iterates
    // - if you enter a value as the second parameter inside of funciton or else it will be at index = 0
    //   -has return value
//      -RETURN VALUE  is reassigned as accumulator

 //  let nums = [3, 7, 5, 9, 105];

//  let sum = nums.reduce(function(accum, el){ // different paratmeters; 1st = accum, 2nd = element
//         return accum + el;

//  }/* ,default accum goes here, for example 100, try if curious*/ );
// console.log(sum);

// //***  FIND MAX OF ARRAY */

// let max = nums.reduce(function(accum, el){
//     if(el > accum){
//         return el;
//     }
//     else {
//         return accum;
//     }
// });
// console.log(max)
//
//
//
//**LECTURE EXAMPLES */
/*
  Write a function called returnNames that intakes an
  array of names and returns a string of "Names: " with
  all of the names attached after. Must use the .reduce()

  returnNames(['Mylo']) => Names: Mylo
  returnNames(['Rick', 'Morty']) => Names: Rick Morty
  */

// let returnNames = function (names) {
//     return names.reduce(function (accum, name) {
//         return accum + ' ' + name;
//     }, 'Names:');
// // };

// function sum(names){
//     let res = names.reduce(function (accum, el, i, array){
//         return accum + ' ' + el;
//     }, 'Names: ');
//     return res; // this is the ending acuum
// }

// console.log(sum(['Mylo']));
// console.log(sum(["Rick", "Morty"]));
