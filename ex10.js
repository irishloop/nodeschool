var net = require('net'); 
var server = net.createServer(function(socket) {
    var currentDate = new Date();
    var mm = currentDate.getMonth() + 1;
    var dd = currentDate.getDate();
    
    if (mm < 10)
        mm = "0" + mm;
    if (dd < 10)
        dd = "0" + dd;
    
    var stringDate = currentDate.getFullYear() + "-" + mm + "-" + dd + 
        " " + currentDate.getHours() + ":" + currentDate.getMinutes();
    socket.write(stringDate + "\n");
    socket.end();
});

server.listen(process.argv[2]);
