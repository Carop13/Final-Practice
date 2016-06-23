angular.module('finalPractice')
  .directive('spinner', spinner);

/** @ngInject */
function spinner($rootScope, $document) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/components/spinner/spinner.html',
    link: function(scope){
      scope.query = '';

      scope.searchBoxEvent = function (query) {
        if(query != ''){
          $rootScope.$broadcast('search-box:query', query);
        }
      };

      var loader = $document[0].querySelector('#loader');

      scope.$on('start', function(){
        if(!angular.element(loader).hasClass('loader')){
          angular.element(loader).addClass('loader');
        }
      });

      scope.$on('end', function(){
        if(angular.element(loader).hasClass('loader')){
          angular.element(loader).removeClass('loader');
        }
      });

    }
  };
}
