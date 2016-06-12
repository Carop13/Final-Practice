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
              categories = categoriesFactory.resolveCategoriesId(categoriesResponse.data);
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
