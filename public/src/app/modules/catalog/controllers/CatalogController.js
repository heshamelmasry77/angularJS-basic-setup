(function() {
  'use strict';

  angular
    .module('CarZarDI.catalog')
    .controller('CatalogController', CatalogController);

  /** @ngInject */
  function CatalogController(toastr, testService) {
    var vm = this;

    vm.classAnimation = '';
    vm.visibleFilterBox = false;
    vm.year = {
      min: 2011,
      max: 2015,
      options: {
        floor: 2009,
        ceil: 2018,
        hideLimitLabels: true,
        hidePointerLabels: true
      }
    };

    // Mock data
    vm.mileage = {
      value: 50000,
      options: {
        floor: 0,
        ceil: 125000,
        hideLimitLabels: true,
        hidePointerLabels: true,
        showSelectionBar: true,
        step: 5000
      }
    };
    vm.price = {
      min: 60000,
      max: 220000,
      options: {
        floor: 0,
        ceil: 400000,
        hideLimitLabels: true,
        hidePointerLabels: true,
        step: 10000
      }
    };
    vm.carModel = {};

    vm.showToastr = showToastr;
    vm.trigFilterBox = trigFilterBox;

    function showToastr() {
      toastr.info('Some info from shared service:' + testService.getPrivate());
      vm.classAnimation = '';
    }

    function trigFilterBox(param) {
      if (param && param === 'hide') {
        vm.visibleFilterBox = false;
        return;
      }
      vm.visibleFilterBox = !vm.visibleFilterBox;
    }

  }

})();
