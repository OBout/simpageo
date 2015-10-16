var geo = geo || {};
var constants = {
	debug: true,
	google_map_api_url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB62DsrfmLf9hTdIr9gbnUAzNdKeDR63YA&libraries=geometry",
	google_maps_api_key: "AIzaSyB62DsrfmLf9hTdIr9gbnUAzNdKeDR63YA"
};
function db(l2p){
	var debug = constants.debug;
	if (debug === true) {
			console.log(l2p);
		} else {
			console.log("helash");
		}
};