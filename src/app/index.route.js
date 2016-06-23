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
              categories = categoriesFactory.resolveCategoriId(result.data);
            }else{
              categories = [];
            }
            return categories;
          });
        }
      }
     })
    .state('home.category', {
      url: '/category/:id?page',
      resolve: {
        /** @ngInject */
        videos: function ($stateParams, categoriesFactory) {
          return categoriesFactory.getVideosById($stateParams.id, $stateParams.page).then(function (result) {
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
        id: 'animation',
        page: '1'
      }
     })
      .state('home.detail', {
        url: '/detail/:id',
        resolve: {
          /** @ngInject */
          video: function ($stateParams, categoriesFactory) {
            return categoriesFactory.getVideo($stateParams.id).then(function (result) {
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
      })
      .state('home.search', {
      url: '/search/:query?page',
      resolve: {
        /** @ngInject */
        videos: function ($stateParams, categoriesFactory) {
          return categoriesFactory.getVideosSearch($stateParams.page, $stateParams.query).then(function (result) {
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
        page: '1'
      }
    });
    $urlRouterProvider.otherwise('/category/');
  }

})();
