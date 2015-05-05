/*** Events and timers ***/

// events emited by the process

/*process.once('beforeExit', function () {
    console.log('nothing to do, going to die now.');
});*/

process.on('exit', function (code) {
    setTimeout(function () {
        console.log('This will not run!');
    }, 0);
    console.log('Exiting with code:', code);
});


// better to use domains
// https://nodejs.org/docs/latest/api/domain.html
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});

//setTimeout(function() {
//  console.log('This will still run.');
//}, 500);

// Intentionally cause an exception, but don't catch it.
//noSuchFunction();
//console.log('This will not run.');


/* Reading lines from the console. */
var readline = require('readline');
var answers = {};
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var questions = {
    '0': {
        q: 'What is your name?',
        a: 'name'
    },
    '1': {
        q: 'Where are you currently?',
        a: 'origin'
    },
    '2': {
        q: 'Where do you wish to go?',
        a: 'destination'
    },
    '3': {
        q: 'How would you want to travel?',
        a: 'mode'
    }
};
var index = 0;
var length = Object.keys(questions).length;

console.log(questions[index].q);

// the line event is emitted when a new line character is read
// in the input stream
rl.on('line', function (line) {
    answers[questions[index].a] = line;
    if (index < length - 1) {
        index++;
        console.log(questions[index].q);
    } else {
        rl.close();
    }
});

// the close evnt is emitted when the readline interface is closed.
rl.on('close', function () {
    console.log(answers);
});

// process.exit(0);