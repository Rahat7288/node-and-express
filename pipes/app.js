const { clear } = require('console');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

myReadStream.pipe(myWriteStream);