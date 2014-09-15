(function(){
  'use strict';

  angular.module('yummy')
  .controller('RegisterCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.title = 'Register';
    $scope.user = {};

    function success(response){
      toastr.success('User successfully registered.');
      $location.path('/login');
    }

    function failure(response){
      toastr.error('Error during user registration');
      $scope.user = {};
    }

    $scope.register = function(){
      User.register($scope.user).then(success, failure);
    };
  }]);
})();

