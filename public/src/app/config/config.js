angular
  .module('CarZarDIConfig', [])
  .provider('Config', function () {
    return {
      isDebug: true,
      $get: function () {
        return this;
      }
    }
  });
