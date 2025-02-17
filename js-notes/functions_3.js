// FUNCTION DEFINITION
// function <functionName>(parameters) {
//     // .. statement
//     return value
// }

// FUNCTION INVOCATION/CALL
// <functionName>(arguments) 

// NOTE : 
// 1. What if function definition has parameters but arguments are not passed during invocation?
//    parameter as set as undefined
function sayHello(param) {
    console.log(param, "says hello!");
}

sayHello();  // prints "undefined says hello!"

// 2. What if function invocation is saving a return value but nothing is being returned from definition?
//    returned value is set as undefined
function sayHello(param) {
    console.log(param, "says hello!");
}

greeting = sayHello("Test");    // prints "Test says hello!"
console.log(greeting)           // returns undefined

// 3. Does the return type matter?
//    function can have a dynamic return type
function sayHello(param) {
    if(param == 1) return "hello";
    else if(param == 2) return 3;
    else return true
}

console.log(sayHello(1));       // returns "hello"
console.log(sayHello(2));       // returns 3
console.log(sayHello());       // returns true

// ************************************************

// ANONYMOUS FUNCTIONS 
// naming functions is optional. We can directly store function to a variable.
funct = function () {
    console.log("Test says hello");
}

console.log(funct);     // prints reference to which it points to but uses variable name : [Function: funct]
funct()     // prints "Test says hello"

// IIFE - Immediately Invoked Function Expression
// no need to invoke them later on but can be invoked as soon as definition is parsed
// eg. used when something is to be done for setup on reaching a point
// Syntax:  (function () { ... function body })()
(function () {
    console.log("I'm an IIFE");
})();


// ARROW FUNCTIONS - mainly used in react
function mult(num1, num2) {
    return num1 * num2;
}

console.log(mult(1, 2))     // prints product of num1 and num2

// Corresponding Arrow function -
mult = (num1, num2) => num1 * num2;
console.log(mult(3,2));     // prints product of num1 and num2

// ****************************************


// FUNCTIONS are FIRST CLASS CITIZENS in JS,i.e., they are treated as variables.
// 1. Assignment 
// We can assign function definitions/address as variables are assigned values. 
// These are also called FUNCTION EXPRESSIONS
// Syntax :  function_variable_name = function <functionName>() {  ...function body }
// This stores the defined function's address in function_variable_name.
// We can invoke the function using this function_variable_name.
funct = function saysHello() {
    console.log("Test says hello");
}

console.log(funct);     // prints reference to which it points to and uses OG function's name : [Function: saysHello]
funct()     // prints "Test says hello"

// 2. Passed as parameter
// We can pass a function as a parameter as variables are passed
// used in Functional Programming, Higher Order Functions and Callbacks
function saysHello(param) {
    console.log(param);
    param();    // param is executed on invocation only
    return true;
}

function smaller() {
    console.log("Smaller invocation");
}

console.log(saysHello(smaller));
// prints - 
// [Function: smaller]
// Smaller invocation
// true

// 3. can return a function
// We can return a function as a variable is returned from a function
// used in Closure
function outer() {
    console.log("Outer");
    return function inner() {   // can return anonymously as well
        console.log("Inner");
    }
}

res = outer();      // prints "Outer" and returns inner() and stores it to res
res();              // prints "Inner"
