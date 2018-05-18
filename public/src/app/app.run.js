(function() {
  'use strict';
  /* eslint angular/on-watch: 0*/

  angular
    .module('CarZarDI')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, Config, $state, $location) {
    $rootScope.isDebug = Config.isDebug;
    if (!$rootScope.isDebug) {
      console.log = function () {
      };
    }
      $rootScope.pageLoadFlag = false;

    $rootScope.$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams, error) {
        if(error && error.type == '404') {
          return $state.go('404');
        }


        return $state.go('CarZarDI.catalog')
      });

    $rootScope.$on('$stateChangeSuccess', function(){
      $rootScope.pageLoadFlag = false;
      // if($rootScope.locationSearch){
      //   $location.search($rootScope.locationSearch);
      //   $rootScope.locationSearch = null;
      // }
    });

    $rootScope.$on('$stateChangeStart', function(){
      $rootScope.pageLoadFlag = true;
    });

    }

})();
