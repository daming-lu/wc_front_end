/**
 * Created by damingl on 6/1/14.
 */

var loginApp = angular.module('loginApp', []);

loginApp.controller('LoginCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.isLogin = true;

    $scope.switchToRegister = function () {
        $scope.isLogin = false;
    };
    $scope.switchToLogin = function () {
        $scope.isLogin = true;
    };
}]);
