'use strict';

angular.module('realchatApp.auth', [
  'realchatApp.constants',
  'realchatApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
