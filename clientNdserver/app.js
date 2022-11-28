var http = require('http');
const { type } = require('os');

var server = http.createServer(function(req, res){
    console.log('request uas made: '+req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('hello Rahat');
});


server.listen(3000, '127.0.0.1');

console.log('now listening to port 3000');