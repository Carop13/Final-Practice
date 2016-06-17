/**
 * Created by CaroP on 6/8/16.
 */
angular.module('finalPractice')
  .directive('sideBar', sideBar);

  /** @ngInject */
  function sideBar($document) {
    return {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html',
      link: function($scope, element){
        $scope.openClose = openClose;

        var openMenu = $document[0].querySelector('#menu');
        var aside = element[0].querySelector('.aside');


        angular.element(openMenu).on('click', function(){
          console.log('hola');
          if(angular.element(aside).hasClass('open')){
            angular.element(aside).removeClass('open');
            angular.element(aside).addClass('close');
          }else{
            angular.element(aside).removeClass('close');
            angular.element(aside).addClass('open');
          }
        });

        function openClose() {
          if(vm.open){
            vm.open = false;
          }else{
            vm.open = true;
          }
        }
      }
    };
  }
