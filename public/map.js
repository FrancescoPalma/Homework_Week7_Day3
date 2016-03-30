var Map = function(myZoom, myLatLng) {

  this.googleMap = new google.maps.Map(document.getElementById('map'), {
    zoom: myZoom,
    center: myLatLng
  });

  this.addMarker = function(myLatLng, title) {
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: this.googleMap,
      title: title
    });
    return marker;
  };

  this.bindClick = function() {
    google.maps.event.addListener(this.googleMap, 'click', function(userClick) {
      latLngNew = {lat: userClick.latLng.lat(), lng: userClick.latLng.lng()};
      this.addMarker(latLngNew);
    }.bind(this));
  }

  this.addInfoWindow = function(latLng, title) {
    var marker = this.addMarker(latLng, title);
    marker.addListener('click', function() {
      var infoWindow = new google.maps.InfoWindow({
        content: this.title
      });
      infoWindow.open(this.map, marker);
    });
  }

}