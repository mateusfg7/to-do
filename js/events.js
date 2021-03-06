const body = $('#body');
const div = $('#app');
const styleButton = $('#style');
const addButton = $('#addButton')
const input = $('input');

let style = JSON.parse(localStorage.getItem('style_mode')) || 0;

function saveStyleToStorage() {
    localStorage.setItem('style_mode', JSON.stringify(style));
}

function darkMode() {
    body.addClass('darkBody');
    div.addClass('darkDiv');
    input.addClass('darkElements');
    addButton.addClass('darkElements');
    
    styleButton.text('Light Mode');
    
    style = 1;
    saveStyleToStorage()
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
    saveStyleToStorage()
}


if (style == 0) {
    lightMode();
} 
else if (style == 1) {
    darkMode();
}

styleButton.click(() => {
    if (style == 0) {
        darkMode();
    }
    else {
        lightMode();
    }
})