var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('dau xanh nha m!');
    
}).listen(process.env.PORT || 8080);