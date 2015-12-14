$(document).ready(function () {
   
    
  
    /*--- GOOGLE MAP for lisbon place */
    
   var map= new GMaps({
  div: '.map',
  lat: -12.043333,
  lng: -77.028333
});
    
    map.addMarker({
        lat: 38.7436266,
        lng: -9.1602037,
        title: 'Lisbon',
        infoWindow: {
       content: '<p>our Lisbon HQ</p>'
          }
});
    
});
