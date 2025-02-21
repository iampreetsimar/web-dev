`A higher-order function is a function that can take other functions as arguments or return a function as a result.
We'll focus on map, filter and reduce. All 3 are array based functions.

-> Map 
    - input is an array and a set of instructions(a callback function)
    - returns a result array after applying instructions to input

-> Filter HOF
    - input is an array and a condition
    - returns a result array having items which satisfy the condition after filtering items from input

-> Reduce HOF
    - input is an array and instruction(a callback function)
    - returns a single value result reduced from all values of input
`

// map
let arr1 = [1,2,3,4,5];
let arr2 = arr1.map(function (x) {  // for each item in arr1, square it and map it to same idx in arr2
    return x * x;
})

console.log(arr1);
console.log(arr2);

let arr3 = arr1.map(x => x/2);  // using arrow function
console.log(arr3);


// filter
let filteredArr = arr1.filter(function (x) {
    return x % 2 == 0;  // filters and add itemsto result which satisfy the condition
})
console.log("Filtered arr:", filteredArr)


// reduce  -- VERY IMPORTANT!!!!
//  Syntax -
// result = inputArr.reduce(function (accumulatedValueStoredInThis, input arr item) {
//                             return instructions how accumulated value interacts with arr item
//                   }, initial value of accumulated value)
    
    
let sumOArr = arr1.reduce(function (accumulator, x) {
    return accumulator + x;
}, 0);

// iteration 0 -> accumulater: 0 | x: 1 => acc. : 0 + 1 = 1
// iteration 1 -> acc. : 1 | x : 2 => acc.: 1 + 2 = 3
// iteration 2 -> acc. : 3 | x: 3 => acc.: 3 + 3 = 6
// iteration 3 -> acc. : 6 | x: 4 => acc : 6 + 4 = 10
// iteration 4 -> acc. :10 | x: 5 => acc: 10 + 5 = 15(is the result)

console.log("Sum of arr:", sumOArr);

// these all are declarative way of writing code
// We'll write POLYFILLS for these now i.e, actual implementation of these which is an imperative way of writing code

` POLYFILLS
    - actual implementation
    - mainly uses Prototypes in official implementation, which uses 'this' keyword
    - for now, create polyfill without these and code a custom implementation
`

// Map polyfill
let arr10 = [1, 2, 3, 4, 5];
let arr11 = arr10.map(x => x * x);
console.log("arr10:", arr10);
console.log("Mapped arr11 using map():", arr11);

// Custom Map Polyfill
function customMapPolyfill(arr, cb) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(cb(arr[i]));
    }
    return result;
}

function square(x) {
    return x * x;
}

let arr12 = customMapPolyfill(arr10, square);
console.log("Custom Mapped arr 12:", arr12);


// ******************************************

// Filter Polyfill
let arr15 = arr10.filter(x => x % 2 == 0);
console.log("arr10:", arr10);
console.log("Filtered arr15:", arr15);

// Custom Filter Polyfill
function customFilterPolyfill(arr, cb) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr10[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function isEven(x) {
    return x % 2 == 0;
}

let arr16 = customFilterPolyfill(arr10, isEven);
console.log("Custom Filtered arr16",arr16);

// ******************************************

// Reduce Polyfill
let arr20 = arr10.reduce((sum, x) => sum + x, 0);
console.log("arr10:", arr10);
console.log("Reduced sum of arr, arr20:", arr20);

// Custom Reduce Polyfill
function customReducePolyfill(arr, cb, acc) {
    for(let i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i]);
    }
    return acc;
}

function sum(a, b) {
    return a + b;
}

let sumOfArray = customReducePolyfill(arr10, sum, 0);
console.log("Custom reduced sumOfArray:", sumOfArray);