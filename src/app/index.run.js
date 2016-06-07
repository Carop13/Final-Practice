(function() {
  'use strict';

  angular
    .module('finalPractice')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
