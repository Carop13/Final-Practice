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
      });
    }

    function resolveSlash(categories){
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
      var params = '?page=' + 1;
      params += '&per_page=' + 12;
      return $http.get(vimeoConfig.API_HOST + vimeoConfig.CATEGORIES + '/' + id + '/videos' + params).then(function (response) {
        return response;
      }, function(error){
        return error;
      });
    }

    function changePage(page, id) {
      var params = '?page=' + page;
      params += '&per_page=' + 12;
      return $http.get(vimeoConfig.API_HOST + vimeoConfig.CATEGORIES + '/' + id + '/videos' + params).then(function (response) {
          return response;
        }, function(error){
          return error;
        });
    }

    function getVideo(videoUri){
      return $http.get(vimeoConfig.API_HOST + videoUri).then(function(response){
        return response;
      }, function(error){
        return error;
      });
    }


    return {
      'getCategory': getCategory,
      'resolveSlash': resolveSlash,
      'getVideosById': getVideosById,
      'changePage': changePage,
      'getVideo': getVideo
    };
  }
})();
