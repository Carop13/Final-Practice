// Based on http://stackoverflow.com/questions/1571374/converting-values-to-unit-prefixes-in-jsp-page.
// The inner filter function can be used standalone.
(function() {
  'use strict';

  angular
    .module('finalPractice')
    .filter('thousandSuffix', function () {
      return function (input) {
        var exp,
          suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];

        if(window.isNaN(input)) {
          return null;
        }

        if(input < 1000) {
          return input;
        }

        exp = Math.floor(Math.log(input) / Math.log(1000));

        return (input / Math.pow(1000, exp)).toFixed(1) + suffixes[exp - 1];
      };
    });
})();
