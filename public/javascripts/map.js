function initMap() {
  var myLatLng = {lat: -41.295210, lng: 174.783687};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

// Add Marker + Info Window
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Kent Terrace'
  });
  marker.addListener('click', function () {
    infowindow.open(map, marker)
  });
  var infowindow = new google.maps.InfoWindow({
    content: "23 Kent Terrace, Wellington"
  })
}
