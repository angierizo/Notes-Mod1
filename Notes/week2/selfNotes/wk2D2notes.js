//week 2 day 2
/*
ordered = arrays VS Unordered =objects
array =ordered
ojbects = keys
*/

// Keys are strings and must be unique
// Keys point to values

// Values can be anything!
// Objects are unordered, order is not guaranteed!
//  LECTURE EXAMPLES: #1
        // let arr = [1, 2, 3]; //arrays have indexes, arrays have elements
        // let obj = {name: 'Angeline', age: 1000, thingToCheck: 'new value'} ; // objects have keys, and values
        // console.log(arr[2]);
        // console.log(['name']);

//ALL KEYS ARE STRINGS (OR SYMBOLS)

//          console.log(obj['taco']) // if we try to key into an object into a key that does not exist, it will = UNDEFINED
        // console.log(arr[5]); // undefined, OBJECTS can't exsist without KEYS, and vise versa

        // console.log(obj.name)
        // let thingToCheck = 'age' // this is NOT key in object so CANNOT use dot notation
        // console.log(obj[thingToCheck])//*****BRACKET NOTATION = will look for age inside the obj
        // console.log(obj.thingToCheck);// if it were a key, it would be shown as a key above


//  LECTURE EXAMPLE #2

    // let roomOfRichPeople = {
    //     Importantpersonson: "That's me!",
    //     Bezos: 'Yes?',
    //     Gates: "That's my hat!",
    // };

    // let thePersonWhoLostTheirHat = 'Gates';

    // // Mr. Importantpersonson, are you here?
    // console.log(roomOfRichPeople['Importantpersonson']);
    // console.log(roomOfRichPeople.Importantpersonson);

    // // Excuse me, someone lost their hat...
    // console.log(roomOfRichPeople[thePersonWhoLostTheirHat]);

    //  LECTURE EXAMPLE #3
        //      let arr = [1, 2, 3]
        //         let obj = {name: 'Angeline', age: 1000, thingToCheck: 'new value'} ;
        //         console.log(arr[2]);
        //         console.log(['name']);
        // //  HOW TO CHANGE ARRAY ON THE NUMBER 2 TO NUMBER 4
        //     arr[2] = 4;//changing index of [2] which is equa to the suffix 2, into 4
        //     console.log(arr);
        //     obj['name'] = 'Warren';
        //     console.log(obj);

        //     arr[4] = 12//using bracket notation with a number in array that is not existing
        //     console.log(arr)

        //     obj.taco ='al pastor';//using dot notation
        //     console.log(obj);// even if key doesnt exist you can make it exist by assigning to a key

        // LECTURE EXAMPLE #4  ASSIGNING VALUES
        // let story = {
        //     beginning: 'Once upon a time...',

        //     end: 'And they lived happily every after',
        //   };

        //   let makeAStory = function () {
        //       console.log(story); //
        //       if (story.middle === undefined) {
        //           story.middle = 'drama';
        //           console.log('added middle');
        //       } else {
        //           console.log('story complete');
        //       }
        //   };
        //   makeAStory();
        //   makeAStory();


 // - Why objects?
        //   - Instant look up time.
        //   - Allows us a term/definition (key-value pairs that make sense)

     //Lecture example #4
            //     let arrUser = ['Mylo', 7000, 'Module Instructor', 'Rural America'];

            // let arrAge;

            // for (let i = 0; i < arrUser.length; i++) {
            //     let ele = arrUser[i];
            //     if (typeof ele === 'number') {
            //         arrAge = ele;
            //     }
            // }
            // console.log(arrAge);

            // let user = {
            //     name: 'Mylo',
            //     age: 7000,
            //     job: 'Module Instructor',
            //     address: 'Rural America',
            // };

            // console.log(user.age);

//***************** PRIMITIVE DATA TYPE */
        // lecture example #1 primitives

        // let age = 10;//point directly to the number 10
        //     let numberOfFingers = age;//also points directly to num 10
        //     age = numberOfFingers + 1;//points to 11
        //     console.log(age, numberOfFingers);

// Lecture primitive example #2
    //         let Biff = {
    //             type: 'dog',
    //             age: 10,
    //         };

    // let Buster = Biff;

    // Biff.age = 0;//change biff's name to 0;

    // console.log(Biff, Buster);// both are now aged 0 because buster is equal to biff, and biff is equal to age 0.


    //**********OBJECT DESTRUCTURING*********** */

    //video lecture notes
                    //array Destructuring:
            //         //1. Destructuring Elements in Order.
            // let array = ['blue', 'red', 'yellow', 'green', 'pink']; //array

            // ///////////////Orignial method to write
            //         // let firstColor = array[0];
            //         // let secondColor = array[1];

            // //***destructuring syntax method */

            // let [firstColor, secondColor, thirdColor] = array;//destructuring statement
            // //variables defined within brackets will be assigned in order to values alreayd inside array

            // console.log(firstColor);
            // console.log(secondColor);
            // console.log(thirdColor);

//*************Destructuring Objects:
           /*
           1.Destructuring Keys.
           2. Aliased Destructuring
           3. Nested Destructuring
           */
    // let obj = {name: 'Sandy', instruments: ['guitar', 'uke']};

    // let { name, instruments} = obj;
    // console.log('name')
    // console.log(instruments)

//********Aliased destructuring put hte value in key orginially asociated with to new variable name

        // let obj = { name: 'Sandy', instruments: ['guitar', 'uke']};
        // let { name, instruments: music} = obj;
        // console.log(name)
        // console.log(music)

// ************ Destructuring Nested objects
        // let zooanimals = {
        //     animalID : 12,
        //     species : 'hippo',
        //     favefood: 'watermelon',
        //     fullname: {
        //         fname: 'fiona',
        //         lname: 'thecutehippo'
        //     }
        // };

        // let { fullname: {fname} } = zooanimals //find key object is nested in, go into zoo animals, find key name full name, within fullname, find fname key, take value associated with that and put into fname.
        //             // on the right side (=zoomanimals) mention what you want to destructure from
        //             //and then name the key that you want to destructure from on the inside so you can find the value within
        // console.log(fname)

        //*********Destructuring Objects in Parameters************ */
        // let parrot = { name: 'Layla', likes: 'pets', toys: 1000};
        //         /*Notes:
        //         -parameter destructuring - to structure value for name key in our function
        //         -just put braces in parameters
        //         -put in key name you want to destructure*/
        // function sayHelloName({likes}) {
        //     console.log('Hello to '  + likes);
        // }
        // sayHelloName(parrot);

// Lecture notes
// ARRAY DESTRUCTUNG SAME THINS AS OBJECT DESTRUCTURING
    //using avariable to pull out a part of an array
        //example below:
            // let arr = ['Angeline', 31, 'KS']
            // let name = arr[0]
            // let age = arr[1]

            // console.log(name)
            // console.log(age)
            // console.log(location)

//SAME AS THIS BELOW:

            // arr = ['Angeline', 31, 'KS']
            // let [name, age, location] = arr // <=== **This is destructuring
            // console.log(name)
            // console.log(age)
            // console.log(location)



//         ~~~~~~ ** REST AND SPREAD *** ~~~~~~~~~
    /*
    Rest and Spred:
    1. Rest Parameter - grab the rest of the paramters.
    2. Spread Operator:
        a. spread elements into structures
        b. spread iterable data types within function arguments
    */
            //    function colorPicker(color, ...otherColors){ //REST PARAMETER (...otherColors) always last parameter defined and passed in and put into an array.
            //        let string = "I picked the following colors: " + color ; //+ secondColor; (not needed anymore due to return ...othersColors)
            //        //return string
            //        otherColors.forEach(function(arg){
            //            string = string + ',' + arg;
            //        });
            //        return string;
            //    }
            //    console.log(colorPicker("red", "blue", 'yelllow', 'green', 'indigo'))


    //********SPREAD********* */
                // let array1 =  ['zebra', 'bird', 'parrot'];
                // let array2 = ['lion', 'bison', 'panther'];


                // //originally
                //         //let arry3 = array1.concat(array2);
                //         // console.log(arry3)

                // //USING SPREAD on ARRAYS////////
                //             // let array3 = [...array1, ...array2];
                //             // console.log(array3);

                //     obj1 = {car: "Nissan", color: "white"};
                //     let obj2 = {wheels: 4, radio: "loud"};

                // // USINGS SPREAD ON ** STRINGS **

                // let obj3 = { ...obj1, ...obj2 }
                //             console.log(obj3)

// ***************** SPREAD LECTURE NOTES**************
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = [...arr1, ...arr2];//use this SPREAD instead of concatenating
// console.log(arr3); // REPL = [ 1, 2, 3, 4, 5, 6 ] it spreads out the array and together
//                     // creates NEW ARRAY as the result in REPL
// //------------------------------------------
// //*******SPREAD CHANGING THE PIONTER FROM BIFF TO A DIFFERENT ARRAY USING SPREAD **********
// let Biff = {
//         type: 'dog',
//         age: 10,
//        };

// let Buster = {...Biff}; // This is now different than Biff because its a new array due to SPREAD

// Biff.age = 0;//change biff's name to 0;

// console.log(Biff, Buster);






//*
//**/
// Learning Objectives
// identify
