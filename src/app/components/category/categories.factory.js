/**
 * Created by CaroP on 6/8/16.
 */
(function() {
  'use strict';

  angular.module('finalPractice')
  .factory('categoriesFactory', categoriesFactory);
  /** @ngInject */
  function categoriesFactory($http, vimeoConfig) {

    function getCategory(){
      return $http.get(vimeoConfig.API_HOST + vimeoConfig.CATEGORIES).then(function(response){
        return response.data;
      }, function(error){
        return error;
        //console.log(error);
      });
    }

    function resolveCategoriesId(categories){
      if(categories){
        return categories.map(function(category){
          category.id =  category.uri.split('/').pop();
          return category;
        });
      }else {
        return categories;
      }
    }

    function getVideosById(id){
      var config = {
        page: 1,
        perPage: 10,
        direction: 'asc'
      };
      var params = '?page=' + 1;
      params += '&per_page=' + 12;
      //console.log(vimeoConfig.API_HOST + vimeoConfig.CATEGORIES + '/' + id + '/videos' + params);
      return $http.get(vimeoConfig.API_HOST + vimeoConfig.CATEGORIES + '/' + id + '/videos' + params);
    }

    return {
      'getCategory': getCategory,
      'resolveCategoriesId': resolveCategoriesId,
      'getVideosById': getVideosById
    };
  }
})();
