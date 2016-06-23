(function() {
  'use strict';

  angular
    .module('finalPractice')
    .constant('vimeoConfig', {
      'API_HOST': 'https://api.vimeo.com/',
      'ACCESS_TOKEN': 'a69498658147176bb14f752f497cd89f',
      'CATEGORIES': 'categories',
      'MAXSIZE': 3,
      'ITEMSPERPAGE': 12
    });

})();
