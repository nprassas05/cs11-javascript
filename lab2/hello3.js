var fs = require("fs");
var readline = require("readline");
var http = require("http");
var url = require("url");

const PORT = 8080;

var greetings = new Array();

function getRandomGreeting() {
	var idx = Math.floor(Math.random() * greetings.length);
	return greetings[idx];
}

fs.readFile("greetings.txt", function(err, body) {
  if (err === null) {
     greetings = body.toString().split("\n");
     if (greetings.slice(-1)[0] == "") {
     	greetings.pop();
     }

     var server = http.createServer((req, res) => {
		 res.writeHead(200, { 'Content-Type': 'text/plain' });
		 var query = url.parse(req.url, true).query
		 var name = query.name;
		 console.log(name);
		 var msg = getRandomGreeting();
		 if (name) {
		 	res.end(msg + ", " + name);
		 } else {
		 	res.end(msg);
		 }
	 });

	 server.listen(PORT, error => {
		if (error) {
			return console.error(error)
		}
		console.log(`Server listening on port ${PORT}`)
	 });
  } else {
     console.log(err);
     process.exit(1);
  }
});




