geo.declare = function(){
	db("declare");
	geo.hasgeo();

	$("#geo_button_start").on("click",function(){
		db("starting geo");
		var hasgeo = geo.hasgeo();
		if (hasgeo) {
			db("checking location");
			geo.measureDistance();
		}
	});
	$("#geo_button_stop").on("click",function(){
		db("stopping geo");
		var hasgeo = geo.hasgeo();
		if (hasgeo) {
			db("stopping location");
			geo.stopMeasuring();
		}
	});
	$("#geo_button_pauze").on("click",function(){
		db("pauzing geo");
		var hasgeo = geo.hasgeo();
		if (hasgeo) {
			db("pauzing location");
			geo.pauze();
		}
	});
	$("#geo_button_resume").on("click",function(){
		db("resuming geo");
		var hasgeo = geo.hasgeo();
		if (hasgeo) {
			db("resuming location");
			geo.resume();
		}
	});
    if (navigator.notification) {
    	window.alert = function (message) {
	        navigator.notification.alert(
	            message,                // message
	            null,                   // callback
	            "Adhoc Geo",         // title
	            'OK'                    // buttonName
	        );
	    };
	} else console.log("Notification plugin not found or not supported.");
};