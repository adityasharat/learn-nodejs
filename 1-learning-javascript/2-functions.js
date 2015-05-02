/*** functions ***/

// Functions are a way of packaging functionality that you want to reuse,
// so that whenever you want the functionality you can call the function
// with the function name rather than constantly rewriting the entire code.

// If you see something that looks like a variable name,
// but has brackets — () — after it, it is probably a function.
// Functions often take arguments — bits of data they need to do their job.
// These go inside the brackets, separated by commas if there is more than one item.

// There are inbuild functions like `console.log()` that is used print outputs on the
// screen.

// You can also define your own functions
function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}

// NOTE The return statement tells the interpreter to return the result variable
//  out of the function so it is available to use. This is necessary because variables
// defined inside functions are only available inside those functions.
// This is called variable scoping. Read more about it here
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Variable_scope

// Try running the above function in the console, then try using your new function a few times, e.g.:
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

// trims ou white space from boths ends of a string
function trim(string) {
    var index,
        indexOfFirstCharacter,
        indexOfLastCharacter;

    for (index = 0; index < string.length; index++) {
        //compare with ' ' <space>
        if (string.charAt(index) !== ' ') {
            indexOfFirstCharacter = index;
            // exit from the loop when you find the first character
            // since you found the first character, no need to continue in the loop
            break;
        }
    }

    for (index = string.length - 1; index >= 0; index--) {
        //compare with ' ' <space>
        if (string.charAt(index) !== ' ') {
            indexOfLastCharacter = index;
            // exit from the loop when you find the first character
            // since you found the last character, no need to continue in the loop
            break;
        }
    }

    // if the both index were not set, that means that the string contained only
    // spaces or was an empty string
    if (indexOfFirstCharacter === undefined && indexOfLastCharacter === undefined) {
        return '';
    }

    return string.substring(indexOfFirstCharacter, indexOfLastCharacter + 1);
}