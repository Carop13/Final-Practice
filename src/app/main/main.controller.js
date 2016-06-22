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

    vm.videoDetail = function (uri){
      var videoId =  uri.split('/').pop();
      $state.go('home.detail', {id: videoId});
    };

    vm.changePage = function (){
      $state.go('.', {page: vm.currentPage});
    };

  }
})();
