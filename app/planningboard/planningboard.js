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

    Sprint.getBacklog().then(
        function(backlog) {
            $scope.backlog = {
                title: 'stories in main backlog',
                color: 'red',
                stories: backlog,
            };
        },
        function(reason) {
            // TODO : Show a nice error to the user
            console.log('Impossible to get the story');
        });
}]);