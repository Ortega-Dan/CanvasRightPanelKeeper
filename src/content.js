

// Listening to keypress events in the entire document
$("html").keypress(function (event) {

    // Running functionality con Ctrl + i or Ctrl + k (case insensitive)
    if (event.ctrlKey === true && event.code === "KeyI") {

        console.log('CANVAS')
        document.getElementById('main').style.width = '68vw'
        var rightWrap = document.getElementById('right-side-wrapper')
        rightWrap.style.position = 'fixed'
        rightWrap.style.right = '10px'
        rightWrap.style.top = '30px'

    }

})