(function() {
  'use strict';

  angular
    .module('CarZarDI.profile')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController(toastr, testService) {
    var vm = this;

    vm.classAnimation = '';
    vm.showToastr = showToastr;

    function showToastr() {
      toastr.info('Some info from shared service:' + testService.getPrivate());
      vm.classAnimation = '';
    }

  }
})();
