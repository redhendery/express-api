var map;

function initialize() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: new google.maps.LatLng(-41.288671, 174.777638)
  });

  var script = document.createElement('script');
  script.src = '/data/data.JSON';
  document.getElementsByTagName('head')[0].appendChild(script);
}

// Loop through the results array and place a marker for each set of coordinates.
window.kitchen_callback = function(results) {
  for (var i = 0; i < results.features.length; i++) {
    var coords = results.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1],coords[0]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}
