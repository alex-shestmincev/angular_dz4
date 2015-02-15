'use strict';

angular.module('dz4.main')
  .controller('MainCtrl', function ($scope,$state,mainService,$timeout) {

    $scope.employees = mainService.List();

  });
