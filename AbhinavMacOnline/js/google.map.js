//// Start Google Maps ////
var myLatlng = null,
    myOptions = null,
    map = null,
    marker = null;

function initialize() {
    //    var myLatlng2 = new google.maps.LatLng(22.768072, 88.398283);
    myLatlng = new google.maps.LatLng(17.469111, 78.57688);
    myOptions = {
        zoom: 15,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    //    var myOptions2 = {
    //        zoom: 15,
    //        center: myLatlng2,
    //        mapTypeId: google.maps.MapTypeId.HYBRID
    //    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    //    var map2 = new google.maps.Map(document.getElementById("map_canvas2"), myOptions2);
    //    var marker2 = new google.maps.Marker({
    //        position: myLatlng2
    //    });
    //    marker2.setMap(map2);
    marker = new google.maps.Marker({
        position: myLatlng,
        title: "ECIL, Hyderabad",
        map: map,
        labelContent: "ECIL Hyderabad"
    });
    marker.setMap(map);
}

function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAnC82JVmuxsAcYW457I5HX7IYJjkB1o7s&sensor=TRUE_OR_FALSE&callback=initialize";
    document.body.appendChild(script);
}
window.onload = loadScript;
//// End Google Maps ////