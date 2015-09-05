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

    $scope.addStory = function(column) {
        column.stories.push({ ref: '#8', title: '', editing: true });
    };

    $scope.deleteStory = function(story) {
        angular.forEach($scope.sprint.columns, function(column) {
            var index = column.stories.indexOf(story);
            if (index > -1) {
                column.stories.splice(index, 1);
            }
        });
    };
}]);