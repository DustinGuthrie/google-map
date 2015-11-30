(function () {
  "use strict";

  angular
    .module('googleMapFavorite',[
      'ngRoute',
      'uiGmapgoogle-maps'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/mapsLists/home.html',
          controller: 'MainController'
        })
        .when('/list', {
          templateUrl: 'views/mapsLists/searchlist.html',
          controller: 'gMapsController'
        })
        .when('/favorite', {
          templateUrl: 'views/mapsLists/favorites.html',
          controller: 'mapFavoriteController'
        })
        .when('/404', {
          templateUrl: 'views/404.html'
        })
        .otherwise({ redirectTo: '/404'});

    })

    .config(function (uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
         key: 'AIzaSyB0FoHMlrxoAq_5wn6bd-GnawFaaggaq7E',
         v: '3.20',
         libraries: 'places' // Required for SearchBox.
    });

  });




})();
