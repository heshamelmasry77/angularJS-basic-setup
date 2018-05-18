/**
 * Created by vladyslav on 2/8/17.
 */
(function(){
  'use strict';

  angular
    .module('CarZarDI.catalog')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('catalog', {
        url: '/',
        templateUrl: 'app/modules/catalog/views/catalog.html',
        controller: 'CatalogController',
        controllerAs: 'catalog'
      });
  }

})();
