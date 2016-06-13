(function() {
  'use strict';

  angular
    .module('finalPractice')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(categories, videos) {
    var vm = this;
    vm.categories = categories;
    console.log(videos.total);
    vm.total = videos.total;
    vm.videos = videos.data;
    vm.currentPage = 1;
    //console.log(vm.categories);
    console.log(videos);
  }
})();
