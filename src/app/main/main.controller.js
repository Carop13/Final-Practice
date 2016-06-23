(function() {
  'use strict';

  angular
    .module('finalPractice')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(categories, videos, $state, $stateParams, vimeoConfig) {
    var vm = this;
    vm.categories = categories;
    vm.total = videos.total;
    vm.videos = videos.data;
    vm.currentPage = $stateParams.page;
    vm.maxSize = vimeoConfig.MAXSIZE;
    vm.itemsPerPage = vimeoConfig.ITEMS_PER_PAGE;

    vm.videoDetail = function (uri){
      var videoId =  uri.split('/').pop();
      $state.go('home.detail', {id: videoId});
    };

    vm.changePage = function (){
      $state.go('.', {page: vm.currentPage});
    };

  }
})();
