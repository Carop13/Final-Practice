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
          return categoriesFactory.getCategory().then(function (result) {
            var categories;
            if(result.data && result.data.length > 0){
              categories = categoriesFactory.resolveSlash(result.data);
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
          controllerAs: 'vm'
        }
      },
      params: {
        id: 'animation'
      }
     })
      .state('home.detail', {
        url: '/detail/{uri}',
        resolve: {
          /** @ngInject */
          video: function ($stateParams, categoriesFactory) {
            return categoriesFactory.getVideo($stateParams.uri).then(function (result) {
              var video;
              if(result.data){
                video = result.data;
              }else{
                video = [];
              }
              return video;
            });
          },
          categories: function (categories) {
            return categories;
          }
        },
        views: {
          'content@': {
            templateUrl: 'app/detail/detail.html',
            controller: 'DetailController',
            controllerAs: 'vm'
          }
        },
        params: {
          uri: undefined
        }
      });
    $urlRouterProvider.otherwise('/category/');
  }

})();
