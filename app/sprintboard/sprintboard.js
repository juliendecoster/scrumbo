'use strict';

angular.module('scrumbo.sprintboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sprintboard', {
    templateUrl: 'sprintboard/sprintboard.html',
    controller: 'SprintboardCtrl'
  });
}])

.controller('SprintboardCtrl', ['$scope', 'Sprint', function($scope, Sprint) {
    $scope.sprint = Sprint.getAll();
}]);