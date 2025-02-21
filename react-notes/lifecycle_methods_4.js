`
LIFE CYCLE METHODS(CLASS COMPONENTS)

    We saw constructor(), render() inside a class component. But there are other methods available as well.
    We'll  the lifecycle(which methods comes first) of these methods now.

    There are three phases in the lifecycle:

        1. MOUNTING
            - when the component is applied to DOM for the first time
            - order of methods : constructor() -> render() -> componentDidMount()


        2. UPDATING
            - when state of the component is changed
            - order of methods : render() -> componentDidUpdate()

        3. UNMOUNTING
            - when the component is removed from DOM
            - order of methods : componentWillUnmount() [runs just before component is removed]

    Overall Lifecycle of a class component:
        <-----------Mounting-----------------------------><-----------Updating-----------------><-----Unmounting------->
        constructor() -> render() -> componentDidMount() -> render() <=> componentDidUpdate() -> componentWillUnmount()
                                                            

    -> Method : componentDidMount()
            - any work related to side effects i.e, may need to wait to complete, are done in this
            - eg. fetching data from an external api
            - anything other than this is first rendered to UI using render() in mounting phase, then the leftover part for
              which wait needs to happen(because we don't know how much time it will take to complete work) will be done by this
`   