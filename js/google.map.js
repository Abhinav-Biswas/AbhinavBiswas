//// Start Google Maps ////
function initialize() {
    var myLatlng = new google.maps.LatLng(22.768072, 88.398283);
    var myLatlng2 = new google.maps.LatLng(17.469111, 78.57688);
    var myOptions = {
        zoom: 12,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    var myOptions2 = {
        zoom: 14,
        center: myLatlng2,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    var map2 = new google.maps.Map(document.getElementById("map_canvas2"), myOptions2);
    var marker = new google.maps.Marker({
        position: myLatlng
    });
    marker.setMap(map);
    var marker2 = new google.maps.Marker({
        position: myLatlng2,
        title: "ECIL, Hyderabad",
        map: map2,
        labelContent: "ECIL Hyderabad"
    });
    marker2.setMap(map2);
}

function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAnC82JVmuxsAcYW457I5HX7IYJjkB1o7s&sensor=TRUE_OR_FALSE&callback=initialize";
    document.body.appendChild(script);
}
window.onload = loadScript;
//// End Google Maps ////