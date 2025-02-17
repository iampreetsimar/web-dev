
// Example
const arr = [1,2,3,4,5];
// arr = 4;        // will throw an error since we are reassigning const variable
arr[3] = 10;
console.log(arr);   // will update arr[3] as arr's referenced memory is not changing but remains same.

arr.shift();
console.log(arr);
// Usually in other languages, array's variable stores the address of 0th item but in JS, we can even delete the first item for 'const' array.
// This means JS does not have typical arrays as they are in other languages.


// How is this possible?

// 1. OBJECTS
//      - {key : value} pairs
//      - key can be of string/number type

let ob = {
    name : "first",
    last : "last",
    saysHi : function() {
        console.log(this.name + " says hi!!");
    }
}

console.log(ob);

for(let key in ob) {        // for..in loop
    console.log(key + " : " +  ob[key])
}

arr.myprop = "this is an object"
arr.myfunc = function () { console.log("function inside array") }
for(let item in arr) {      // 
    console.log(item + " : " + arr[item])
}
// we see that myprop and myfunc has been added as a key in arr. but this can happen only if the arr is an object!!!

console.log("*********")
console.log(arr.length) // length in arr only gives lastIdx + 1. keys added separately like in objects as  not counted
arr[99] = 100;  // creates 95 slots having undefined values, after that 100 is added at idx:99
console.log(arr);
console.log(arr.length);    // length becomes 100

// even if an idx is not present, we can access it just like an object and we get undefined value and no error is thrown
console.log(arr[200]);


// How is it possible to remove first item of const array?
// shift() works because on removing 0th item, control goes to address of arr in heap and finds '0' key.


// 2. FUNCTIONS
function fn() {
    console.log("this is fn()");
}

fn.prop = 100;      // adds a key : value pair
fn.myfunct = function () { console.log("a method inside fn"); }     // adds function property as key : value pair
console.log(fn);
fn();
fn.myfunct();   

// definition of function : functions also act as an object(has key:value pairs) but also has an extra feature called CODE PROPERTY
// which can be executed when invoked.

// NOTE : Everything in JS is a PRIMITIVE(string, number, boolean, undefined, null, Symbol) OR AN OBJECT(dates, modules, errors, etc.)!!!!

