var EventEmitter = require('events').EventEmitter;

/*var phone = new EventEmitter();

phone.on('incomingCall', function (contact) {
    console.log(contact + ' calling.');
});

var handle = setInterval(function () {
    phone.emit('incomingCall', 'Darth Vader');
}, 1000);

setTimeout(function () {
    clearInterval(handle);
}, 5500);*/

var util = require('util');

function Race(runners, distance, checkPointInterval) {
    var _this = this;
    var handle;

    function prepare() {
        runners.forEach(function (runner) {
            runner.unitDistance = runner.speed * checkPointInterval;
            runner.distanceCovered = 0;
        });
    }

    function check() {
        var result = '';
        var raceOver = true;

        runners.forEach(function (runner) {
            runner.distanceCovered += runner.unitDistance;
            if (runner.distanceCovered >= distance) {
                if (!runner.hasFinished) {
                    _this.emit('finishLineCrossed', runner);
                    runner.hasFinished = true;
                }
            } else {
                raceOver = false;
                result += runner.name + ' has covered ' + runner.distanceCovered + ' meters\n';
            }
        });

        result += '\n';

        if (raceOver) {
            clearInterval(handle);
        } else {
            _this.emit('update', result);
        }
    }

    prepare();

    this.start = function () {
        handle = setInterval(check, checkPointInterval);
    };
}

var runners = [{
    name: 'a',
    speed: 10
}, {
    name: 'b',
    speed: 12
}, {
    name: 'c',
    speed: 9
}];

util.inherits(Race, EventEmitter);

var race = new Race(runners, 60000, 1000);

race.on('update', function (update) {
    console.log(update);
});

race.on('finishLineCrossed', function (runner) {
    console.log(runner.name + ' has finished the race.');
});

race.start();