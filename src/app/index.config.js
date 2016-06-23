(function() {
  'use strict';

  angular
    .module('finalPractice')
    .config(config);

  /** @ngInject */
  function config($logProvider, $translateProvider, LOCALES, tmhDynamicLocaleProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    //Angular translate configuration
    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider
      .useStaticFilesLoader({
        prefix: 'app/i18n/',
        suffix: '.json'
      })
      .registerAvailableLanguageKeys(['en', 'es'], LOCALES.localesMap)
      .determinePreferredLanguage()
      //or use $translateProvider.preferredLanguage(LOCALES.preferredLocale)
      .fallbackLanguage(LOCALES.preferredLocale);

    $translateProvider.useLocalStorage();
    $translateProvider.useSanitizeValueStrategy('escape');
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');


  }

})();
