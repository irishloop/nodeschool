var fs = require('fs');
var myString = fs.readFileSync(process.argv[2]).toString();
var stringArray = myString.split('\n');
length = stringArray.length - 1;
console.log(length);
