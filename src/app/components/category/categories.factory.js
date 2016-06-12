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


    return {
      'getCategory': getCategory,
      'resolveCategoriesId': resolveCategoriesId
    };
  }
})();
