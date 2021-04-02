function initMap() {
  const myLatLng = {lat: 44.40011, lng: -79.66634};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,

    //Map opens with this location
    center: { lat: 43.651070, lng: -79.347015 }
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    //Giving name to the main place marked
    title: "Barrie ON",
  });

  function addMarker(cordinates){
    var mark = new google.maps.Marker(
    {
      position: cordinates,
      map: map,
    });
  }

  //More markers have been added to spot the cities...
  addMarker({ lat: 23.033863, lng: 72.585022 });
  addMarker({ lat: 42.746635, lng: -75.770045 });
  addMarker({ lat: 48.864716, lng: 2.349014 });
  addMarker({ lat: 38.897957, lng: -77.036560 });
  addMarker({ lat: 34.052235, lng: -118.243683 });
}
