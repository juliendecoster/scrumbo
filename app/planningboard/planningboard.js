'use strict';

angular.module('scrumbo.planningboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/planningboard', {
    templateUrl: 'planningboard/planningboard.html',
    controller: 'PlanningboardCtrl'
  });
}])

.controller('PlanningboardCtrl', ['$scope', 'Sprint', 'Backlog',
function($scope, Sprint, Backlog) {
    Sprint.fetchAll().then(
        function(sprints) {
            $scope.sprints = sprints;
        },
        function(reason) {
            // TODO : Show a nice error to the user
            console.log('Impossible to get the story:' + reason);
        });

    Backlog.getBacklog().then(
        function(backlog) {
            $scope.backlog = {
                title: 'stories in main backlog',
                color: 'red',
                stories: backlog,
            };
        },
        function(reason) {
            // TODO : Show a nice error to the user
            console.log('Impossible to get the story:' + reason);
        });

    $scope.newSprint = function() {
        Sprint.newSprint().then(
            function(newSprint) {
                newSprint.creating = true;
                $scope.sprints.splice($scope.sprints.length, 0, newSprint);
            },
            function(reason) {
                // TODO : Show a nice error to the user
                console.log('Impossible to get the story:' + reason);
            });
    };

    $scope.archiveSprint = function(sprint) {
        Sprint.archiveSprint(sprint.id).then(
            function(result) {
                var index = $scope.sprints.indexOf(sprint);
                $scope.sprints.splice(index, 1);
            },
            function(reason) {
                // TODO : Show a nice error to the user
                console.log('Impossible to archive the sprint:' + reason);
            });
    };
}]);