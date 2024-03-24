// JS file is read top to bottom
// To execute a js file in local: node <filename>.js 

// print statement
// console.log("Hello World!!");       // prints "Hello World!!"

// VARIABLE DECLARATION using 'let' keyword
// let a;      // create a vriable 'a' having value 'undefined' as no value set yet; 'undefined' is default value
// console.log(typeof(a));     // typeof(x) and typeof x returns the type of the argument
// console.log(a);

// a = "This is a string";
// console.log(typeof(a))      // string type
// console.log(a);


// a = 3;
// console.log(typeof a)      // number type
// console.log("This is a number: ", a);

// a = 3.14;
// console.log(typeof(a))      // number type
// console.log("This is a floating number: ", a);

// a = true;
// console.log(typeof(a))      // boolean type
// console.log("This is a boolean value: ", a);

// JS is a DYNAMICALLY TYPED LANGUAGE -
            // JavaScript is a dynamically typed language. This means you don't have to specify the data type of a 
            // variable when you declare it. It also means that data types are automatically converted as-needed during 
            // script execution.
// variable's type can be changed dynamically

// NOTE: Single quotes vs double quotes doesn't matter. Semicolons in the end are also optional.

// DATA TYPES
// PRIMITIVE(atomic - cannot be broken further) TYPES
// 1. number    - An integer or floating point number. For example: 42 or 3.14159.
// 2. string    - A sequence of characters that represent a text value. For example: "Howdy".
// 3. boolean   - true and false.
// 4. null      - A special keyword denoting a null value. (Because JavaScript is case-sensitive, 
//                null is not the same as Null, NULL, or any other variant.)
// 5. Symbol    - A data type whose instances are unique and immutable.
// 6. undefined - A top-level property whose value is not defined.
// 7. bigInt    - An integer with arbitrary precision. For example: 9007199254740992n.

// NON PRIMITIVE TYPE
// 1. Object
// 2. Function
// 3. Array 

// CONDITIONAL STATEMENTS - similar to other languages.
// supports if, if..else, switch

// FALSY values
// The following values evaluate to false (also known as Falsy values):
// false
// undefined
// null
// 0
// NaN
// the empty string ("")
// All other values— including all objects — EVALUATE to TRUE when passed to a conditional statement.

// LOOPS - while, do..while, for, for..in, for..of, continue, break
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// CHECK IF NUMBER IS PRIME OR NOT
// let num = 14;
// let isNumPrime = true;
// for(let i = 2; i * i <= num; i++) {
//     if(num % i == 0) {
//         isNumPrime = false;
//         break;
//     }
// }

// if(isNumPrime)
//     console.log(num, "is prime.");
// else    
//     console.log(num, "is not prime");

// --------------------------------------------------------------------------

// FUNCTIONS - no need to state return type as it can return anything based on the condition or the type of parameter

// function definition
// function saysHi(param) {
//     console.log(param, "returns hi!!");
//     return param;
// }

// // function invokation
// console.log(saysHi());
// console.log(saysHi(10));
// console.log(saysHi("string"));
// console.log(saysHi(true));
// console.log(saysHi([1, 2, 3]));


// OBJECTS  - collection of key: value pairs
//          - similar to maps in other languages
//          - key could be a number or a string
//          - values are termed as properties of an object

// let ironMan = {
//     name: "Tony",
//     lastName: "Stark",
//     age: 27,
//     address: {      // can also add an abject as a value, here, address is another object
//         city: "New York",
//         country: "US",
//     },
//     isAvenger: true,
//     movies: ["Iron Man", "Iron Man 2", "Iron Man 3", "Avenger Series"],
//     saysHi: function() {    
//         // can also add a function as an object property
//         // no need to add a name as function identifier will be key of that function value
//         // since function is an object property, it is termed as an object METHOD
//         console.log(this.name + " "  + this.lastName, "says hi!!");
//     }
// };

// Accessing object 
// console.log(ironMan.name);
// console.log(ironMan.isAvenger);
// console.log(ironMan.address.country);
// console.log(ironMan.address);   // address property is printed
// console.log(ironMan.movies[2]);
// ironMan.saysHi();

// console.log(ironMan);       // ironMan object is printed, 
// saysHi prints "[Function: saysHi]", instead of definition. Represents saysHi is a function type
// {
//     name: 'Tony',
//     lastName: 'Stark',
//     age: 27,
//     address: { city: 'New York', country: 'US' },
//     isAvenger: true,
//     movies: [ 'Iron Man', 'Iron Man 2', 'Iron Man 3', 'Avenger Series' ],
//     saysHi: [Function: saysHi]
//}


// SET(adding a key:value pair)/ UPDATE(updates a value for a key)
// ironMan.age = 35;   // updates existing value for key: age
// console.log(ironMan.age);

// ironMan.friends = ["Bruce Benner", "Black Widow", "Peter Parker"];
// console.log(ironMan);   // a new key: friends with the array as its value is added to object

// DELETE(deletes a key: value pair)
// delete ironMan.address;     // deletes key:address with its value
// console.log(ironMan);


// ITERATE OVER OBJECT KEYS - use for..in loop
// for(let key in ironMan) {
//     console.log(key + ":" + ironMan[key]);
// }

// ALTERNATIVE WAY FOR ACCESSING
// console.log(ironMan["age"]);    // searches for key: "age" in object

// let ageKey = "age";
// console.log(ironMan[ageKey]);   // useful when keys are supplied from elsewhere

// console.log(ironMan.xyz);   // since xyz is not present, prints undefined

// Access using . directly goes for the key mentioned whereas [] searches if the variable inside it is a key.



// ARRAYS - usually, a collection of same data types but here can add element of any type
// declaration
// let arr = []    // creates an empty arr
// console.log(arr); 

// arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let idx = 0;
// while(idx < arr.length) {   // while loop on array, .length is a method available on array objects
//     console.log(arr[idx]);
//     idx++;
// }

// METHODS AVAILABLE ON ARRAYS
// ADD AT LAST
// arr.push("six");    // added a different type element in last
// console.log(arr);

// // ADD AT FRONT
// arr.unshift("zero");    // added a different type elent in front
// console.log(arr);

// // REMOVE FROM LAST
// console.log(arr.pop());     // returns the removed element from last
// console.log(arr);

// // REMOVE FROM FRONT
// console.log(arr.shift());   // returns the removed element from front
// console.log(arr);


// <arrayName>.slice(start, end)
//      - Returns a copy of a section of an array, i.e, OG array remains unchanged 
//      - For both start and end, a negative index can be used to indicate an offset from the end of the array. 
//      - For example, -2 refers to the second to last element of the array.

//      - @param start:
//              The beginning index of the specified portion of the array. 
//              If start is undefined, then the slice begins at index 0.

//      - @param end
//              The end index of the specified portion of the array. 
//              This is exclusive of the element at the index 'end', i.e, stops at (end - 1). 
//              If end is undefined, then the slice extends to the end of the array.
// console.log(arr.slice(0, 3));   // prints items from idx: 0 -> 2
// console.log(arr.slice(-3));     // prints items from idx: (5-3= 2 -> end)


// <arrayName>.splice(start, deleteCount)
//      - Removes elements from an array and, if necessary, inserts new elements in their place, 
//        returning the deleted elements.
//      - Changes OG array.

//      - @param start — The zero-based location in the array from which to start removing elements.
//      - @param deleteCount — The number of elements to remove.
//      - @returns — An array containing the elements that were deleted.
// console.log(arr.splice(3, 2));      // remove 2 items starting from idx 3 - removes 4, 5
// console.log(arr);


// <arrayName>.indexOf(searchElement, fromIndex:optional)
        // - Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
        // - @param searchElement — The value to locate in the array.
        // - @param fromIndex — The array index at which to begin the search. 
        //    If fromIndex is omitted, the search starts at index 0.
// console.log(arr.indexOf(3));    // prints idx of item 3 which is 2
// console.log(arr.indexOf(3, 3)); // prints -1 as searching started from idx 3

// -----------------------------------------------------------------------------------------------------

// STRINGS
//        - can be defined using 'singke quotes', "double quotes", `backtick quotes`

// let single = 'single Quotes';
// console.log(single);

// let double = "double Quotes";
// console.log(double);

// let backTick = `backTick Quotes`;
// console.log(backTick);

// METHODS AVAILABLE ON STRINGS
// <stringName>.charAt(pos)
//          - Returns the character at the specified index.
//          - @param pos — The zero-based index of the desired character.
// console.log(single.charAt(3));
// console.log(typeof single.charAt(3));   // char is also of TYPE STRING

//<stringName>.substring(start, end)
//          - Returns the substring at the specified location within a String object.
//          - @param start — The zero-based index number indicating the beginning of the substring.
//          - @param end
//                Zero-based index number indicating the end of the substring. 
//                The substring includes the characters up to, but not including, the character indicated by end. 
//                If end is omitted, the characters from start through the end of the original string are returned.
// console.log(single.substring(0, 8));

// <stringName>.split(separator, limit:optional)
//      - Split a string into substrings using the specified separator and return them as an array.
//      - @param separator — A string that identifies character or characters to use in separating the string. 
//         If omitted, a single-element array containing the entire string is returned.
//      - @param limit — A value used to limit the number of elements returned in the array.
// console.log(double.split("u"));

// <arrayName>.join(separator)
//         - Adds all the elements of an array into a string, separated by the specified separator string.
//         - @param separator — A string used to separate one element of the array from the next in the 
//            resulting string. If omitted, the array elements are separated with a comma.
// let splitStr = ["this", "string", "is", "split"];
// console.log(splitStr.join(" "));

// <stringName>.charCodeAt(idx)
//      - The zero-based index of the desired character. If there is no character at the specified 
//        index, NaN is returned.
//      - Returns the Unicode value(ASCII) of the character at the specified location.
// console.log(double.charCodeAt(0));

// <stringName>.trim()
//      - Removes the leading and trailing white space and line terminator characters from a string.
//      - OG string remains unchanged
// let spacedStr = "    hello    ";
// console.log(spacedStr.trim());
// console.log(spacedStr);     // unchanged with spaces

// ------------------------------------------------------------------------------------------

// `Q. Print Fizz Buzz.
// Description: Write a program that prints the numbers from
//  1 to 20 and for multiples of 
// '3' print "Fizz"  
// '5' print "Buzz"
// '3' and '5' both print "FizzBuzz"
// else number itself

// function fizzBuzz() {
//         for(let i = 1; i <= 20; i++) {
//                 if(i % 15 == 0)
//                         console.log("FizzBuzz");
//                 else if(i % 3 == 0)
//                         console.log("Fizz");
//                 else if(i % 5 == 0)
//                         console.log("Buzz");
//                 else    
//                         console.log(i);
//         }
// }
// fizzBuzz();

// ------------------------------------------------------------------------------------------

// Q Given a array first=[1,2,3,4,5];
// Write a JavaScript program that fill second array in reverse order of first
// narr=[5,4,3,2,1]

// let first = [1,2,3,4,5];
// let second = [];
// for(let item of first) {
//         second.unshift(item);
// }
// console.log(second);

// ------------------------------------------------------------------------------------------

// Q Write a JavaScript program to compute the union of two arrays using push pop without using extra space.
// Input arr1= [1, 2, 3]
// arr2= [100, 2, 1,10]
// Output: [1,2,3,100,10]

// let arr1 = [1,2,3]
// let arr2 = [100,2,1,10]
// while(arr2.length > 0) {
//         if(arr1.includes(arr2[0]))
//                 arr2.shift();
//         else    
//                 arr1.push(arr2.shift());          
// }
// console.log(arr1, arr2);

// ------------------------------------------------------------------------------------------

// Que  Title Case a Sentence.
// Input:I'm a little tea pot"
// Output: I'm A Little Tea Pot.

// let input = "I'm a little tea pot";
// let arr = input.split(" ");
// for(let idx in arr) {
//         arr[idx] = arr[idx].charAt(0).toUpperCase() + arr[idx].substring(1);
// }
// console.log(arr.join(" "));
