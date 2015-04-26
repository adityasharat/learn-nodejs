console.log('hello world');

// https://nodejs.org/docs/latest/api/process.html#process_process_argv
var argv = {};

// The arguments are stored in process.argv
process.argv.forEach(function (val, index) {
    var keyValue;
    if (index < 2) {
        return;
    }
    keyValue = val.split(':');
    argv[keyValue[0]] = keyValue[1];
});

console.log(argv);

var readline = require('readline');
var answers = {};

function getReadlineInterface() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

function question(question, callback) {
    var rl = getReadlineInterface().question("What is your name?", function (answer) {
        answers.name = answer;
        rl.close();
    });
}



rl.on('close', function () {
    getReadlineInterface().question("Where are you currently?", function (answer) {
        answers.origin = answer;
        rl.close();
    });
});

getReadlineInterface().question("Where do you wish to go?", function (answer) {
    answers.destination = answer;
    this.close();
});

getReadlineInterface().question("How would you want to travel?", function (answer) {
    answers.mode = answer;
    this.close();
});

/*

process.on('beforeExit', function () {
    console.log('nothing to do, going to die now');
});

process.on('exit', function (code) {
    setTimeout(function () {
        console.log('This will not run');
    }, 0);
    console.log('Exiting with code:', code);
});

process.exit(0);

*/

/*
// better to use domains
// https://nodejs.org/docs/latest/api/domain.html
process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});

setTimeout(function() {
  console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
noSuchFunction();
console.log('This will not run.');

*/