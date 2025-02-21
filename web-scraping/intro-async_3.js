const fs = require('fs');   // import file system module

// Example
console.log("Before");
let data = fs.readFileSync("demo.txt");
console.log("" + data);
console.log("After");

// OUTPUT
// Before
// ***** demo.txt content ********
// After

// Bottleneck - control will wait till all content of demo.txt is read
// Solution: use async function

// 1. fs.readFile()
//          - reads content of file asynchoronously
//          - syntax : readFile("file-path", callback function)
//                     function callback function(err, data) {
//                          ....some work
//                     }
//          - after the file is read, callback function is invoked
//          - control does not wait for file to be read completely
// Example
console.log("Before")
fs.readFile("demo.txt", cb);
function cb(err, data) {
    console.log("" + data);
}
console.log("After");

// OUTPUT
// Before
// After 
// ****** demo.txt content *******
