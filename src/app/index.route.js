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
          return categoriesFactory.getCategory();
        },
        videosByCategory: function (categoriesFactory){
          return categoriesFactory.getVideosByCategory
        }
      }
     })
    .state('home.category', {
      url: '/category',
      views: {
        'content@': {
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        }
      }
     });
    $urlRouterProvider.otherwise('/category');
  }

})();
