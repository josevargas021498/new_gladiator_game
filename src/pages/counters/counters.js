console.log('Hello Wordl!');
const $ = require('jquery');
const appRoot = $('#app');

const STATE = {
    count: 0
};

function viewCounter() {
    return [
        "<div><button id='up'> + </button></div>",
        STATE.count,
        "<div><button id='down'> - </button></div>"
    ].join('');
}

function draw() {
    appRoot.html(viewCounter());
    attachHandler();
}

function attachHandler() {
    $('#up').click(function() {
        STATE.count += 1;
        draw();
    });
    $('#down').click(function() {
        STATE.count -= 1;
        draw();
    });
}

function main() {
    draw();
}

$(main);
