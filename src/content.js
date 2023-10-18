if (window.location.href == 'https://byui.instructure.com/') {
    window.location.href = 'https://byui.instructure.com/grades'
}

// Listening to keypress events in the entire document
document.addEventListener('keypress', function (event) {

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

// cleaning undesired course from grades page
const anchorTags = document.querySelectorAll('td.course a');
for (let anchor of anchorTags) {
    if (anchor.textContent.trim() === "Devotional - Fall 2023") {
        const parentRow = anchor.closest('tr');
        if (parentRow) {
            parentRow.remove();
            break; // Exit the loop once the row is found and removed
        }
    }
}