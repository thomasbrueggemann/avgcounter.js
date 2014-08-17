AvgCounter.js
=============

Counts things and averages them per whatever time unit you like.

## Installation

```javascript
npm install avgcounter
```

## Usage

Here is a fun little example. A request per second counter:

```javascript
var http = require("http");
var avgcounter = require("./avgcounter");

// init the request per second counter and keep 5 observations
avgcounter.init("req", 1000, 5);

// start a http server
http.createServer(function (req, res) {

	  console.log("Request: " + req.url);

    // increment the request counter
    avgcounter.incr("req");

  	res.writeHead(200, {"Content-Type": "text/plain"});
  	
  	// return the average number of requests, that have been observed
  	res.end(avgcounter.get("req") + " req/sec");

}).listen(1234);

console.log("Test server listening on port 1234 ...");

```
