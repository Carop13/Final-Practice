/**
 * Created by CaroP on 6/8/16.
 */
angular.module('finalPractice')
  .directive('sideBar', sideBar);

  /** @ngInject */
  function sideBar() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html'
    };
  }
