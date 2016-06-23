/**
 * Created by CaroP on 6/19/16.
 */
/**
 * Created by CaroP on 6/8/16.
 */
angular.module('finalPractice')
  .directive('search', search);

/** @ngInject */
function search($rootScope) {
  return {
    restrict: 'E',
    scope: {},
    replace: true,
    templateUrl: 'app/components/search/search.html',
    link: function(scope){
      scope.query = '';

      scope.searchBoxEvent = function (query) {
        if(query != ''){
          $rootScope.$broadcast('search-box:query', query);
        }
      };

      scope.enter = function (keyEvent) {
        if(keyEvent.which === 13){
          if(scope.query != ''){
            scope.searchBoxEvent(scope.query);
          }
        }
      };

    }
  };
}
