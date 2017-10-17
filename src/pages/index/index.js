const $ = require('jquery');
const other = require('../../lib/other');
const appRoot = $('#app');

const STATE = {
    updates: '',
    turn: 1
};

function createGladiator(name, health, rage) {
    var gladiator = {};
    gladiator.name = name;
    gladiator.health = health;
    gladiator.rage = rage;
    return gladiator;
}

function viewG1Buttons() {
    if (STATE.turn === 1) {
        return [
            '<h2>' + gladiator_1.name + ", it's your turn! </h2>",
            "<div><button id='kick' > Kick! </button></div>",
            "<div><button id='punch'> Punch! </button></div>",
            "<div><button id='conserve'> Conserve! </button></div>",
            "<div><button id='heal'> Heal! </button></div>",
            STATE.updates
        ].join('');
    } else {
        return [
            "<div><button disabled id='kick' > Kick! </button></div>",
            "<div><button disabled id='punch'> Punch! </button></div>",
            "<div><button disabled id-'conserve'> Conserve! </button></div>",
            "<div><button disabled id='heal'> Heal! </button></div>",
            STATE.updates
        ].join('');
    }
}

function viewG2Buttons() {
    if (STATE.turn === 2) {
        return [
            '<h2>' + gladiator_2.name + ", it's your turn! </h2>",
            "<div><button id='kick2'> Kick! </button></div>",
            "<div><button id='punch2'> Punch! </button></div>",
            "<div><button id='conserve2'> Conserve! </button></div>",
            "<div><button id='heal2'> Heal! </button></div>",
            STATE.updates
        ].join('');
    } else {
        return [
            "<div><button disabled id='kick2'> Kick! </button></div>",
            "<div><button disabled id='punch2'> Punch! </button></div>",
            "<div><button disabled id='conserve2'> Conserve! </button></div>",
            "<div><button disabled id='heal2'> Heal! </button></div>",
            STATE.updates
        ].join('');
    }
}

var gladiator_1 = createGladiator('Jose', 100, 30);
var gladiator_2 = createGladiator('Liza', 100, 30);

function viewGladiator1() {
    return [
        '<div class="col-lg-6">',
        '<h3>' + 'Name: ' + gladiator_1.name + '</h3>',
        '<h3>' + 'Health: ' + gladiator_1.health + '</h3>',
        '<H3>' + 'Rage: ' + gladiator_1.rage + '</h3></br>',
        viewG1Buttons(),
        '</div>'
    ].join('');
}

function viewGladiator2() {
    return [
        '<div class="col-lg-6">',
        '<h3>' + 'Name: ' + gladiator_2.name + '</h3>',
        '<h3>' + 'Health: ' + gladiator_2.health + '</h3>',
        '<h3>' + 'Rage: ' + gladiator_2.rage + '</h3></br>',
        viewG2Buttons(),
        '</div>'
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
        STATE.turn = 2;

        draw();
    });
    $('#kick2').click(function() {
        gladiator_2.rage += 25;
        gladiator_1.health -= 45;
        STATE.updates =
            gladiator_1.name +
            '   --- 45 Health       //      ' +
            gladiator_2.name +
            '   +++25 Rage ';
        STATE.turn = 1;
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
        STATE.turn = 2;
        draw();
    });
    $('#punch2').click(function() {
        gladiator_2.rage += 15;
        gladiator_1.health -= 26;
        STATE.updates =
            gladiator_1.name +
            '   ---26 Health' +
            gladiator_2.name +
            '+++ 15 Rage    ';
        STATE.turn = 1;
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
        STATE.turn = 2;
        draw();
    });
    $('#heal2').click(function() {
        gladiator_2.health += 10;
        gladiator_2.rage -= 5;
        STATE.updates =
            gladiator_2.name +
            '    +++ 10 Health //   ' +
            gladiator_2.name +
            '  --- 5 Rage   ';
        STATE.turn = 1;
        draw();
    });
}

function G1IsDead() {
    appRoot.html(
        '<button onclick="document.location.reload()">' +
            gladiator_1.name +
            ', YOU DIED! </br>Click Here To Restart! </button>'
    );
}

function G2IsDead() {
    appRoot.html(
        '<button onclick="document.location.reload()">' +
            gladiator_2.name +
            ', YOU DIED! </br>Click Here To Restart! </button>'
    );
}
function isDead() {
    if (gladiator_1.health <= 0) {
        G1IsDead();
    } else if (gladiator_2.health <= 0) {
        G2IsDead();
    }
}
function draw() {
    appRoot.html(viewGladiator1() + viewGladiator2());
    buttonAttHandler();
    isDead();
}
function main() {
    draw();
}

$(main);
