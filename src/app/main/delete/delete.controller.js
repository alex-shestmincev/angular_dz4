'use strict';

angular.module('dz4.main')
  .controller('DeleteCtrl', function ($scope,$state,mainService) {
    $scope.id = $state.params.id;

    var employee = mainService.getEmployee($scope.id);
    if (!employee || employee === 'undefined'
    ){
      $state.go('main');
      return;
    }

    $scope.name = employee.name;
    $scope.surname = employee.surname;

    $scope.Delete = function(idx) {
      mainService.Remove(idx);
      $scope.$parent.employees = mainService.List();
      $state.go('main');
    }

  });
