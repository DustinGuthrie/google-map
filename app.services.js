
(function () {
  "use strict";
  angular
    .module('googleMapFavorite')
    .factory('GoogleMapService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/googleMapExamples';

      var addList = function (newList) {
        $http.post(url, newList).then(function (res) {
          // console.log(res);
        });
      };
      var getLists = function () {
        return $http.get(url);
      };
      // var deleteItem = function (idx) {
      //   return $http.delete(url + '/' + idx);
      // };
      return {
        createList: addList,
        getLists: getLists,
        // deleteItem: deleteItem
      };
    })

    .factory('FavoriteService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/mapFavorites';

      var addFavorite = function (newCart) {
        $http.post(url, newCart).then(function (res) {
          console.log(res);
        });
      };
      var getFavorite = function () {
        return $http.get(url);
      };
      var deleteFavorite = function (idx) {
        return $http.delete(url + '/' + idx);
      };

      return {
        createFavorite: addFavorite,
        getFavorite: getFavorite,
        deleteFavorite: deleteFavorite
      };

  });



})();
