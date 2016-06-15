(function() {
  'use strict';

  angular
    .module('finalPractice')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(categories, videos, $state, categoriesFactory, $stateParams) {
    var vm = this;
    vm.categories = categories;
    vm.total = videos.total;
    vm.videos = videos.data;
    vm.currentPage = 1;
    vm.maxSize = 3;
    vm.itemsPerPage = 12;
    vm.numPages = parseInt(vm.total/vm.itemsPerPage);

    vm.videoDetail = videoDetail;
    vm.changePage = changePage;

    function videoDetail(uri){
      uri =  uri.substring(1);
      $state.go('home.detail', {uri: uri});
    }


    function changePage(){
      categoriesFactory.changePage(vm.currentPage, $stateParams.id).then(function(result) {
        vm.videos = [];
        if(result.data.data){
          vm.videos = result.data.data;
        }
        return videos;
      }, function(error) {
        console.log(error);
      });
    }
  }

})();
