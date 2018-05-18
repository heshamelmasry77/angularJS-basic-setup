(function() {
  'use strict';

  angular
    .module(ApplicationConfiguration.applicationModuleName)
    .directive('diFooter', DIFooter);

  /** @ngInject */
  function DIFooter (){
    return {
      restrict: 'E',
      templateUrl: 'app/shared/views/footer.html',
      controller: function ($scope, $state, $stateParams) {

      }
    };
  }

})();
