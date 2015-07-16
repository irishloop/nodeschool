var http = require('http');
var map = require('through2-map');

var upper = map(function (chunk) {
    return chunk.toUpper();
});

var server = http.createServer(function(req, res) {
    
    var upperString = '';
    
    if (req.method != 'POST')
    { return res.end('gtfo'); }
    
    req.pipe(map(function (chunk) {
        chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(process.argv[2]);
