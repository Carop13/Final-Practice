(function() {
  'use strict';

  angular
    .module('finalPractice')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController(video, $sce, categories) {
    var vm = this;
    vm.video = video;
    console.log(vm.video);
    vm.categories = categories;
    vm.reproduce = $sce.trustAsHtml(video.embed.html);
    vm.description = vm.video.description.substring(0, vm.video.description.indexOf("\n"));
    vm.by = vm.video.user.name;
    vm.bla =  moment(vm.video.created_time, 'YYYY').fromNow();
    vm.bla = vm.bla.toString();
    vm.since = vm.bla.split('ago').pop();
    console.log(vm.video.description);
    console.log(vm.by);
    console.log(vm.since);
    console.log(vm.bla);
  }
})();
