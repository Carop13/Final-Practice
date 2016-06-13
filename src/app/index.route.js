(function() {
  'use strict';

  angular
    .module('finalPractice')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '',
      abstract: true,
      resolve: {
        /** @ngInject */
        categories: function (categoriesFactory) {
          return categoriesFactory.getCategory().then(function (categoriesResponse) {
            var categories;
            if(categoriesResponse.data && categoriesResponse.data.length > 0){
              categories = categoriesResponse.data;
            }else{
              categories = [];
            }
            return categories;
          });
        }
      }
     })
    .state('home.category', {
      url: '/category/:id',
      resolve: {
        /** @ngInject */
        videos: function ($stateParams, categoriesFactory) {
          return categoriesFactory.getVideosById($stateParams.id).then(function (result) {
            var videos;
            if(result.data.data){
              videos = result.data;
            }else{
              videos = [];
            }
            return videos;
          });
        }
      },
      views: {
        'content@': {
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        }
      },
      params: {
        id: ''
      }
     });
    $urlRouterProvider.otherwise('/category/:id');
  }

})();
