(function() {
  'use strict';

  angular
    .module('finalPractice')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {/* @ngInject */
          categories: function(categoriesFactory){
            return categoriesFactory.getCategory();
          }
        }
      });
    /*$stateProvider
    .state('main', {
      url: '/category',
      abstract: true,
      resolve: {
        categories: function(categoriesFactory){
          return categoriesFactory.getCategory();
        }
      }
    })
    .state('main.category', {
      url: '',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
      resolve: {
        categories2: function(categories){
          return categories;
         }
       }
    });*/
    $urlRouterProvider.otherwise('/');
  }

})();
