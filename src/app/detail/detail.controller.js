(function() {
  'use strict';

  angular
    .module('finalPractice')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController(video, $sce, categories) {
    var vm = this;
    vm.video = video;
   // console.log(vm.video);
    vm.categories = categories;
    vm.picture =  video.pictures.sizes[0].link;
    vm.reproduce = $sce.trustAsHtml(video.embed.html);
    if(vm.video.description != null){
      vm.description = vm.video.description.substring(0, vm.video.description.indexOf("\n"));
    }
    vm.by = vm.video.user.name;
    vm.createdTime =  moment(vm.video.created_time, 'YYYY').fromNow();
    vm.createdTime = vm.createdTime.toString();
    vm.since = vm.createdTime.substring(0, vm.createdTime.indexOf("ago"));
    vm.open = true;
    vm.lowScreen = true;

    vm.openClose = openClose;
    function openClose() {
      if(vm.open){
        vm.open = false;
      }else{
        vm.open = true;
      }
    }

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(width <= 720){
      vm.open = false;
      vm.lowScreen = true;
    }else{
      vm.open = true;
      vm.lowScreen = false;
    }
  }
})();
