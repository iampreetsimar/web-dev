`
To improve the affects of promise chaining, async await was introduced. It offers a simpler way of using promises and 
makes the code more readable.

Async await - does not wait for the task to be completed
            - is async in nature
            - does not block thread
            - whenever task is completed, it executes itself
            - try block in async function does the work of .then() of a promise
            - catch block in async function does the work .catch() of a promise
            - need to add 'await' in front of funtion which returns a promise
            
`

// Example - convert coffee request done in promise.js to use async await

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

// function should be async
async function serveOrder() {
    try {   // fullfilled promise result in try block
        const orderReceived = await placeOrder('coffee');   
        //console.log(orderReceived);

        const processOrder = await processOrder(orderReceived);
        //console.log(processOrder);
    } catch(err) {      // to catch any rejected promise
        console.log("error: ", err);
    }
}

serveOrder();