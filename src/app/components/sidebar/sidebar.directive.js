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

        var openMenu = $document[0].querySelector('#menu');
        var aside = element[0].querySelector('.aside');
        var closeX = $document[0].querySelector('#closeX');


        angular.element(openMenu).on('click', function(){
          //var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
          //console.log(width);
         /* if(width >= 720 && angular.element(aside).hasClass('close')){
            angular.element(aside).removeClass('close');
            angular.element(aside).addClass('open');
          }*/
          if(angular.element(aside).hasClass('open')){
            angular.element(aside).removeClass('open');
            angular.element(aside).addClass('close');
          }else{
            angular.element(aside).removeClass('close');
            angular.element(aside).addClass('open');
          }
        });

        angular.element(closeX).on('click', function(){
          if(angular.element(aside).hasClass('open')){
            angular.element(aside).removeClass('open');
            angular.element(aside).addClass('close');
          }
        });

      }
    };
  }
