var EventEmitter = require('events').EventEmitter;

var phone = new EventEmitter();

phone.on('incomingCall', function (contact) {
    console.log(contact + ' calling.');
});

setInterval(function () {
    phone.emit('incomingCall', 'Darth Vader');
}, 1000);