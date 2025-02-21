`
React
    - is a JS library used to develop frontend
    - developed by Meta
    
Why use React?
    - very fast 
            before react, HTML,CSS,JS was converted by browser to create a DOM(document object model).
            Anytime a change happens in UI, browser creates a new DOM. This process is very expensive since for very minute changes
            everything is being processed again and again.

            React uses a algorithm(diffing algorithm) to identify changes in the code and identifies min changes required to be done to Virtual DOM
            which in turn does the changes in DOM.

            Example, Before react

                item 1          item 3 is deleted          entire DOM is created again          item 1
                item 2    -------------------------->   ---------------------------------->     item 2
                item 3                                                                          item 4
                item 4

            With React

                item 1          item 3 is deleted          react virtual dom reuses the prev DOM        item 1
                item 2    -------------------------->  ------------------------------------------->     item 2
                item 3                                    and only does the changes in it               item 4
                item 4                                      where it is required

    - easy event handling(provides shortcut)
    - minimal library
    - manages UI by states
    - uses component based approach

can be used by adding just 3 scripts(legacy) to html page
    - diffing algorithm : creates react elements
    - react DOM : used to render react elements
    - babel : compiles and converts JSX to JS

What are components?
    - the page is divided into components
    - each component is an isolated, reusable and independent piece of code.
    - 2 types : Functional and Class

    - FUNCTIONAL COMPONENTS
            * used to create static UI
            * can create dynamic UI now with use of hooks, we can define states
            
    - CLASS COMPONENTS
            * to create dynamic UI
            * uses states(are react objects which have info/properties of react components)
            * render(whatever is written is displayed on UI)
            * whenever a state changes, react knows and re-renders the UI.
            


uses JSX (javascript + xml) to write code
    - allows us to write HTML inside JS and place them in the DOM without using functions like appendChild()
      or createElement()

    - JSX code -> sends to browser(error as browser can't understand JSX)
    - JSX code -> babel converts to JS -> Browser
    - JSX code is in b/w return ( .... JSX code )

    - Rules:
            -> No variable/function declaration is allowed
            -> No loops allowed -> use map,filter
            -> No conditional statements allowed -> use ternary operator(? :)
            -> Cannot render an object -> arrays can


`



`
EXPORT/IMPORT
2 ways to export:
METHOD 1
    - export array
    - need to import it using destructuring : import { arr } from "path"
    - in one file, can be done any number of times

METHOD 2
    - export default comp
    - import comp from "path"   (same name as in export)
    - can be done only once in a file
`


