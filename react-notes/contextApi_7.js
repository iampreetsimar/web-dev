`
CONTEXT API
    - provides a way to pass data through the component tree without having to pass props down manually at every level.
    - In React, data is passed top to bottom(from parent to child) via props, but if some data is required by many
      components, this becomes cumbersome to implement. 

    - Usually, assume the root component of an app gets emaill from user. This email is needed by a component which is way down
      in the component tree. In order to share this data, we'll need to pass it as prop from root to all the way down to 
      the component. This is called PROP DRILLING(which we must avoid)
      We are passing props to components that are in the path to our destination even if they don't need it just because we need
      to reach the destination comp. Here, Context API helps.
    
    - Context provides a global store where data can be stored and whichever component needs that data can directly look for
      it in this global store instead of passing it down the component tree.

    - provides a way to share these values  b/w components without having to explicitly pass a prop through every level of
      tree.
      
    - lets the parent component make some information available to any component in the tree below it. 

    - to  create this global store:
            -> create a new file for it
            -> import { createContext } from 'react'  or use React.createContext
            -> create a variable and assign the store initialized using createContext
            -> createContext(default value)
            -> export the context created
        
            -> eg.  const context = React.createContext(0);
                    export default context;

    - to pass a value to context so that any comp. in app can use this, wrap using 
      <context.Provider value={default value from createContext, can be set using state}> in App.js

    - to use this value in a component use hook 'useContext' in the comp.
            -> import the store created using createContext
            -> use useContext hook to fetch value from store
            -> const theme = useContext(context)

    - lets assume we're setting some value to context in App.js i.e, at root level and also changing its state there. 
      so everytime the value is changed, all components using this context will be re-rendered. Also,
      in React, anytime a parent is re-rendered, its child also get re-rendered.

      But what if we don't access the context in a comp. but its Parennt comp is using. Due to the parent, the child also get
      re-rendered. In order to stop this, we can use React.memo() while exporting the child component.
            -> eg. export default React.memo(Child)
            -> React.memo() optimizes the re-rendering process when used efficiently and only re-renders a component
               when there are actually state changed inside the component.


`