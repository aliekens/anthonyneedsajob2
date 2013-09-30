var textarea = $('#140chars')[0];
var $counter = $('#counter');
var limit = 140;

$(textarea).keydown(function(event) {
    switch (event.keyCode) {
    case 8:
        // backspace
    case 46:
        // forward delete
    case 37:
        // left arrow
    case 38:
        // up arrow
    case 39:
        // right arrow
    case 40:
        // down arrow
    case 86:
        // v (as in ctrl-v or command-v)
        break;
    default:
        if (this.value.length == limit) {
            event.preventDefault();
        }
    }
});

$(textarea).on('paste', function() {
    setTimeout(function() {
        if (textarea.value.length > limit) {
            textarea.value = textarea.value.substr(0, limit);
            displayLength();
        }
    }, 600);
});

$(textarea).keyup(displayLength);

function displayLength() {
    if (textarea.value.length > limit) {
        $counter.text("Too long!");
    } else {
        $counter.text(limit - textarea.value.length);
    }
}

displayLength();