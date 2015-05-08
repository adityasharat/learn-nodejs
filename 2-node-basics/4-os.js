/*** The operating system ***/

var os = require('os');

// default temp files location
console.log(os.tmpdir());

// win32
console.log(os.platform());

// returns an array containing the 1, 5, and 15 minute load averages.
console.log(os.loadavg());

// returns the free memory in bytes
console.log(os.freemem());