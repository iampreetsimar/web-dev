
// Example 1
console.log("GEC", varname);
var varname = 10;
function fn() {
    console.log("fn EC", varname);
    var varname = 20;
    console.log(varname);
}
fn()


`
Call Stack
    Global Execution Context
        global: {...}
        this: {}
        Creation Phase
            varname: undefined
            fn: { function def. }
        
        Code Execution Phase
            prints : GEC undefined
            varname:10
            fn()
                EXECUTION CONTEXT - fn()
                    Creation Phase
                        global object from GEC
                        this for current fn is calculated
                        varname: undefined

                    Code Execution Phase
                        prints: fn EC undefined
                        varname: 20
                        prints : 20 as current EC has variable varname with value: 20
                EXECTION CONTEXT - fn() is removed
    Global Execution Context is removed
`

// OUTPUT
// GEC undefined
// fn EC undefined
// 20

// Note: A function invokation creates its own Execution Context. Further, first the memory creation phase happens for it and then code execution phase.


// Example 2
console.log("GEC", varname);
var varname = 10;
function fn() {
    console.log("fn EC", varname);
    var varname = 20;
    function fn2() {
        console.log("fn2 EC", varname);
    }

    fn2();
    console.log(varname);

}
fn()

`
Call Stack
    Global Execution Context
        global: {...}
        this: {}
        Creation Phase
            varname: undefined
            fn: { function def. }
        
        Code Execution Phase
            prints : GEC undefined
            varname:10
            fn()
                EXECUTION CONTEXT - fn()
                    Creation Phase
                        global object from GEC
                        this for current fn is calculated
                        varname: undefined
                        fn2: { function def. }

                    Code Execution Phase
                        prints: fn EC undefined
                        varname: 20

                        fn2()
                            EXECUTION CONTEXT - fn2()
                                Creation Phase
                                    global object from fn EC
                                    this for fn2 is calculated

                                Code Execution Phase
                                    prints : 20 gets varname's value from its just outside scope
                            EXECTION CONTEXT - fn2() is removed
                        prints : 20 as current EC has variable varname with value: 20
                EXECTION CONTEXT - fn() is removed
    Global Execution Context is removed
`

`
SCOPE - area till which a function or a variable can be found.
In example 2, if fn1 did not have variable varname, fn2 would search GEC for varname. So, the chain moves down the call stack till it founds a value for the
variable. If no value is found, an error is thrown.
`

// Example 3
console.log("GEC", varname);
var varname = 10;

function fn2() {    // defined in GEC
    console.log("fn2 EC", varname);
}

function fn() {
    console.log("fn EC", varname);
    var varname = 20;
    fn2();  // but invoked in fn EC
    console.log(varname);

}
fn()

`
LEXICAL/LITERAL SCOPE - outside area where the function or variable are defined. This scope defines which function or variable can be accessed.
In example 3, lexical scope of fn2 is the GEC and not fn EC where it is being invoked.
`

`
Call Stack
    Global Execution Context
        global: {...}
        this: {}
        Creation Phase
            varname: undefined
            fn2: { function def. }
            fn: { function def. }
        
        Code Execution Phase
            prints : GEC undefined
            varname:10
            fn()
                EXECUTION CONTEXT - fn()
                    Creation Phase
                        global object from GEC
                        this for current fn is calculated
                        varname: undefined

                    Code Execution Phase
                        prints: fn EC undefined
                        varname: 20

                        fn2() - ********* no fn2 def in fn -> search lexically outside of fn -> found fn2 def in GEC **********
                            EXECUTION CONTEXT - fn2()
                                Creation Phase
                                    global object from fn EC
                                    this for fn2 is calculated

                                Code Execution Phase
                                    prints : 10 gets varname's value from GEC. No varname in fn2 -> search in GEC(w/c is lexically outside of fn2 def.)
                            EXECTION CONTEXT - fn2() is removed
                        prints : 20 as current fn EC has variable varname with value: 20
                EXECTION CONTEXT - fn() is removed
    Global Execution Context is removed
`

`
SCOPE CHAIN - process of moving lexically outside till the functions' def or variable is found or not creates a chain.
`