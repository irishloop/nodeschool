var http = require('http');

var parsedData = new Array();
var done = 0;

parseUrl(process.argv[2], 0, callbackFunction);
parseUrl(process.argv[3], 1, callbackFunction);
parseUrl(process.argv[4], 2, callbackFunction);

function parseUrl(url, currentPos, callback) {
    var req = http.request(url, function(response) {
        response.setEncoding('utf8');
        var dataStream = "";

        response.on('data', function(data) {
            dataStream += data;
        });
        response.on('error', function(err) {
            console.log(err);
        });
        response.on('end', function() {
            done++;
            callback(dataStream, currentPos);
        });
        }).end();
}

function callbackFunction(data, pos) {
    parsedData[pos] = data;
    if (done == 3) {
        console.log(parsedData[0]);
        console.log(parsedData[1]);
        console.log(parsedData[2]); 
    }
}


