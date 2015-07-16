var argsLength = process.argv.length;
var total = 0;

for (var i = 0; i < argsLength - 2; i++)
{
	total += +process.argv[i+2];	
}

console.log(total);
