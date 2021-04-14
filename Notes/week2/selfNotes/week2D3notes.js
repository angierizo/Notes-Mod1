//*************     WEEK 2 DAY 3 NOTES */

//VIDEO LECTURE USING CALLBACK FUNCTIONS DEMO 1 NOTES BELOW:
        // let superAdd = function(num1, num2, cb){
        //     let sum = num1 + num2;
        //     let res = cb(sum); // cb refers to doubler function
        //     //assign a variable to call back (don't have to)
        //     return res;//return result
        // };
        // //
        // //this is the CALLBACK
        // let doubler = function(n){
        //     return 2 * n;
        // };
        // //
        // let negate = function(n){
        //     return -1 * n;
        // };

        // console.log(superAdd(80, 1, Math.sqrt))// Math.sqrt = square root
        // // console.log(superAdd(3,2, doubler)) //third parameter is CAllback function
        // // console.log(superAdd(3, 2, negate));
// //example #2
// function foo(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// foo('alpha', 'bravo', 'charlie', 'delta')


//Example # 3  check to see if cb is == to undefined just return the sum of the two parameters, else return the callback funciton on the sum
//makes callback OPTIONAL BELOW:
                // let superAdd = function(num1, num2, cb){
                //   if (cb === undefined){
                //     return num1 + num2;
                // }
                // else {
                //     let sum = num1 + num2;
                //     return cb(sum)
                // }
                // };

                // console.log(superAdd(80, 1, Math.sqrt))
                // console.log(superAdd(80, 1));

//Example #4 funciton that accepts a num and two acb's as parameters, should call both callbacks passing in num, and return the result of the callback that is larger
                // let greaterResult = function (num, cb1, cb2){
                //     let result1 = cb1(num);
                //     let result2 = cb2(num);

                //     if (result1 < result2){
                //         return result1;
                //     }
                //     else {
                //         return result2
                //     }
                // };
                // let doubler = function(n){
                //     return n * 2;
                // };

                // let squarer = function(n){
                //     return n * n;
                // }

                // console.log(greaterResult(1, doubler, squarer))
//******************************* */

// ---------- LECTURE NOTES -----------------------

        // let arr = [
        //     function(){
        //         console.log("I'm stored in an array");
        //     },
        //     function(){
        //         console.log("And I'm the second index array");
        //     }
        // ];
        // arr[0]();

        //         let obj = {
        //             func: function(){
        //                 console.log("I'm stored inside the Object");
        //             },
        //         }
        // obj.func()//this does not need console log since not returning anything and all we need to do is invokation.
        // //obj['func']()

// Lecture example:
//Look up the NOTESBITCH folder on desktop

// MYFOREACH
let peeps = ['kafele', 'cindy', 'jon', 'paloma'];


/*//*****original method******
peeps.forEach(function(el, i, array){
    console.log(el + 'is at index' + i);
    console.log(array);
})

*/

let myForEach = function( array, cb){
    for (let i = 0; i < array.length; i++){
        let el = array[i];//kafele index = 0 per iteration
        cb(el, i, array);
    }

};

/*THIS IS THE CALLBACK FUNCTIO*/
myForEach(peeps, function(el, i){//calling myforeach, peeps = array
    console.log(el + ' is at index ' + i);
});
