'use strict';

angular.module('dz4.main')
  .controller('UpdateCtrl', function ($scope,$state,mainService) {

    $scope.id = $state.params.id;
    var employee = mainService.getEmployee($scope.id);
    if (!employee || employee === 'undefined'
    ){
      $state.go('main.create');
      return;
    }

    $scope.name = employee.name;
    $scope.surname = employee.surname;
    $scope.position = employee.position;

    $scope.Update = function(){
      var id = mainService.Update($scope.id,$scope.name,$scope.surname,$scope.position);
      $scope.$parent.employees = mainService.List();
      $state.go('main');
    }

  });
