(function() {
  'use strict';

  angular
    .module('finalPractice')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(categories) {
    var vm = this;
    vm.categories = categories;
    //vm.videosByCategory = videosByCategory;
    console.log(vm.categories);
    //console.log(vm.videosByCategory);
  }
})();
