'use strict';

angular.module('dz4', [ 'ui.router','dz4.login','dz4.main','permission'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');
  });

