'use strict';

angular.module('realchatApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        views: {
          root: {
            templateUrl: 'app/account/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
          }
        }
      })
      .state('logout', {
        url: '/logout?referrer',
        referrer: 'main',
        template: '',
        controller: function($state, Auth) {
          var referrer = $state.params.referrer ||
            $state.current.referrer ||
            'main';
          Auth.logout();
          $state.go(referrer);
        }
      })
      .state('signup', {
        url: '/signup',
        views: {
          root: {
            templateUrl: 'app/account/signup/signup.html',
            controller: 'SignupController',
            controllerAs: 'vm'
          }
        }
      })
      .state('settings', {
        url: '/settings',
        authenticate: true,
        views: {
          root: {
            templateUrl: 'app/account/settings/settings.html',
            controller: 'SettingsController',
            controllerAs: 'vm',
          }
        }
      });
  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
      if (next.name === 'logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
      }
    });
  });
