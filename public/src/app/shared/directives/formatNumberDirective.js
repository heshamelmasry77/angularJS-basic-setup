(function () {
  'use strict';
  angular
    .module(ApplicationConfiguration.applicationModuleName)

    .directive('format', function ($filter) {
      'use strict';

      return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
          if (!ctrl) return;

          ctrl.$formatters.unshift(function (a) {
              return $filter(attrs.format)(ctrl.$modelValue);
          });

          elem.bind('blur', function(event) {
            var plainNumber = elem.val().replace(/[^\d|\-+|\.+]/g, '');

            elem.val($filter(attrs.format)(plainNumber));
          });

        }
      };
    })
})();
