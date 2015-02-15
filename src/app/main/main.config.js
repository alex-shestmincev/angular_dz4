'use strict';

angular.module('dz4.main', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        data:{
          permissions: {
            only: ['user']
          }
        }
      });

  });
