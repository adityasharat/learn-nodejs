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
    if (index < length - 1) {
        answers[questions[index].a] = line;
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


// events emited by the process

/*process.on('beforeExit', function () {
    console.log('nothing to do, going to die now');
});

process.on('exit', function (code) {
    setTimeout(function () {
        console.log('This will not run');
    }, 0);
    console.log('Exiting with code:', code);
});

process.exit(0);*/


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
console.log('This will not run.');*/