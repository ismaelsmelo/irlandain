<!DOCTYPE html>
<html>

  <head>
    <style type="text/css">
      html, body { height: 100%; margin: 0; padding: 0; }
      #map { height: 100%; }
    </style>
  </head>

  <body>
    <div id="map"></div>
    <script type="text/javascript">
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 53.335474, lng: -6.280748},
          zoom: 8
        });
      }
    </script>
    <script async defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2W3q_XvHB6M-hamGZ9S9FiasfBrOyxSM&callback=initMap">
    </script>
  </body>
</html>
