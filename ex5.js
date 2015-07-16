var fs = require('fs');
var path = require('path');
var files;
var filteredFiles;

function readDir(callback)
{
    fs.readdir(process.argv[2], function(err, fileList) {
        if (err)
            { throw err; }
        for (var i=0; i<fileList.length; i++){
            var ext = path.extname(fileList[i]); 
            if (ext == ('.' + process.argv[3]))
                console.log(fileList[i]);
        }
    });
    callback();
}
function processFile()
{

}

readDir(processFile);
