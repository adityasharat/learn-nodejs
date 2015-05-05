/*** Timers ***/

setTimeout(function () {
    console.log('this will run after 2 seconds');
}, 2000);

var handle = setTimeout(function () {
    console.log('this will not run after 5 seconds');
}, 5000);

setTimeout(function () {
    console.log('clear the timeout.');
    // this is used to clear a timeout
    clearTimeout(handle);
}, 3000);

var anotherHandle = setInterval(function () {
    console.log('2 seconds have passed.');
}, 2000);

setTimeout(function () {
    console.log('stop the set interval.');
    clearInterval(anotherHandle);
}, 10000);