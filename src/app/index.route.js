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
        controllerAs: 'main'
        /*resolve: {
          translatePartialLoader: ['$translate', function ($translate, $rootScope) {
            $rootScope.translate = 'en';
            return $translate.refresh();
          }]
        }*/
      });

    $urlRouterProvider.otherwise('/');
  }

})();
