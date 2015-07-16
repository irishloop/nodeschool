var mymodule = require('./ex6mod.js');

function callbackFunction(err, data)
{
    if (err)
    {
        throw(err);
    }
    for (var i = 0; i < data.length; i++)
    {
        console.log(data[i]);
    }
}

mymodule(process.argv[2], process.argv[3], callbackFunction);
