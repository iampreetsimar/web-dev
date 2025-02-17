`
JS code is executed in an EXECUTION CONTEXT. Since js does not have any main function, the js engine provides a wrapper called
Execution Context in w/c code is executed. 

Since there is no main() in JS, so code w/c is outside any function is also called GLOBAL CODE and the area is GLOBAL AREA.
The wrapper generated for code in global area is called GLOBAL EXECUTION CONTEXT.
Each function creates its own execution context.

The JS Engine provides following for the GLOBAL EXECUTION CONTEXT:
    1. an object: global - (node.js provides global whereas in chrome browser object: window)
    2. this object - (in node.js, this is empty whereas in chrome browser, this is equal to window object at the global level)
                   - the object is also created for function execution contexts

There are 2 components in an execution context :
    1. Memory component - also known as VARIABLE ENVIRONMENT
            stores all variables and functions as { key : value } pair

    2. Code component - also known as THREAD of EXECUTION
            where code is executed one line at a time

There are 2 phases when execution context is created:
    1. CREATION(Memory Creation) PHASE(happens before code execution)
            - in this phase, all variables and functions in the script are allocated memory in memory component
            - variables are assigned "undefined" value
            - functions are assigned the address in heap where actual definiton of function is stored
            - this process is also called HOISTING

    2. CODE EXECUTION PHASE
            - code is executed one line at a time
`
// EXAMPLE 1
console.log("a is", a);  // AFTER CREATION PHASE
var a;      // DURING CREATION PHASE
console.log("a is", a);   // AFTER CREATION PHASE      
a = 10;    // AFTER CREATION PHASE
console.log("a is", a);    // AFTER CREATION PHASE 
// Output:
// a is undefined
// a is undefined
// a is 10
//*******************************************

// EXAMPLE 2
funct();    // AFTER CREATION PHASE
console.log("Before - Function is", funct); // AFTER CREATION PHASE
function funct() {      // DURING CREATION PHASE - memory is allocated to function funct
    console.log("This funct!!");
}
funct();    // AFTER CREATION PHASE
console.log("After - Function is", funct);  // AFTER CREATION PHASE
// Output: 
// This funct!!
// Before - Function is [Function: funct]
// This funct!!
// After - Function is [Function: funct]
//******************************************

// EXAMPLE 3
function real() {   // DURING CREATION PHASE
    console.log("Real 1");
}

function real() {   // DURING CREATION PHASE - overwrites current function's addr on previous real function name
    console.log("Real 2");
}

real()      // After CREATION PHASE - does not matter where this is in script. 

function real() {   // DURING CREATION PHASE - overwrites current function's addr on previous real function name
    console.log("Real 3");
}
// Output
// Real 3
//***************************************** 

// EXAMPLE 4(very imp)
console.log(varName);   // AFTER CP
var varName;    // DURING CP
console.log(varName);   // AFTER CP
varName = "Some name";  // AFTER CP
console.log(varName);   // AFTER CP

funct();    // AFTER CP
function funct() {  // DURING CP
    console.log("This is funct!");
}
funct();    // AFTER CP

container();    // Throw error since container is a variable till now even AFTER CP phase
var container = function () {   // DURING CP: container is undefined | AFTER CP: container is assigned function def.
    console.log("This is container");
}
container();    // AFTER CP

// Output
// undefined
// undefined
// Some name
// This is funct!
// This is funct!
// Throw error
// ***************************************************

// EXAMPLE 5(very imp)
var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);

`
Global Execution Context
    global: {...}
    this: {}
    Creation Phase
        n: undefined
        square: { function def. }
        square2: undefined
        square4: undefined
    
    Code Execution Phase
        n:2
        square(n)
            EXECUTION CONTEXT - square(2)
                Creation Phase
                    num: undefined
                    ans: undefined

                Code Execution Phase
                    num: 2 (passed in parameter from argument of square(n))
                    ans: 4
                    ans is returned and control moves back to where function was invoked
            EXECTION CONTEXT - square(2) is removed
        square2: 4
        square(4)
            EXECUTION CONTEXT - square(4)
                Creation Phase
                    num: undefined
                    ans: undefined

                Code Execution Phase
                    num: 4  (passed in parameter from argument of square(4))
                    ans: 16
                    ans is returned and control moves back to where function was invoked
            EXECTION CONTEXT - square(4) is removed
        square4: 16
Global Execution Context is removed`
//******************************************************* 

`
NOTE: In above examples, multiple execution contexts were being created or deleted. All of that is managed by the CALL STACK.
      The bottom of this call stack always contains Global Execution Context.
      The Call Stack maintains the order of execution of Execution Contexts.
      Also knows as Execution Context Stack, Program Stack, Control Stack, Runtime Stack, Machine Stack.

 NOTE : JS is a SYNCHRONOUS SINGLE-THREADED LANGUAGE!!!
        - js can only execute one command at a time(single-threaded) in a specific order(synchronous)
        - can only move to next command once current command is processed


HOISTING - During the CP of execution context, all variables are allocated memory with a value undefined and all normal 
           functions definitions are allocated address in heap where that function's def. is stored.
`
// EXAMPLE 1
getName()
console.log(x);

var x = 10;
function getName() {
    console.log("Inside getName()");
}
/*
Global Execution Context
    global: {...}
    this: {}
    Creation Phase
        x: undefined
        getName: { function def. }
    
    Code Execution Phase
        getName()
            EXECUTION CONTEXT - getName()
                Creation Phase

                Code Execution Phase
                    prints: "Inside getName()"
                    control moves back to where function was invoked
            EXECTION CONTEXT - getName() is removed
        prints: "undefined"
        x:10
*/
/*
Output:
Inside getName();
undefined
*/
//************************************************************

// EXAMPLE 2
getName()
console.log(x);

function getName() {
    console.log("Inside getName()");
}
/*
Global Execution Context
    global: {...}
    this: {}
    Creation Phase
        getName: { function def. }
    
    Code Execution Phase
        getName()
            EXECUTION CONTEXT - getName()
                Creation Phase

                Code Execution Phase
                    prints: "Inside getName()"
                    control moves back to where function was invoked
            EXECTION CONTEXT - getName() is removed
        throws error: not defined as no variable x defined
*/
/*
Output:
Inside getName();
not defined error
*/

