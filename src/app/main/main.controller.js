(function() {
  'use strict';

  angular
    .module('finalPractice')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(categories) {
    var vm = this;
    vm.categories = categories.data;
    console.log(vm.categories);
  }
})();
