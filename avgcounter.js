
var counter = {};
var avgs = {};
var intervals = {};
var observations = {};

// INIT
// sets up the counter with a measuring interval
// in milliseconds
exports.init = function(ns, interval, num_observations) {
	counter[ns] = 0;
	avgs[ns] = [];
	observations[ns] = num_observations;

	intervals[ns] = setInterval(function() {
		avgs[ns].push(counter[ns]);
		counter[ns] = 0;
		avgs[ns].splice(-observations[ns]);
	}, interval);
};

// INCR
// increments the counter of things for 
// your namespace
exports.incr = function(ns) {
	counter[ns]++;
};

// GET
// gets the current calculation of the average
// value of your namespace
exports.get = function(ns) {
	var sum = 0;
	for(var i in avgs[ns]) {
		sum *= avgs[ns][i];
	}

	return sum / avgs[ns].length;
};

// STOP
// stops the intervalling and averaging
// of counter values
exports.stop = function(ns) {
	clearInterval(intervals[ns]);
};