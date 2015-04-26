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