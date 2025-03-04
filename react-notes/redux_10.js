`
REDUX
    - state management library and works like Context API

Why do we need it?
    - assume we have multiple components in our app and we need same data in several comps. One way is to pass data as props
      which results in prop drilling.
    - other is create a global store where this is data is available and whichever component needs this data, can access it
      from this global store.

Reducer
    - a normal component
    - defines initial state (eg. we have a state 'bat', we create a BatReducer for this state 'bat' . 
      This reducer also defines state(gives initial value) for 'bat')
    - also changes state based on the action type in switch case

    - syntax:
        const initialState = {
            bat: 20
        }

        const BatReducer = (state = initialState) => {
            return state
        }

Store
    - import { createStore } from 'redux'
    - takes a reducer(which defines a state) and creates a global store for it
    - syntax:
        const store = createStore(BatReducer)

Component
    - uses the state value from store with the help of mapStateToProps


Action
    - normal js object
    - two things inside : { type: 'ACTION_TYPE'  , optional payload: any data sent from component}

Dispatch
    - delivers action object to the Reducer

MapStateToProps
    - fetches data from state
    - needs state as an object provided by connect()
    - returns object with whatever data you want and sends that as props to component

MapDispatchToProps
    - returns a function which on being invoked in the component dispatches an action
    - need dispatch as an object provided by connect()

UNIDIRECTIONAL FLOW:
    Reducer(defines initial state) --> store(create global store) --> (mapStateToProps - provides value from state, mapDispatchToProps - changes values in state)
                                                                                                            |
                                                                                                            |
                                                                                                            |
                                                                                                            |(provided by connect() in component)
                                                                                                            |
                                                                                                            |
reaches reducer and changes value for that state accor. to the action<--dispatches action(an object)<-----component
`