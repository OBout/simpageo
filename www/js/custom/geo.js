var startPos;
var distance;
var geowatcher;
geo.hasgeo = function(){
	if (navigator.geolocation) {
  		return true;
	}
	else {
	  	db('Geolocation is not supported for this Browser/OS version yet.');
	  	return false;
	}
};

// Reused code - copyright Moveable Type Scripts - retrieved May 4, 2010.
// http://www.movable-type.co.uk/scripts/latlong.html
// Under Creative Commons License http://creativecommons.org/licenses/by/3.0/

geo.calculateDistance = function(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = (lat2-lat1) * Math.PI / 180;
  var dLon = (lon2-lon1) * Math.PI / 180;
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
          Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d;
};
geo.measureDistance = function(){
	db("distance: " + distance);
};
geo.stopMeasuring = function(){
	navigator.geolocation.clearWatch(geowatcher);
	db("navigation stopped");
};
geo.pauze = function(){
	db("navigation pauzed");
};
geo.resume = function(){
	db("navigation resumed");
};
geo.currentPosition = function(){
	db("currentPosition");
	 if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	    	db("starting to find current location");
			startPos = position;
			var startLat = startPos.coords.latitude;
			var startLon = startPos.coords.longitude;
			db("startlat " + startLat);
			db("startlon " + startLon);
	    }, function(error) {
			db("Error occurred. Error code: " + error.code);
			// error.code can be:
			//   0: unknown error
			//   1: permission denied
			//   2: position unavailable (error response from locaton provider)
			//   3: timed out
	    });

	    geowatcher = navigator.geolocation.watchPosition(function(position) {
	      var currentLat = position.coords.latitude;
	      var currentLon = position.coords.longitude;
	      db("currentLat " + currentLat);
	      db("currentLon " + currentLon);
	      distance =
	        geo.calculateDistance(startPos.coords.latitude, startPos.coords.longitude,
	                          position.coords.latitude, position.coords.longitude);
	      db("distance " + distance);
	    });
	}
};