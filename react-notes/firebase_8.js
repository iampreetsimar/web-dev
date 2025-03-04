`
FIREBASE
    - BAAS(backend as a service)
    - created by Google
    - no need to create custom backend for basic apps
    - can integrate with frontend and use it as a backend.
    - provides some features free.

    - to use firebase in your project :
            -> create a project on firebase site
            -> npm install firebase in project directory
            -> copy configuration code provided by firebase while registering the app on its site and add it to a file.
               This is needed so that frontend app knows where to make requests.

            -> import firebase : import firebase from 'firebase/compat/app'
            -> import authentication module : import 'firebase/compat/auth'
            -> import storage module : import 'firebase/compat/storage'
            -> import db module : import 'firebase/compat/firebase'

            -> in last line of configuration file, firebase.initializeApp(firebaseConfig provided from firebase site)
        
        These steps integrate firebase in our app and now we can use its features for the imported modules. Also, these are
        namespaced API, we can use a different way called modular API to use same features. Modular API is designed to
        facilitate tree-shaking(removal of unused code) that makes the app as small and fast as possible compared to the 
        namespaced API

        Namespaced API imports would get comprehensive exports that contain all the methods of the package whereas in 
        Modular API, the package exports individual functions.
`