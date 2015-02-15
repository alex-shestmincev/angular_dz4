'use strict';

angular.module('dz4.main')
  .controller('CreateCtrl', function ($scope, $state,mainService) {

    $scope.name = '';
    $scope.surname = '';
    $scope.position = '';

    $scope.Create = function(){
      var id = mainService.New($scope.name,$scope.surname,$scope.position);
      $state.go('main.update',{id:id});
    }

  });
