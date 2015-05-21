geo.declare = function(){
	db("declare");
	$("geo_button_start").on("tap",function(){
		var hasgeo = geo.hasgeo();
		if (hasgeo) {
			db("checking location");
			geo.currentPosition();
		}
	});
	$("geo_button_stop").on("tap",function(){
		var hasgeo = geo.hasgeo();
		if (hasgeo) {
			db("stopping location");
			geo.stopMeasuring();
		}
	});
};