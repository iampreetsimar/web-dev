`
ROUTING IN REACT
        - can be done using module: react-router-dom
        - provided by module
            1. BrowserRouter
                * components wrapped by this get functionality of routing
                * eg. <BrowserRouter>....component </BrowserRouter>
                * can add this in App.js to wrap all components, thus, enabling routing in all
            
            2. Route
                * specifies the exact route for a component
                * eg. <Route path='/' component={componentName} />
                * instead of placing component, we place this in App.js
            
            - on specifying paths in <Route>, /some_path will also render / path + /some_path in a single page. Since / 
              is included for all paths, / path page will render in combination of /some_path

            3. Switch(deprecated in react-router-dom 6)
                * to avoid above issue, we use <Switch>. 
                * wrap this tag around all Routes
                * this helps in combining paths, so as long as a match is found for a path, the first match will be the path
                * but if we want to go to /some_path and we have / path as well, we route to / path
                * we can move / path route to bottom so that whenever /some_path is needed, it will be found early

            4. Exact
                * but if we don't want to rearrange the paths and keep / path on top, we can add 'exact' keyword
                  so that / path is only routet when only / is the path and not /some_path

            5. Link
                * routing through components to render another component can be done using this.
                * similar to using <a> tag but using <Link> does not cause page refresh or lose state data.
                * eg. <Link to='/'> ..... </Link>
        
        NOTE : - For react-router-dom v6, we can use <Routes></Routes> instead of <Switch></Switch>.
               - In Route, component has been replaced by element and its value is not the component name but
                 component tag
                 Eg. <Route path='' element = { <component /> } />


        - To render multiple components for a singlee path, we can wrap the components in the element attribute of
          <Route> tag
          eg. <Route path='/' exact element={ 
                <>
                    {/* to add multiple components in a route */}
                    <Banner />  
                    <Movies />
                </> 
              } />


`
