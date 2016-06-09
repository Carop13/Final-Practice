(function() {
  'use strict';

  angular
    .module('finalPractice')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $http, vimeoConfig) {
    $http.defaults.headers.common.Authorization = 'Bearer ' + vimeoConfig.ACCESS_TOKEN;
    $log.debug('runBlock end');
  }

})();
