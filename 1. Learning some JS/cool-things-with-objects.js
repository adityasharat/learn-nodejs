var person = {
    name: 'John Doe',
    designation: 'SDE I',
    location: 'Bengaluru',
    currentProject: 'learn-node.js',
    'profile id': 245
};

// print the object
console.log(person);
console.log('\n');

// refering to properties in an object
console.log(person.name + ', ' + person.location + '\n');

// when to use [] notation to refer to properties
console.log(person['profile id'] + '\n');
var propName = 'designation';
console.log(person[propName] + '\n');