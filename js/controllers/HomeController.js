var appHome = angular.module('appHome', []);
appHome.controller('HomeController', function($scope) {
    $scope.sayHello = function() {
        alert("home")
    };
});