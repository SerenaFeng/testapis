angular.module('index', [])
    .controller('MainCtrl', ['$scope', function($scope) {
        $scope.name = 'Hello';
        $scope.users =[];
        $scope.onLoadUsers = function() {
             $scope.users = ["Hello","World","Angular"];
        };
        $scope.removeUsers = function() {
             $scope.users = [];
        };
    }]);
