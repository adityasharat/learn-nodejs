/*** File System ***/
var fs = require('fs');
var filename = 'data/cuboid-0.json';
var options = {
    encoding: 'utf8'
};

fs.readFile(filename, options, function (err, data) {
    var cuboid0;
    var newCuboid0;

    if (err) {
        throw err;
    }

    console.log(data);
    cuboid0 = JSON.parse(data);
    console.log(cuboid0);

    cuboid0.length *= 2;
    cuboid0.width *= 2;
    cuboid0.height *= 2;

    newCuboid0 = JSON.stringify(cuboid0);

    fs.writeFile(filename, newCuboid0, function (err) {
        if (err) {
            throw err;
        }
        console.log('File updated!');
    });
});

fs.watchFile(filename, function (curr, prev) {
    console.log('the current mtime is: ' + curr.mtime);
    console.log('the previous mtime was: ' + prev.mtime);
});