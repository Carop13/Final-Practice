angular.module('finalPractice')
  .directive('spinner', spinner);

/** @ngInject */
function spinner($rootScope, $document) {
  return {
    restrict: 'E',
    scope: {},
    replace: true,
    link: function(scope){
      scope.query = '';

      scope.searchBoxEvent = function (query) {
        if(query != ''){
          $rootScope.$broadcast('search-box:query', query);
        }
      };

      var loader = $document[0].querySelector('#loader');

      scope.stop = function(){
        if(angular.element(loader).hasClass('loader')){
          angular.element(loader).removeClass('loader');
        }
      };

      scope.start = function(){
        if(!angular.element(loader).hasClass('loader')){
          angular.element(loader).addClass('loader');
        }
      };

    }
  };
}
