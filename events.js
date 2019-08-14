var body = $('#body');
var div = $('#app');
var styleButton = $('#style');
var addButton = $('#addButton')
var input = $('input');

var style = 0;

function darkMode() {
    body.addClass('darkBody');
    div.addClass('darkDiv');
    input.addClass('darkElements');
    addButton.addClass('darkElements');
    styleButton.text('Light Mode');
    style = 1;
}

function lightMode() {
    body.removeClass('darkBody');
    div.removeClass('darkDiv');
    input.removeClass('darkElements');
    addButton.removeClass('darkElements');

    body.addClass('lightkBody');
    div.addClass('lightDiv');
    input.addClass('lightElements');
    addButton.addClass('lightElements');
    styleButton.text('Dark Mode');
    style = 0;
}

styleButton.click(function(){
    if (style == 0) {
        darkMode();
    } else {
        lightMode();
    }
})

