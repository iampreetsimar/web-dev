`
INTERSECTION OBSERVER API
        - provides a way to asynchronously observe changes in the intersection of a target element with an ancestor 
          element or with a top level document's viewport.
        - provided by browser
        - intersection info. is needed :
                -> lazy loading of images or other data as a page is scrolled
                -> implementing 'infinite scroll'
                -> reporting of visibility of ads in order to calculate ad revenues
                -> deciding whether or not to perform a task or animation processes based on whether or not the user
                   will see the result
                -> many more

        - allows to configure a callback that is called when either of the following happend:
                -> target element intersects either the device's viewport or a specified element. That specified element
                   is called the Root Element or the Root for the purpose of Intersection Observer API
                -> the first the observer is initially asked to watch a target element
                
        - creating an intersection observer:
                -> create by calling its constructor and passing a callback function to be run whenever a threshold value is
                   crossed in one direction or the other.
                eg.
                    const options = {
                        root: document.querySelector("#scrollArea"),    
                        rootMargin: "0px",
                        threshold: 1.0, // whenever 100% of the target is visible withing the element specified by root,
                                        // callback is invoked
                    };

                    const observer = new IntersectionObserver(callback, options);

                -> options:
                        root - The element that is used as the viewport for checking visibility of the target. 
                               Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null.

                        threshold - Either a single number or an array of numbers which indicate at what percentage of the 
                                    target's visibility the observer's callback should be executed.
                                    eg. If you only want to detect when visibility passes the 50% mark, you can use a 
                                        value of 0.5. If you want the callback to run every time visibility passes 
                                        another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. 
                                        The default is 0 (meaning as soon as even one pixel is visible, the 
                                        callback will be run). A value of 1.0 means that the threshold isn't 
                                        considered passed until every pixel is visible.

                        rootMargin - Margin around the root. A string of one to four values similar to the CSS margin 
                                     property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can only 
                                     be absolute lengths or percentages. This set of values serves to grow or shrink 
                                     each side of the root element's bounding box before computing intersections. 
                                     Negative values will shrink the bounding box of the root element and positive 
                                     values will expand it. The default value, if not specified, is "0px 0px 0px 0px".

        - eg. intersecting observer for reels. whenever a reel is not intersecting(threshold < 0.6), it stops playing.

                const callback = (entries) => { // entries are items on which observer is placed, videos
                    entries.forEach((entry)=>{
                        let ele = entry.target.childNodes[0]
                        console.log(ele)
                        ele.play().then(()=>{   .play() is async, so promise
                            if(!ele.paused && !entry.isIntersecting){   // if  videos is not paused and is not intersecting
                                ele.pause()     // pause the video
                            }
                        })
                    })
                }
                let observer = new IntersectionObserver(callback, {threshold:0.6});
                useEffect(()=>{
                    const elements = document.querySelectorAll(".videos")
                    elements.forEach((element)=>{
                        observer.observe(element)   // placing observer on all videos
                    })
                    return ()=>{
                        observer.disconnect();  // unplacing observer on alll videos
                    }
                },[posts])


                   

`