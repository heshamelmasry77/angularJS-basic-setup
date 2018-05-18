angular
  .module('CarZarDIConfig', [])
  .provider('Config', function () {
    return {
      diApiDomain: 'https://cz-di-backend-atlas.herokuapp.com',
      isDebug: true,
      $get: function () {
        return this;
      }
    }
  });
