var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

myReadStream.on('data' , function(chunk){
    console.log('new chunk recived:  ');
    // console.log(chunk);
    myWriteStream.write(chunk);
});