(function() {
  'use strict';

  angular
    .module('finalPractice')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController(video, $sce, categories) {
    var vm = this;
    vm.video = video;
    vm.categories = categories;
    vm.reproduce = $sce.trustAsHtml(video.embed.html);

  }
})();
