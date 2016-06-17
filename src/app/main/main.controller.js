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

    vm.videoDetail = videoDetail;
    vm.changePage = changePage;

    function videoDetail(uri){
      var videoId =  uri.split('/').pop();
      $state.go('home.detail', {id: videoId});
    }


    function changePage(){
      $state.go('home.category', {id: $stateParams.id, page: vm.currentPage});
    }

    vm.lowScreen = true;
    vm.open = true;

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(width <= 720){
      vm.open = false;
      vm.lowScreen = true;
      console.log(vm.lowScreen);
    }else{
      vm.open = true;
     vm.lowScreen = false;
      console.log(vm.lowScreen);
    }

    vm.openClose = openClose;
    function openClose() {
      if(vm.open){
        vm.open = false;
      }else{
        vm.open = true;
      }
    }

  }
})();
