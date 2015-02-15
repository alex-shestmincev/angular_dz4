angular.module('dz4').factory('loginService',['$q',function($q){

  function getUser(){
    var user = localStorage.getItem('username');
    return user ? $q.when(user) : $q.reject();
  }

  function logOut(){
    localStorage.setItem('username','');
  }

  function logIn(username,password){
    var username = username ? username.trim() : '';
    var password = password ? password.trim() : '';
    var password_check = username.split('').reverse().join('');

    if (username.length > 0 && password.length && password === password_check){
      localStorage.setItem('username',username);
      return true;
    }else{
      return false;
    }
  }

  return {
    getUser : getUser,
    logOut : logOut,
    logIn : logIn
  }

}]);
