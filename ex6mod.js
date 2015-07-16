var fs = require('fs');
var path = require('path');

module.exports = function (fileDir, fileExt, callback)
{
    var fileArray = new Array();
    fs.readdir(fileDir, function(err, fileList)
    {
        if (err)
            return callback(err); 
        for (var i=0; i<fileList.length; i++)
        {
            var ext = path.extname(fileList[i]); 
            if (ext == ('.' + fileExt))
                fileArray.push(fileList[i]);        
        }
    callback(null, fileArray);
    });
}
