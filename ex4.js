var fs = require('fs');
var newlines;

fs.readFile(process.argv[2], 'utf8', function(err, fileData) {
    if (err)
        { throw err; }
    newlines = fileData.split('\n').length - 1;
    processFile();
});
	
function processFile(){
    console.log(newlines);
}
