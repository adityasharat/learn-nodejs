/*** Operator ***/

// add/concatenation    Used to add two numbers together, or glue two strings together.
6 + 9;
"Hello " + "world!";

// subtract, multiple, divide  These do what you'd expect them to do in basic math.
2 - 3;
8 * 2; // multiply in JS is an asterisk
9 / 3; // divide is forwad slash
11 % 5 // modulus, returns the remainder: 1 in this case

// assignment operator You've seen this already: it assigns a value to a variable.
var myVariable = 'Bob';

// Identity Operator    Does a test to see if two values are equal to one another
// and returns a true/false (boolean) result.

// Here we check if 4 EQUALS 4, which is true
var myVariable = 4;
myVariable === 4; // true

// Here we check if 3 EQUALS 4, which is false
var myVariable = 3;
myVariable === 4; // falses

// Here we check if 3 NOT equals 3 which is false
var myVariable = 3;
myVariable !== 3;
false

/*** Conditionals ***/

// Conditionals are code structures that allow you to test whether an expression returns true or not,
// and then run different code depending on the result.
// The most common form of conditional is called if ... else.
// example:

var iceCream = 'chocolate';
var str;
if (iceCream === 'chocolate') {
    str = 'Yay, I love chocolate ice cream!';
} else {
    str = 'Awwww, but chocolate is my favorite...';
}