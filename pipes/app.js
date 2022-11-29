var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function(req, res){
    console.log('A server is created on: ', req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    // var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

    myReadStream.pipe(res);
    // res.end('hello ninja');
});

myServer.listen(3000, '127.0.0.1');
console.log('new server has created: ');

