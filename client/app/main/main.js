'use strict';

angular.module('realchatApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('app.main', {
        url: '/',
        views: {
          "content@app": {
            template: '<main></main>'
          }
        }
      });
  });
