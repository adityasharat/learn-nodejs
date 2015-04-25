/*** Variables ***/

// Variables are containers that you can store values in.
// You start by declaring a variable with the var keyword,
// followed by any name you want to call it:
var myVariable;

// NOTE: Note: All lines in JS must end with a semi-colon,
// to indicate that this is where the line ends.
// If you don't include these, you can get unexpected results.
// You can call a variable nearly anything, but there are some name restrictions.
// see these restrictions at http://www.codelifter.com/main/tips/tip_020.shtml

// JavaScript is case sensitive — myVariable is a different variable to myvariable.
// If you are getting problems in your code, check the casing!

// After declaring a variable, you can give it a value:
myVariable = 'Bob';

// You can retrieve the value by just calling the variable by name:
myVariable;

// You can do both these operations on the same line if you wish:
var myVariable = 'Bob';

// After giving a variable a value, you can later choose to change it:
var myVariable = 'Bob';
myVariable = 'Steve';

/* data types */
// String  A string of text. To signify that the variable is a string, you should enclose it in quote marks.
var myVariable = 'Bob';

// Number  A number. Numbers don't have quotes around them.
var myVariable = 10;

// Boolean A True/False value. true/false are special keywords in JS, and don't need quotes.
var myVariable = true;

// Object   Basically, anything. Everything in JavaScript is an object, and can be stored in a variable. Keep this in mind as you learn.
var myVariable = {
    name: 'bob',
    gender: 'male'
};

// we will come to function type later

/* Comments */

/*
Everything in between is a comment.
*/

// If your comment contains no line breaks, it's often easier to put it behind two slashes like this: