(function() {
  'use strict';

  angular
    .module('finalPractice')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $http, vimeoConfig, $rootScope, $state) {
    $http.defaults.headers.common.Authorization = 'Bearer ' + vimeoConfig.ACCESS_TOKEN;
    $log.debug('runBlock end');

    var searchEvent = $rootScope.$on('search-box:query', function (event, query) {
      $state.go("home.search", {page: 1, query: query});
    });

    $rootScope.$on('$destroy', function () {
      searchEvent();
    });
  }

})();
