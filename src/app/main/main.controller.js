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

    //vm.openClose = openClose;
    vm.lowScreen = true;
    vm.open = true;
    /*function openClose(){
      if(vm.open){
        vm.open = false;
      }else{
        vm.open = true;
      }
      console.log(vm.open);
    }
*/
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
    function openClose(x) {
      //x.classList.toggle("change");
      if(vm.open){
        vm.open = false;
      }else{
        vm.open = true;
      }
    }

  }
})();
