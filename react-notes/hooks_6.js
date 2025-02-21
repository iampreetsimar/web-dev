`
We used Class Components earlier to create dynamic UI because it can create states but functional component cannot. 
FUNCTIONAL COMPONENTS can also create dynamic UI with the help of HOOKS(introducted in react 16).

Using HOOKS, we can define state and lifecycle methods in functional components as well.
Due to this, functional components are used now to create react apps over class components as class components had to take 
care of so many things like 'this', constructors, creating arrow functions for event handlers, creating arrow functions
for any state change methods.

What are HOOKS?
    - are functions that let you 'hook' into React state and lifecycle features from function components. 
    - don't work inside classes.
    - React provides several hooks

For starters, we'll focus on two hooks - useState and useEffect.

1. useState
    - 'hooks into' React state
    - lets you add a state variable to a component
    - import from module 'react'
            eg. import { useState } from 'react'

    - syntax: const [stateNameVariable, stateHandlerMethod] = useState(initial value of state variable)
            eg. const [count, setCount] = useState(0)
    - initialized in functional component

    - can defined any value in state, (array, objects, string)
    - everytime state handler is executed, state's value is changed and react rerenderes UI.

2. useEffect
    - 'hooks into' lifecycle features
    - can use follownig lifecycle methods using this in functional methods :
                componentDidMount: when component has just mounted
                componentDidUpdate: when a state is changed
                componentWillUnmount: just before a component will be unnmounted
    
    - useEffect works only after render() happens!!!! (render : whatever is being returned from fn component)
    - import from module 'react'
            eg. import { useEffect } from 'react'

    - syntax : useEffect(() => { ... some work }, optional dependencies array )
            eg. useEffect(() => { console.log("useEffect ran")})

    - the first time UI is rendered, after that useEffect runs just just like componentDidMount
    - whenever a state change happens, first render() runs and then useEffect just like componentDidUpdate

    - variation 1 - when there is no optional dependency array as second argument, useEffect works like componentDidMount and 
      componentDidUpdate. any side effect work like api calling can be done now in useEffect()

    - variation 2 - when there is an empty dependency array as 2nd argument, useEffect works like only componentDidMount and
      runs exactly once after the first render

    - variation 3 - changing state in variation 1 useEffect can result in inifinite loop if state is being changed at every
      iteration. 

    - variation 4 - adding a state as in item in dependency array results in running useEffect like componentDidUpdate for that
      state only in addition to initial run like componentDidMount.

    - if the state has an object value, need to change reference by using ... operator to show that new value of state has been 
      set, so change the state.







`