(function(){
  'use strict';

  angular.module('yummy')
  .controller('LoginCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.title = 'Login';
    $scope.user = {};

    function success(response){
      toastr.success('User successfully logged in.');
      $location.path('/');
    }
    function failure(response){
      toastr.error('Error during login, try again');
      $scope.user= {};
    }

    $scope.login = function(){
      User.login($scope.user).then(success, failure);
    };
  }]);
})();

