var EventEmitter = require('events').EventEmitter;

var phone = new EventEmitter();

phone.on('incomingCall', function (contact) {
    console.log(contact + ' calling.');
});

var handle = setInterval(function () {
    phone.emit('incomingCall', 'Darth Vader');
}, 1000);

setTimeout(function () {
    clearInterval(handle);
}, 5500);