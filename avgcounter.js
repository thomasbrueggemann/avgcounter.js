
var counter = {};
var avgs = {};
var intervals = {};
var observations = {};
var DEBUG = false;

module.exports = {

	// INIT
	// sets up the counter with a measuring interval
	// in milliseconds
	init: function(ns, interval, num_observations) {
		counter[ns] = 0;
		avgs[ns] = [];
		observations[ns] = num_observations;

		intervals[ns] = setInterval(function() {

			if(counter[ns] > 0) {

				if(avgs[ns].length >= observations[ns]) {
					avgs[ns].shift();	
				}

				avgs[ns].push(counter[ns]);
				counter[ns] = 0;
			}

			if(DEBUG) console.log("check interval");
		}, interval);
	},

	// INCR
	// increments the counter of things for 
	// your namespace	
	incr: function(ns) {
		counter[ns]++;
		if(DEBUG) if(DEBUG) console.log(counter);
	},

	// GET
	// gets the current calculation of the average
	// value of your namespace
	get: function(ns) {
		var sum = 0;
		var tmp = avgs[ns];
		for(var i in tmp) {
			sum += tmp[i];
		}

		if(DEBUG) console.log(tmp);

		if(tmp.length > 0) {
			return sum / tmp.length;
		}
		else return 0.0;
	},

	// STOP
	// stops the intervalling and averaging
	// of counter values
	stop: function(ns) {
		clearInterval(intervals[ns]);
	}
};