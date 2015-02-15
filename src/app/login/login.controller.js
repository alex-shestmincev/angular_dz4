'use strict';

angular.module('dz4')
  .controller('LoginCtrl',['$scope','$state','loginService', function ($scope,$state,loginService) {

    if($state.params.logout === true){
      loginService.logOut();
    }else if(loginService.getUser()){
      $state.go('main');
    }

    $scope.username = '';
    $scope.password = '';

    $scope.Login = function(){
      var res = loginService.logIn($scope.username,$scope.password);

      if (res){
        $state.go('main');
      }
    }

  }]);
