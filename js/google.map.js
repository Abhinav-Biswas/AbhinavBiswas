//// Start Google Maps ////
function initialize() {
  var myLatlng = new google.maps.LatLng(22.768072,88.398283);
  var myOptions = {
	zoom: 12,
	center: myLatlng,
	mapTypeId: google.maps.MapTypeId.TERRAIN
  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  var marker = new google.maps.Marker({position: myLatlng}); 
  marker.setMap(map);
}

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&sensor=TRUE_OR_FALSE&callback=initialize";
  document.body.appendChild(script);
}
window.onload = loadScript;
//// End Google Maps ////