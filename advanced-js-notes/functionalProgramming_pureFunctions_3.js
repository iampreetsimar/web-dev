`Paradigms in Programming -
        1. Procedural
                - write code in a single line 
                - important to know the order in which code is to be written 

        2. Object Oriented(OOPS)
                - breaking code into classes and their objects so that repetitive code is not written 
                  again and again 

        3. Functional
                - imperative(procedural) vs declarative(for functional) code writing 
                - pure functions(recommended in functional) and their side effects
                - mutability and immutability(recommended in functional)
                - higher order functions(map, filter, reduce....)
`

// -> IMPERATIVE VS DECLARATIVE
// Example - is square of a number is even

// Imperative way of writing code - procedural
// focuses more on the order to write a code
const x = 5;
const xSqaured = x * x;
let isEven;

if(xSqaured % 2 == 0) {
    isEven = true;
} else {
    isEven = false;
}

console.log(isEven); 

// Declarative way
// focuses more on solving a problem
const isSquareEven = x => ((x * x) % 2 == 0);
console.log(isSquareEven(4));


// -> IMPURE VS PURE FUNCTIONS

// impure functions
let a = 4;
function add(b) {
    console.log(a + b);
}

add(4); // prints 8
a = 6;
add(4); // prints 10

// since add() parameter is only b, result from invokation of sum() can vary even if b remains same as a's value is outside 
// and on changing a's value, the sum from sum() will change.
// Thus sum() is an impure functions as its result is dependent on external factors which are outside

// pure function - returns same result for same set of arguments
function add(a, b) {
    console.log(a + b);     // console.log() is one side effect of pure function(there can be many)
}
add(2, 4);  // prints 6
// add(a,b) always prints same sum for same a and b.

// Why is console.log() a side effect?
// since pure functions return same result for same set of arguments and are not dependent on external factors but
// console.log() uses the display of the system which is an external factor for add() to print result. This mutates the
// state of the external factor which is not allowed for a pure function.
// Try to have as less side effects as possible.

function add(a, b) {    // becomes pure functions with no side effect
    return a + b;
}

console.log(add(2, 4));


// -> MUTABILITY VS IMMUTABILITY
const person1 = {
    name : "Adam",
    age : 25
}

const person2 = person1;
person2.name = "Steve";     // this changes the name for person1 object as well
// This happened because objects use references(same memory address) and references for both objects here is same. 
// so, a change done by person2 mutated person1 as well because there was only one reference for both objects. 

// Solutions - can use deep copy, shallow copy, ... also knows as spread operator
//           - for now, use Object.assign({}, src object) - {} refers to a new object for  which a new reference is
//             created and properties of src object is copied to it. The new object reference is then assigned to the variable.
person3 = Object.assign({}, person1);
person3.name = "Mark";  // this changes name for only person3 object. person3 has a new reference and is not same as person1 and person2.

person4 = {...person1}; // ... creates a new reference for person4 and copies content of person1 to person4 object
person4.name = "Sam";

// Why immutable code is recommended for functional programming?
// to keep the code clean as much as possible, have fewer bugs and so that values don't mutate anywhere.