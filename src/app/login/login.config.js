'use strict';

angular.module('dz4.login', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl',
        params: {'logout':false}
      });

  }).run(function($rootScope,$state,loginService,Permission){

    Permission.defineRole('user', function (stateParams) {
      return loginService.getUser() ? true : false;
    });

    $rootScope.$on('$changeStateError',function(){
      loginService.logOut();
      $state.go('login');
    });


  });

