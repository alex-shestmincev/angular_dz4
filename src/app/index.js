'use strict';

angular.module('dz4', [ 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve:{
          user: function(loginService){
            return loginService.getUser();
          }
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl',
        params: {'logout':false},
      });

    $urlRouterProvider.otherwise('/login');
  }).run(function($rootScope,$state,loginService){

    $rootScope.$on('$changeStateError',function(){
      loginService.logOut();
      $state.go('login');
    });


  });
;
