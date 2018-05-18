(function() {
  'use strict';

  angular
    .module(ApplicationConfiguration.applicationModuleName)
    .directive('diViewOptions', DIViewOptions);

  /** @ngInject */
  function DIViewOptions (){
    return {
      restrict: 'E',
      templateUrl: 'app/shared/views/view-options.html',
      scope: true,
      controllerAs: 'viewOptions',
      controller: function ($scope, $log, $state, $stateParams) {
        var vm = this;

        vm.viewMode = 'list';
        vm.isMobile = IS_MOBILE;
        vm.showSortOptions = false;

        vm.sortOptions = [
          {
            title: 'Latest Upload',
            link: '/#'
          },
          {
            title: 'Newest Model',
            link: '/#'
          },
          {
            title: 'Lowest Price',
            link: '/#'
          },
          {
            title: 'Highest Price',
            link: '/#'
          },
          {
            title: 'Lowest Mileage',
            link: '/#'
          }
        ];

        vm.viewOptionsList = [
          {
            mode: 'block',
            iconClass: 'icon-blocks',
            link: '/#'
          },
          {
            mode: 'ordered-list',
            iconClass: 'icon-ordered-list',
            link: '/#'
          },
          {
            mode: 'list',
            iconClass: 'icon-list ',
            link: '/#'
          }
        ];

        vm.hideSortOptions = function () {
          vm.showSortOptions = false;
        };

        vm.trigSortOptions = function () {
          vm.showSortOptions = !vm.showSortOptions;
        };

        vm.changeViewMode = function (mode) {
          vm.viewMode = mode;
        };

      }
    };
  }

})();
