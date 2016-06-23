/**
 * Created by CaroP on 6/8/16.
 */
angular.module('finalPractice')
  .directive('sideBar', sideBar);

  /** @ngInject */
  function sideBar($document) {
    return {
      restrict: 'E',
      scope: {
        items: '='
      },
      replace: true,
      templateUrl: 'app/components/sidebar/sidebar.html',
      link: function(){


        var openMenu = $document[0].querySelector('#menu');
        var aside = $document[0].querySelector('#aside');
        var closeX = $document[0].querySelector('#closeX');


        angular.element(openMenu).on('click', function(){
          if(angular.element(aside).hasClass('open')){
            angular.element(aside).removeClass('open');
            angular.element(aside).addClass('close-nav');
          }else{
            angular.element(aside).removeClass('close-nav');
            angular.element(aside).addClass('open');
          }
        });

        angular.element(closeX).on('click', function(){
          if(angular.element(aside).hasClass('open')){
            angular.element(aside).removeClass('open');
            angular.element(aside).addClass('close-nav');
          }
        });


      }
    };
  }
