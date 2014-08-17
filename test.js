var http = require("http");
var avgcounter = require("./avgcounter");

// init the request per minute counter
avgcounter.init("req", 1000, 5);

// start a http server
http.createServer(function (req, res) {

	avgcounter.incr("req");

  	res.writeHead(200, {"Content-Type": "text/plain"});
  	res.end(avgcounter.get("req") + " req/sec");

}).listen(1234);

console.log("Test server listening on port 1234 ...");