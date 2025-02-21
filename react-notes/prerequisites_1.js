
// 1. SPREAD OPERATOR

// in arrays
// let arr = [1,2,3,4,5]

// let new_arr = arr;  // same reference - any changes in new_arr changes arr as well
// let new_arr = [...arr]; 
// new_arr[0] = 10;

// console.log(arr);
// console.log(new_arr);

// in objects
// let obj = {
//     name : "Adam",
//     address : {
//         state : "Punjab",
//         city : "ASR" 
//     }
// }

// let obj2 = obj;
// obj2.name = "Sam";
// obj2.address.state = "Goa";
// console.log(obj);
// console.log(obj2);
// same reference - changes in obj2 makes changes in obj as well

// let obj2 = {...obj};         // SHALLOW COPY
// obj2.name = "Sam";
// obj2.address.city = "Patiala";

// console.log(obj);
// console.log(obj2);
// we see that first level property is copied to  new object's new reference but address(which itself is an object inside object) 
// still shares same reference so need to add spread operator for that as well

// let obj2 = {...obj, address : {...obj.address}};  // Manual deep copy
// obj2.name = "Sam";
// obj2.address.city = "Patiala";
// console.log(obj);
// console.log(obj2);

// But what if there are multiple levels of properties inside properties?
// each object must get a new reference.

// let obj = {
//     name : "Adam",
//     address : {
//         state : {
//             state : "Punjab",
//             city : {
//                 city: "ASR",
//                 pin: "12345"
//             },
//             country : "India"
//         }
//     }
// }

// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.address.state.city.city = "Patiala";
// console.log(obj.address.state.city.city);
// console.log(obj2.address.state.city.city);
// DEEP Copy shortcut - does deep copy for all levels
// stringify creates a string from obj. this string has an address in stack itself and not in heap.
// parse creates object from the string and new memory is allocated in heap.

// *************************************************

// 2. DESTRUCTURING (convenient way to extract values)

// in arrays
// let info = ["My", "name", "is", "Adam"];
// let [a,b,c,d] = info;   // destructures/extracts item values from arr to individual variables
// let [x,y,,z] = info;    // the extra , signifies to ignore that item
// let [p,q,r,s,t] = info      // the extra variable gets undefined as value
// let [i,j,k,l,m="hello"] = info;     // the extra variable now has a default value
// console.log(info);
// console.log(a, b, c, d);
// console.log(x,y,z);
// console.log(p,q,r,s,t);
// console.log(i,j,k,l,m);


// in objects
// let obj = {
//     name: "Adam",
//     city: "ASR",
//     state: "punjab"
// }

// let first_name = obj.name;
// let state = obj["state"];

// let {name, city, state } = obj;      // destructures in same order of keys and has same names as keys(if variable name is diff, value becomes undefined)
// let {name, city, state, extra } = obj;      // extra is undefined
// let {name : first_name, city, state, country = "India"} = obj;  // country has default value and name key from obj is mapped to first_name variable
// console.log(first_name, city, state, country);


// in nested object
// let obj = {
//     name : "Adam",
//     address : {
//         state : {
//             city : "asr",
//             state : "punjab"
//         },
//         country : "india"
//     }
// }

// let {name} = obj;
// let {address : {country : abcd}} = obj;    // destructures country property(new var name : abcd) from inside address from inside object
// let {address : { state : { city: cit }}} = obj;
// console.log(name, abcd, cit);

// *************************************************

// 3. MAP & FILTER FUNCTIONS

// let ratings = [];
// for(let i = 0; i < watchlist.length; i++) {
//     ratings.push({title : watchlist[i]["Title"], rating : watchlist[i]["imdbRating"]});
// }

// // convert into map function
// ratings = watchlist.map(x => { return { title : x.Title , rating : x.imdbRating } });

// filter function
// let filteredList = ratings.filter(x => (x.rating >= 8.0));

// *************************************************

// 4. 'this' for react

// depends on 
//     - environments -> browser or Node.js
//     - modes -> strict or non-strict

// for react, we'll focus on browser env and non-strict mode

`
when a script is run on browser, a global(nodejs)/window(browser) object is created. 
'this' for GEC is the window object itself. 
'this' for a function refers to the current object through which function is invoked.

`

// Example
// console.log(this);      // window object

// function fn() {
//     console.log(this);
// }

// fn();      // in this fun() is called by GEC, this is again window object

// let obj = {
//     name : "Adam",
//     fun : fn
// }

// obj.fun();    //  here 'this' is obj


// function fn() {
//     console.log(this);      // this is obj
//     function abc() {
//         console.log(this);      // this is window since abc() is not being invoked by an object but just a function
//     }

//     abc();
// }

// let obj = {
//     name : "adam",
//     func : fn
// }

// obj.func();

// What if we want that 'this' in abc() must not be assigned window object?

// Method 1 : bind function
// function fn() {
//     console.log(this);      // this is obj
//     function abc() {
//         console.log(this);      
//     }

//     let ret = abc.bind(this);   // binds curr 'this' which is the obj, to abc fn def and returns that def to assign to ret
//     ret();  // 'this' is obj
// }

// let obj = {
//     name : "adam",
//     func : fn
// }

// obj.func();

// Method 2 : arrow function
// function fn() {     // function keyword checks its own 'this' but arrow fns do not have their own 'this' and inherits 'this' its parent
//     console.log(this);      // this is obj
//     abc = () => {       // converting abc to an arrow fn binds curr 'this' to abc
//         console.log(this);
//     }
//     abc();  // 'this' is obj
// }

// let obj = {
//     name : "adam",
//     func : fn
// }

// obj.func();