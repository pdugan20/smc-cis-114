// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: maps.js
// Chapter: Final 
// Assignment: Final
// Date: 05.23.13

var side_bar_html = ""; 
var gmarkers = []; 
var map = null;


function initialize() {
  // create the map
  var myOptions = {
    zoom: 12,
    center: new google.maps.LatLng(37.872625,-122.278080),
    mapTypeControl: true,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("map_canvas"),
                                myOptions);
 
  google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
        });

  // Add markers to the map
  // Set up three markers with info windows 
  // add the points    
  var point = new google.maps.LatLng(37.869303,-122.314992);
  var marker = createMarker(point,"César Chávez Park","César Chávez Park<br>This is a damn fine park.")
 
  var point = new google.maps.LatLng(37.887725,-122.302480);
  var marker = createMarker(point,"Ocean View Park","Ocean View Park<br>This park is just OK.")
 
  var point = new google.maps.LatLng(37.872625,-122.278080);
  var marker = createMarker(point,"Ohlone Park","Ohlone Park<br>This park basically sucks.")
  
  var point = new google.maps.LatLng(37.866297,-122.257966);
  var marker = createMarker(point,"Peoples Park","Peoples Park<br>This park is full of vagrants and hippies.")
  
  var point = new google.maps.LatLng(37.855626,-122.283380);
  var marker = createMarker(point,"San Pablo Park","San Pablo Park<br>This park is actually pretty legit too.")

  // put the assembled side_bar_html contents into the side_bar div
  document.getElementById("side_bar").innerHTML = side_bar_html;
}
 
var infowindow = new google.maps.InfoWindow(
  { 
    size: new google.maps.Size(150,50)
  });
    
// This function picks up the click and opens the corresponding info window
function myclick(i) {
  google.maps.event.trigger(gmarkers[i], "click");
}

// A function to create the marker and set up the event window function 
function createMarker(latlng, name, html) {
    var contentString = html;
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        zIndex: Math.round(latlng.lat()*-100000)<<5
        });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(contentString); 
        infowindow.open(map,marker);
        });
    // save the info we need to use later for the side_bar
    gmarkers.push(marker);
    // add a line to the side_bar html
    side_bar_html += '<a href="javascript:myclick(' + (gmarkers.length-1) + ')">' + name + '<\/a><br>';
}