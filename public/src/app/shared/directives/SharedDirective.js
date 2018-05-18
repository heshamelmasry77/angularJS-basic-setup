(function() {
  'use strict';
  /* global ApplicationConfiguration */

  angular
    .module('CarZarDI')
    .directive('sharedDirective', SharedDirective);

  /** @ngInject */
  function SharedDirective (){
    return {
      restrict: 'E',
      template: '<div>Some shared directive example</div>'
    };
  }

})();
