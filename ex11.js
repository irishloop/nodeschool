var http = require('http');
var fs = require('fs');
var bl = require('bl');

var dataRes = "";

var server = http.createServer(function(req, res) {
    var fstream = fs.createReadStream(process.argv[3]);
    fstream.pipe(bl(function(err, data) { 
        res.write(data);
        res.end();
    }));
    
});
server.listen(process.argv[2]);
