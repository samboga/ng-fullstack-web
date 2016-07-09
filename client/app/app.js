'use strict';

angular.module('realchatApp', [
    'realchatApp.auth',
    'realchatApp.admin',
    'realchatApp.constants',
    'realchatApp.layout',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.bootstrap',
    'validation.match'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          root: {
            templateUrl: 'app/layout/layout.tpl.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
