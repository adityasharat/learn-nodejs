var person = {
    name: 'John Doe',
    designation: 'SDE I',
    location: 'Bengaluru',
    currentProject: 'learn-node.js',
    'profile id': 245
};

// creatig empty objects
// var obj = new Object();
// var obj = {}; // better

// print the object
console.log(person);
console.log('\n');

// refering to properties in an object
console.log(person.name + ', ' + person.location + '\n');

// when to use [] notation to refer to properties, event with spaces
console.log(person['profile id'] + '\n');

// You can also access properties by using a string value that is stored in a variable:
var propName = 'designation';
console.log(person[propName] + '\n');

// Enumerating all properties of an object
var arryOfProperties = Object.keys(person);

// How would you print the value of all the properties in a object?

// for loop method
var index;
for (index = 0; index < arryOfProperties.length; index++) {
    console.log(person[arryOfProperties[index]]);
}

console.log('\n');

// forEach method
function printValues(propName) {
    console.log(person[propName]);
}
arryOfProperties.forEach(printValues);

// methods in objects
var car = {
    name: 'Swift',
    regNum: 'KA 3CB 2299',
    owner: 'John Doe',
    isRunning: false,
    blowHorn: function () {
        console.log('honk honk');
    },
    start: function () {
        return this.isRunning;
    },
    setNewOwner: function (owner) {
        this.owner = owner;
    }
};

car.blowHorn();