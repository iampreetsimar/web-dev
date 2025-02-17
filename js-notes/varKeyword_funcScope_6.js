// Before ES6, there was only one way to declare variable using 'var' keyword. 
// During hoisting(during memory creation phase), variables declared using var have 'undefined' as value. 
// During code execution phase, variables declared using var can be assigned/reassign some value. 
// Even if we redeclare the same variable using var, there will be no error thrown.


// Example 1
console.log(varname);   // After CP - prints undefined
var varname;     // During CP - assigns undefined as value

varname = 10;   // After CP - assigns 10 as value
console.log(varname);   // After CP - prints 10

varname = 20;   // After CP - reassigns 20 as value
console.log(varname);   // After CP - prints 20

var varname;    // During CP - overwrites and assigns undefined as value
console.log(varname);   // After CP - prints 20

// Example 2
function fn() {
    console.log(a);
    var a = 10;
    console.log(a);

    if(a == 10) {
        var a = 20;
        console.log(a);
    }
    console.log(a);
}

fn();

`
Call Stack
    Global Execution Context
        global: {}
        this: {}
        Creation Phase:
            fn: { function def. }

        Code Execution Phase
            fn()
                Execution Context - fn()
                    global:
                    this:
                    Creation Phase:
                        a: undefined from line 26
                        a: undefined from line 31

                    Code Execution Phase
                        prints : undefined
                        a: 10
                        prints : 10
                        a: 20
                        prints : 20 from if condition
                        prints : 20
                EXECTION CONTEXT - fn() is removed
    Global Execution Context is removed
`

// NOTE : variable defined using var keyword have a function scope, i.e., they are allocated memory during creation phase only once


// Example 3
var a = 10;
console.log(a);
function fn() {
    console.log(a);
    var a = 20;
    a++;
    console.log(a);

    if(a) {
        var a = 30;
        a++;
        console.log(a);
    }
    console.log(a);
}

fn();
console.log(a);

`
Call Stack
    Global Execution Context
        global: {}
        this: {}
        Creation Phase:
            a: undefined
            fn: { function def. }

        Code Execution Phase
            a: 10
            prints : 10
            fn()
                Execution Context - fn()
                    global:
                    this:
                    Creation Phase:
                        a: undefined from line 71
                        a: undefined from line 76

                    Code Execution Phase
                        prints : undefined
                        a: 20
                        a: 21
                        prints : 21
                        a: 30 from if condition
                        a: 31
                        prints : 31
                        prints : 31 outside if condition since only one variable a is defined during hoisting and reassigned values
                EXECTION CONTEXT - fn() is removed
            prints : 10
    Global Execution Context is removed
`