/**
 * Created by vladyslav on 2/8/17.
 */
(function(){
  'use strict';

  angular
    .module('CarZarDI.profile')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/',
        templateUrl: 'app/modules/profile/views/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      });
  }

})();
