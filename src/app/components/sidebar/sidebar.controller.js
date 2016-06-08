(function() {
  'use strict';

  angular
    .module('finalPractice')
    .controller('SidebarController', SidebarController);

  /** @ngInject */
  function SidebarController($scope) {
    $scope.a = 'casa';
  }
});
