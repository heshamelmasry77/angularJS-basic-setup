(function() {
    'use strict';

    angular
        .module('CarZarDI')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('404', {
                url: '/404?isWidget&affiliateId',
                templateUrl: 'app/shared/views/404.html',
                controller: function($stateParams){
                    var vm = this;
                    vm.stateParams = $stateParams;
                },
                controllerAs: 'page404'
            })
            .state('oops', {
                url: '/oops?isWidget&affiliateId',
                templateUrl: 'app/shared/views/oops.html',
                controller: function($stateParams){
                    var vm = this;
                    vm.stateParams = $stateParams;
                },
                controllerAs: 'pageOops'
            });
        $urlRouterProvider.otherwise('/404');
    }

})();
