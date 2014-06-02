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

    newUser.email = "haha@gmail.com";
    $scope.nUser = newUser;

    $scope.fullName = "";
    $scope.email = "";
    $scope.password = "";

    $scope.signUpNewUser = function () {
        var url = "http://peirongli.dreamhosters.com/worldcup/dev/wc_back_end/signUpNewUser.php";
        var params = {
            'fullName'  : $scope.fullName,
            'email'     : $scope.email,
            'password'  : $scope.password
        };
        /*
        $http.post(url, params).success(function(data) {
            console.log("returned data == \n");
            data = data['data'];
            console.log(JSON.stringify(data));
            //$scope.users = data;
        });
        */
        $http({
            method: 'POST',
            url: url,
            data: params,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    }
}]);
