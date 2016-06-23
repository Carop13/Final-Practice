(function() {
  'use strict';

  angular
    .module('finalPractice')
    .run(runBlock);

  /** @ngInject */
  function runBlock($http, vimeoConfig, $rootScope, $state) {

    $http.defaults.headers.common.Authorization = 'Bearer ' + vimeoConfig.ACCESS_TOKEN;

    var stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState) {
     if(toState.resolve){
       $rootScope.$broadcast('start', '');
     }
    });

    var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      if(toState.resolve){
        $rootScope.$broadcast('end', '');
      }
    });

    var searchEvent = $rootScope.$on('search-box:query', function (event, query) {
      $state.go("home.search", {page: 1, query: query});
    });

    $rootScope.$on('$destroy', function () {
      stateChangeStart();
      stateChangeSuccess();
      searchEvent();
    });
  }

})();
