/**
 * Created by CaroP on 6/19/16.
 */
/**
 * Created by CaroP on 6/8/16.
 */
angular.module('finalPractice')
  .directive('search', search);

/** @ngInject */
function search($document) {
  return {
    restrict: 'E',
    templateUrl: 'app/components/search/search.html',
    link: function(scope, element, $stateProvider){

      scope.searchBox = searchBox;
      scope.enterPress = enterPress;

      function searchBox(querySearch){
        console.log(querySearch);
        //window.location.href = 'home.search', querySearch;
        $stateProvider.state("home.search", {page: 1, query: querySearch});
      }

      function enterPress(keyEvent, query) {
        if(keyEvent.which === 13){
          scope.searchBox(query);
        }
      }

    }
  };
}
