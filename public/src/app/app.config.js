(function() {
  'use strict';

  /* global ApplicationConfiguration */
  angular
    .module('CarZarDI')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $locationProvider, localStorageServiceProvider, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    localStorageServiceProvider.setPrefix('CarZar');
    //url without "#"
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
      $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
      // $httpProvider.interceptors.push('httpInterceptor');

  }

})();
