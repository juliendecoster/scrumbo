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

    // Simulate the next id in the database
    var currentStoryId = 6;
    var getNextStoryId = function () {
      currentStoryId += 1;
      return currentStoryId;
    }

    //
    // TODO : Extract the story in a component directive
    //
    
    $scope.addStory = function(column) {
        // Add a blank story in edit mode to the column
        column.stories.push({ ref: undefined, title: '', editing: true });
    };

    $scope.saveStory = function(story) {
        Sprint.saveStory(story)
        .success(function(story_id) {
            story.ref = '#' + getNextStoryId();
            story.editing = false;
        })
        .error(function() {
            // TODO : Show a nice error to the user
            console.log('Impossible to save the story');
        });
    };

    $scope.deleteStory = function(story) {
        Sprint.deleteStory(story)
        .success(function() {

            // Remove the story from the interface
            angular.forEach($scope.sprint.columns, function(column) {
                var index = column.stories.indexOf(story);
                if (index > -1) {
                    column.stories.splice(index, 1);
                }
            });
        })
        .error(function() {
            // TODO : Show a nice error to the user
            console.log('Impossible to delete the story');
        });
        
    };
}]);