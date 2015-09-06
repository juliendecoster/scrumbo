'use strict';

angular.module('scrumbo.planningboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/planningboard', {
    templateUrl: 'planningboard/planningboard.html',
    controller: 'PlanningboardCtrl'
  });
}])

.controller('PlanningboardCtrl', ['$scope', 'Sprint', function($scope, Sprint) {
    $scope.sprints = Sprint.fetchAll();

    $scope.backlog = {
        title: 'Main Backlog Stories',
        color: 'red',
        stories: Sprint.getBacklog(),
    };
}]);