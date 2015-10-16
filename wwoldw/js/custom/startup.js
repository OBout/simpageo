geo.startapp = function(){

	db("app starting");

	geo.declare();
	//SET UP GOOGLE MAPS

	//return;
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'http://maps.googleapis.com/maps/api/js?v=3.exp' +
	  '&key='+constants.google_maps_api_key+'&signed_in=false&callback=geo.currentPosition';
	db("key: " + script.src);
	document.body.appendChild(script);

	db("done adding google maps script");
	if (geo.hasgeo()) {
	    navigator.geolocation.getCurrentPosition(function(position) {
			db("getting current position");
			startPos = position;
			var startLat = startPos.coords.latitude;
			var startLon = startPos.coords.longitude;
			db("startlat " + startLat);
			db("startlon " + startLon);
	  	});
	  }

	// if (cordova.plugins.Keyboard)
 //     cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
};