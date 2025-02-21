`Assume, we have parked our car at a parking and we get a token for it. Whenever we want to take out car back, we need to return 
this generated token to get the car back. 

****** A promise also acts as a token ********

Following ways to read a file -

1. using sync method : the control waits to get the control before moving forward
2. using async method : the control does not wait but instead invokes callback method when content is read completely
3. using promise : the control does not wait but a promise is returned.

A promise has two things : a state and a value
It can have two states : 
    - pending (when the work is not yet completed)
    - settled (when a promise is settled, it can either be 
                    -> fulfilled i.e, task completed successfully
                    -> rejected i.e, task failed
              )

A task which gives a promise defines itself what is required to completed the task and when the promise is actually settled
it defined whats is the final outcomes i.e, fulfilled or rejected.
`
const fs = require('fs');

// Example
console.log("Before");
let promise = fs.promises.readFile("demo.txt"); // does not return the content but instead a promise
console.log(promise);    // initially prints : pending

promise.then(function (data) {  // .then is invoked if promise is settled and fulfilled
    console.log(data);
})

promise.catch(function (err) {  // .catch is invoked if promise is settled and rejected
    console.log(err);
})

console.log("After");

// NOTE : promise is async in nature!!!


// Example : promise based for coffee(only drink available) order at a cafe
function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
        if(drink == 'coffee') {
            resolve('order placed!');       // argument in resolve is passed to then()
        } else {
            reject('only coffee is served');    // argument in reject is passed to catch()
        }
    })
}

function processOrder(order) {
    return new Promise(function (resolve) {     // no reject -> this promise cannot be rejected
        console.log('order is being processed!');
        resolve(`coffee served for order ${order}`);
    })
}


placeOrder('tea').then(function (order) {
    console.log('order received');
    let orderProcessed = processOrder(order);
    return orderProcessed;
}).then(function (orderProcessed) {
    console.log(orderProcessed);
}).catch(function (err) {
    console.log(err);
})

`
A complicated request could result in large promise chaining and could cause a number of bugs, issues in code readablity. 
`