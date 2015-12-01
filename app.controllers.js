(function () {

  angular
    .module('googleMapFavorite')
    .controller('MainController', function($scope, $log) {
      $scope.map = {center: {latitude: 32.7833, longitude: -79.9333}, zoom: 13};
      //This centers the map to Charleston by default
      $scope.options = {scrollwheel: false};
      var events = {
          places_changed: function (searchBox) {
            var places = searchBox.getPlaces();

            if (places.length === 0) {
              return;
            }

//       .controller('MainController', function($scope, $log) {
//
//         function initAutocomplete() {
//         var map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 32.7833, lng: -79.9333},
//           zoom: 13,
//           mapTypeId: google.maps.MapTypeId.ROADMAP
//         });
//
//         // Create the search box and link it to the UI element.
//         var input = document.getElementById('pac-input');
//         var searchBox = new google.maps.places.SearchBox(input);
//         map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
//
//         // Bias the SearchBox results towards current map's viewport.
//         map.addListener('bounds_changed', function() {
//           searchBox.setBounds(map.getBounds());
//         });
//
//         var markers = [];
//         // Listen for the event fired when the user selects a prediction and retrieve
//         // more details for that place.
//         searchBox.addListener('places_changed', function() {
//           var places = searchBox.getPlaces();
//
//           if (places.length === 0) {
//             return;
//           }
//
//
//   //  Clear out the old markers.
//       markers.forEach(function(marker) {
//       marker.setMap(null);
//       });
//
//       markers = [];
//
//       // For each place, get the icon, name and location.
//       var bounds = new google.maps.LatLngBounds();
//       places.forEach(function(place) {
//        var icon = {
//        url: place.icon,
//        size: new google.maps.Size(71, 71),
//        origin: new google.maps.Point(0, 0),
//        anchor: new google.maps.Point(17, 34),
//        scaledSize: new google.maps.Size(25, 25)
//      };
//      // Create a marker for each place.
//      markers.push(new google.maps.Marker({
//        map: map,
//        icon: icon,
//        title: place.name,
//        position: place.geometry.location
//      }));
//
//      if (place.geometry.viewport) {
//        // Only geocodes have viewport.
//        bounds.union(place.geometry.viewport);
//      } else {
//        bounds.extend(place.geometry.location);
//      }
//     });
//     map.fitBounds(bounds);
// });

          }
        };
      $scope.searchbox = { template:'searchbox.tpl.html', events:events};
    })

    .controller('gMapsController', function ($scope, GoogleMapService, FavoriteService){

      GoogleMapService.getLists().success(function (googleMapFavorite) {
        console.log(googleMapFavorite);
        $scope.googleMapExamples = googleMapFavorite;
        // $scope.getCountNumber = $scope.getCount();
        $scope.numberOfItems = $scope.getNumber();
      });
        $scope.addList = function (newList) {
          // console.log(newList);
          GoogleMapService.createList(newList);
        };
        $scope.addFavorite = function (newFavorite) {
          console.log(newFavorite);
          FavoriteService.createFavorite(newFavorite);
        };

      })

      .controller('mapFavoriteController', function ($scope, FavoriteService, GoogleMapService){

        FavoriteService.getFavorite().success(function (favoriteList) {
          console.log(favoriteList);
          console.log(favoriteList.length);

          $scope.xmasListCart = favoriteList;
          $scope.numberOfItems = $scope.getNumberInCart();
        });
          $scope.deleteMe = function (idx) {
            console.log("Im being deleted!");
            console.log(idx);
            FavoriteService.deleteFavorite(idx);
        };

        });




})();
