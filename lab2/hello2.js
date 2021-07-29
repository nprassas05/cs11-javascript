var fs = require("fs");
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var buffer = fs.readFileSync("greetings.txt");
var data = buffer.toString();

var greetings = data.split("\n");
if (greetings.slice(-1)[0] == "") {
	greetings.pop();
}

rl.question("What is your name? ", function(data) {
	var idx = Math.floor(Math.random() * greetings.length);
	console.log(greetings[idx] + ", " +  data);
	rl.close();
});
