(function() {
  'use strict';

  angular.module('finalPractice')
    .factory('videosFactory', videosFactory);
  /** @ngInject */
  function videosFactory($http, vimeoConfig) {
    function getVideosById(id){
      var config = {
        page: 1,
        perPage: 10,
        asc: 'asc'
      };
      return $http.get(vimeoConfig.API_HOST + vimeoConfig.CATEGORIES + '/' + id + '/videos', config).then(function(response){
        console.log(response);
      });
    }

    return {
      'getVideosById': getVideosById
    }
  }
});
