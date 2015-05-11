/*** File System ***/
var fs = require('fs');
var filename = 'data/cuboid-0.json';
var options = {
    //encoding: 'utf8'
};

fs.readFile(filename, options, function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
    /*var cuboid0 = JSON.parse(data);
    console.log(cuboid0);*/
});