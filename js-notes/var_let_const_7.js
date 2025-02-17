// ES6 onwards, there were 2 new ways to declare variables using 'let' and 'const' keywords. 

// Limitations of using 'var' -
//     - has functional scope
//     - can be redeclared thereby, increasing variable pollution, bugs etc.
//     - in a browser, variables defined using this are added on 'window' object


// 1. 'let' keyword - no need to assign value during declaration
let varname;
console.log(varname);   // prints : undefined due to hoisting(same as in case of var)
varname = 10;   // can be assigned a value
console.log(varname);   // prints : 10
varname = 20;   // can be reassigned a value
console.log(varname);   // prints : 20
// let varname;    // cannot be redeclared like 'var', thus gives an error during creation phase hoisting itself

`
In case of using 'let' and 'const', we need to declare the variable before using it. If we use it before declaration, the variable will be in TEMPORAL DEAD ZONE
where the value of variable is undefined but will throw an exception stating cannot access before initialization.
The area(code) before this access is executed perfectly but the variable is in TDZ so it cannot be accessed till its declaration.
In terms of 'var', even if we use it before declaration, 'undefined' value be accessed for the variable.
`

// 2.  'const' keyword 
//      - need to assign a value during declaration
//      - cannot be redeclared as well as reassigned
const ab = 1;
ab = 2; // throws error : Assignment to constant variable.


// 3. BLOCK SCOPE
`
Anything between { } is in a block. Any memory allocated is based on the block and its scope(anything b/w the block). For a block, memory is not allocated during
creation phase but during code execution phase itself. When the control reaches the block, memory is allocated to the variables.
`

// Example 1
// let fruits = "apple";
// console.log(fruits);    // prints : apple

// {       // any memory allocation for the block happens when control reaches this block
//     let fruits;
//     console.log(fruits);    // undefined
//     fruits = "orange";  
//     console.log(fruits);    // prints : orange as in this block, fruits is assigned value : orange
// }

// console.log(fruits);    // prints : apple as fruits: orange scope was till the block only


// Example 2
// let fruits = "apple";
// console.log(fruits);    // prints : apple

// {       // any memory allocation for this block happens when control reaches this block
//     let fruits;
//     console.log(fruits);    // undefined
//     fruits = "orange";  
//     {   // no fruits variable in this block, gets value from lexically outside
//         console.log(fruits);    // prints : orange
//     }
//     console.log(fruits);    // prints : orange as value is present in the block
// }

// console.log(fruits);    // prints : apple as fruits: orange scope was till the block only


// 4. VARIABLE SHADOWING
//          - happens for both 'let' and 'const'
//          - the variable inside a block will shadow the variable with same name outside the block

// Example 1
// const fruits = "apple";
// console.log(fruits);    // prints : apple
// {
//     const fruits = "orange";
//     console.log(fruits);    // prints : orange
// }
// console.log(fruits);    // prints : apple

// LEGAL VARIABLE SHADOWING
//          - outside block variable is 'var' but inside is 'let'
//          - outside block variable is 'let' and inside is also 'let'
//          - outside block variable is 'const' and inside is also 'const'

// ILLEGAL VARIABLE SHADOWING
//          - outside block variable is 'let'/'const' but inside is 'var'
//          - since 'var' has a function scope, it is allocated memory during creation phase itself even if its in a block

// Example 
// let fruits = "apple";   // given error during creation phase since 'let' keyword is being redeclared using var
// console.log(fruits);    // prints : apple
// {
//     var fruits = "orange";
//     console.log(fruits);    // prints : orange
// }
// console.log(fruits); 


`
keyword           scope                   reassign                      redeclared                          TDZ(temporal dead zone)
var             function                    yes                             yes                                     no
let               block                     yes                             no                                      yes
const             block                     no                              no                                      yes
`


