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
var avgcounter = require("avgcounter");

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

console.log("You may want to go to http://localhost:1234 to see some of the magic.");

```


## Docs

#### .init(namespace, interval_milliseconds, number_of_observations)

Initializes an average counter for a given namespace, that you can choose yourself. 
You can set the interval, that you want the counter to be averaged and decide how many counter datapoints will be stored and used to create the average.

#### .incr(namespace)

Increments the counter on a given namespace. The one that you initialized before!

#### .get(namespace)

Returns a floating point value representing the average metric of the counter behind a given namespace.

#### .stop(namespace)

Stops tracking of your counter at the given namespace. 


## Future features / ideas

* Redis as a datastore for counter values
* Better error handling, to keep track if a namespace has been initialized and so on


## Reference

Projects that use AvgCounter.js:

* https://informme.de - News aggregator that counts crawled articles per minute
