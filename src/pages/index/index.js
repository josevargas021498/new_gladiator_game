const $ = require('jquery');
const other = require('../../lib/other');
const appRoot = $('#app');

const STATE = {
    updates: ''
};

function createGladiator(name, health, rage) {
    var gladiator = {};
    gladiator.name = name;
    gladiator.health = health;
    gladiator.rage = rage;
    return gladiator;
}

var gladiator_1 = createGladiator('Jose', 200, 30);
var gladiator_2 = createGladiator('Liza', 200, 30);

function viewButtons() {
    return [
        '<h3>' + 'Name: ' + gladiator_2.name + '</h3>',
        '<h3>' + 'Health: ' + gladiator_2.health + '</h3>',
        '<h3>' + 'Rage: ' + gladiator_2.rage + '</h3></br>',
        '<h3>' + 'Name: ' + gladiator_1.name + '</h3>',
        '<h3>' + 'Health: ' + gladiator_1.health + '</h3>',
        '<H3>' + 'Rage: ' + gladiator_1.rage + '</h3>',
        "<div><button id='kick'> Kick! </button></div>",
        "<div><button id='punch'> Punch! </button></div>",
        "<div><button id='heal'> Heal! </button></div>",
        STATE.updates
    ].join('');
}

function buttonAttHandler() {
    $('#kick').click(function() {
        gladiator_1.rage += 25;
        gladiator_2.health -= 45;
        STATE.updates =
            gladiator_2.name +
            '   --- 45 Health       //      ' +
            gladiator_1.name +
            '   +++25 Rage ';
        draw();
    });
    $('#punch').click(function() {
        gladiator_1.rage += 15;
        gladiator_2.health -= 26;
        STATE.updates =
            gladiator_2.name +
            '   ---30 Health' +
            gladiator_1.name +
            '+++ 15 Rage    ';
        draw();
    });
    $('#heal').click(function() {
        gladiator_1.health += 10;
        gladiator_1.rage -= 5;
        STATE.updates =
            gladiator_1.name +
            '    +++ 10 Health //   ' +
            gladiator_1.name +
            '  --- 5 Rage   ';
        draw();
    });
}

function draw() {
    appRoot.html(viewButtons());
    buttonAttHandler();
}
function main() {
    draw();
}

$(main);
