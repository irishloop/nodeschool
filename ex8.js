var http = require('http');

var dataStream = "";

var req = http.request(process.argv[2], function(response) {
    response.setEncoding('utf8');
    
    response.on('data', function(data) {
        dataStream += data;
    });
    response.on('error', function(err) {
        console.log(err);
    });
    response.on('end', function() {
        console.log(dataStream.length);
        console.log(dataStream);
    });
}).end();
