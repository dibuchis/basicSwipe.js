function addSwipeEvent(theDom, eventName, handleEvent) {
    // console.log(theDom, eventName, handleEvent);
    var eStart=0, eEnd=0;

    theDom.addEventListener('touchstart', function(e){
        switch (eventName) {
            case "swipeUp":
                eStart = e.targetTouches[0].clientY;
                break;
            case "swipeDown":
                eStart = e.targetTouches[0].clientY;
                break;
            case "swipeLeft":
                eStart = e.targetTouches[0].clientX;
                break;
            case "swipeRight":
                eStart = e.targetTouches[0].clientX;
                break;
            default:
                eStart = e.targetTouches[0].clientY;
                break;
        }
    }, { passive: true });

    theDom.addEventListener('mousedown', function(e){
        switch (eventName) {
            case "swipeUp":
                eStart = e.clientY;
                break;
            case "swipeDown":
                eStart = e.clientY;
                break;
            case "swipeLeft":
                eStart = e.clientX;
                break;
            case "swipeRight":
                eStart = e.clientX;
                break;
            default:
                eStart = e.clientY;
                break;
        }
    }, false);

    theDom.addEventListener('touchmove', function(e){
        e.preventDefault();
    }, { passive: true })

    theDom.addEventListener('mousemove', function(e){
        e.preventDefault();
    }, false)

    theDom.addEventListener('touchend', function(e){

        switch (eventName) {
            case "swipeUp":
                eEnd = e.changedTouches[0].clientY;
                break;
            case "swipeDown":
                eEnd = e.changedTouches[0].clientY;
                break;
            case "swipeLeft":
                eEnd = e.changedTouches[0].clientX;
                break;
            case "swipeRight":
                eEnd = e.changedTouches[0].clientX;
                break;
            default:
                eEnd = e.changedTouches[0].clientY;
                break;
        }

        var moveVal = eEnd-eStart;
        var moveAbsVal = Math.abs(moveVal);

        // swipeUp
        if (moveVal<0 && moveAbsVal>30 && eventName=="swipeUp") {
            // console.log("swipeUp");
            handleEvent();
        }

        // swipeDown
        if (moveVal>0 && moveAbsVal>30 && eventName=="swipeDown") {
            // console.log("swipeDown");
            handleEvent();
        }

        // swipeLeft
        if (moveVal<0 && moveAbsVal>30 && eventName=="swipeLeft") {
            // console.log("swipeLeft");
            handleEvent();
        }

        // swipeRight
        if (moveVal>0 && moveAbsVal>30 && eventName=="swipeRight") {
            // console.log("swipeRight");
            handleEvent();
        }

    }, false);

    theDom.addEventListener('mouseup', function(e){

        switch (eventName) {
            case "swipeUp":
                eEnd = e.clientY;
                break;
            case "swipeDown":
                eEnd = e.clientY;
                break;
            case "swipeLeft":
                eEnd = e.clientX;
                break;
            case "swipeRight":
                eEnd = e.clientX;
                break;
            default:
                eEnd = e.clientY;
                break;
        }

        var moveVal = eEnd-eStart;
        var moveAbsVal = Math.abs(moveVal);

        // swipeUp
        if (moveVal<0 && moveAbsVal>30 && eventName=="swipeUp") {
            // console.log("swipeUp");
            handleEvent();
        }

        // swipeDown
        if (moveVal>0 && moveAbsVal>30 && eventName=="swipeDown") {
            // console.log("swipeDown");
            handleEvent();
        }

        // swipeLeft
        if (moveVal<0 && moveAbsVal>30 && eventName=="swipeLeft") {
            // console.log("swipeLeft");
            handleEvent();
        }

        // swipeRight
        if (moveVal>0 && moveAbsVal>30 && eventName=="swipeRight") {
            // console.log("swipeRight");
            handleEvent();
        }

    }, false);
}