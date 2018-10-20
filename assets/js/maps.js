 function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 50.6796142,
            lng: 2.8682719
        }
    });
     // Create an array of alphabetical characters used to label the markers.
        
    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
    var locations = [{
        lat: 53.7522617,
        lng: -3.0475054
    }, {
        lat: 50.8250392,
        lng: -4.5371625
    }];
   
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
      // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
     });
}