var appMine = angular.module('appMine', []);
appMine.controller('MineController', function($scope) {
    $scope.sayHello = function() {
        alert("mine");
    };
});