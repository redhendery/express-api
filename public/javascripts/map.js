var map;

function initMap() {
  // var LatLng = {lat: -41.295210, lng: 174.783687};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: new google.maps.LatLng(-41.2865, 174.7762),
  });

  // Add Marker + Info Window
  var marker = new google.maps.Marker({
    position: LatLng,
    map: map,
    title: 'Kent Terrace'
  });
  marker.addListener('click', function () {
    infowindow.open(map, marker)
  });
  var infowindow = new google.maps.InfoWindow({
    content: "23 Kent Terrace, Wellington"
  })

  var script = document.createElement('script');
  script.src = '/data/data.JSON';
  document.getElementsByTagName('head')[0].appendChild(script);

  window.eqfeed_callback = function(results) {
    for (var i = 0; i < results.features.length; i++) {
      var coords = results.features[i].geometry.coordinates;
      var latLng = new google.maps.LatLng(coords[1],coords[0]);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    }
  }
}
