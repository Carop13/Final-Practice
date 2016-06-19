(function() {
  'use strict';

  angular
    .module('finalPractice')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(categories, videos, $state, $stateParams) {
    var vm = this;
    vm.categories = categories;
    vm.total = videos.total;
    vm.videos = videos.data;
    vm.currentPage = $stateParams.page;
    vm.maxSize = 3;
    vm.itemsPerPage = 12;

    vm.videoDetail = videoDetail;
    vm.changePage = changePage;

    function videoDetail(uri){
      var videoId =  uri.split('/').pop();
      $state.go('home.detail', {id: videoId});
    }

    function changePage(){
      var url = window.location.href;

      if(url.substring(24, 32) == 'category'){
        $state.go('home.category', {id: $stateParams.id, page: vm.currentPage});
      }else{
        $state.go("home.search", {page: vm.currentPage, query: $stateParams.query});
      }
    }


  }
})();
