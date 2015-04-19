// Object

// creatig empty objects
// var obj = new Object();
// var obj = {}; // better

var lineBreak = (function () {
    var char = '-';
    var length = 70;
    var lineBreak = '';
    var i;
    for (i = length - 1; i >= 0; i--) {
        lineBreak += char;
    }
    return lineBreak + '\n';
}());

var person = {
    name: 'John Doe',
    designation: 'SDE I',
    location: 'Bengaluru',
    currentProject: 'learn-node.js',
    'profile id': 245
};

// parse time
function add(x, y) {
    return x + y;
}

// run time
var subtract = function (x, y) {
    return x - y;
};

// print the object
console.log(person);

/* --------------------------------------------------------------------------------- */
console.log(lineBreak);

// refering to properties in an object
console.log(person.name + ', ' + person.location + '\n');

// when to use [] notation to refer to properties, event with spaces
console.log(person['profile id'] + '\n');

// You can also access properties by using a string value that is stored in a variable:
var propName = 'designation';
console.log(person[propName] + '\n');

// Enumerating all properties of an object
var arrayOfProperties = Object.keys(person);

// How would you print the value of all the properties in a object?

// for loop method
var index;
for (index = 0; index < arrayOfProperties.length; index++) {
    console.log(person[arrayOfProperties[index]]);
}

console.log('\n');

// forEach method
function printValues(propName) {
    console.log(person[propName]);
}
arrayOfProperties.forEach(printValues);

// do not use the for..in loop, explained later

/* --------------------------------------------------------------------------------- */
console.log(lineBreak);

// methods in objects
var car = {
    name: 'Swift',
    regNum: 'KA 3CB 2299',
    owner: 'John Doe',
    isRunning: true,
    blowHorn: function () {
        console.log('honk honk');
    },
    isCarRunning: function () {
        return this.isRunning;
    },
    setNewOwner: function (owner) {
        this.owner = owner;
    }
};

car.blowHorn();

// try the other methods

// You can add and delete properties at runtime from objects
car.driver = 'Jane Doe';
delete car.driver;

// you can even add methods at runtime
car.stop = function () {
    this.isRunning = false;
};

// this refers to the object itself

/* --------------------------------------------------------------------------------- */
console.log(lineBreak);

// ideally all cars will have these methods
// using inheritance

var car = {
    blowHorn: function () {
        console.log(this.hornSound);
    },
    isCarRunning: function () {
        return this.isRunning;
    },
    setNewOwner: function (owner) {
        this.owner = owner;
    }
};


var swiftCar = Object.create(car);

swiftCar.name = 'swift';
swiftCar.owner = 'someone';
swiftCar.hornSound = 'no sound';

swiftCar.blowHorn();

/* --------------------------------------------------------------------------------- */
console.log(lineBreak);

// inheritance

// there are no classes in JS you can use contructor function to create objects
function Car(name, owner, regNum, hornSound) {
    this.name = name;
    this.regNum = regNum;
    this.owner = owner;
    this.hornSound = hornSound;
}

// for method we can use the prototype
Car.prototype.blowHorn = function blowHorn() {
    console.log(this.hornSound);
};

Car.prototype.blowHorn.isCarRunning = function isCarRunning() {
    return this.isRunning;
};
Car.prototype.blowHorn.setNewOwner = function setNewOwner(owner) {
    this.owner = owner;
};

var newCar = new Car('new car', 'someone else', 'KA 9C 2331', 'honk honk honk');

console.log(newCar.name);
newCar.blowHorn();