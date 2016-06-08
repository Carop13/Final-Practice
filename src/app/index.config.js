(function() {
  'use strict';

  angular
    .module('finalPractice')
    .config(config);

  /** @ngInject */
  function config($logProvider, $translateProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $translateProvider.useStaticFilesLoader({
      prefix: '../i18n/',
      suffix: '.json'
    });

    $translateProvider.useLocalStorage();

    //$translateProvider.translations('en');
    $translateProvider.preferredLanguage('en');



  }

})();
