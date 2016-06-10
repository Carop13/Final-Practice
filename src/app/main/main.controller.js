(function() {
  'use strict';

  angular
    .module('finalPractice')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(categories, videosByCategory) {
    var vm = this;
    vm.categories = categories.data;
    vm.videosByCategory = videosByCategory;
    console.log(vm.categories);
    console.log(vm.videosByCategory);
  }
})();
