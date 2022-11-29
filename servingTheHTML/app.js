var http = require('http');
var fs = require('fs');


var myServer = http.createServer(function(req, res){
    console.log('new sever has created on: ', req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname, '/index.html', 'utf8');
    myReadStream.pipe(res);
});

myServer.listen(3000, '127.0.0.1');
console.log('server has started');