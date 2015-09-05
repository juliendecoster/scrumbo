'use strict';

angular.module('scrumbo.sprintboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sprintboard', {
    templateUrl: 'sprintboard/sprintboard.html',
    controller: 'SprintboardCtrl'
  });
}])

.controller('SprintboardCtrl', ['$rootScope', '$scope', 'Sprint', function($rootScope, $scope, Sprint) {
    $scope.sprint = Sprint.getAll();

    var removeStoryFromColumn = function(story) {
        angular.forEach($scope.sprint.columns, function(column) {
                var index = column.stories.indexOf(story);
                if (index > -1) {
                    column.stories.splice(index, 1);
                }
            });
    };

    $scope.moveStoryToColumn = function(story, column, afterStory) {
        // We do the operation before having the feedback
        // from the server to be faster.
        // We make a copy of the sprint state just in case the call fail
        var sprintCopy = $scope.sprint;

        // Remove the story to the last column
        removeStoryFromColumn(story);

        // Add the story to the dropped column at the right place
        if (afterStory) {
            var index = column.stories.indexOf(afterStory);
            column.stories.splice(index + 1, 0, story);
        } else {
            column.stories.splice(0, 0, story);
        }

        // Finally do the call to the server
        Sprint.moveStoryToColumn(story, column)
        .success(function() {
            
        })
        .error(function() {
            // TODO : Show a nice error to the user
            $scope.sprint = sprintCopy; // Restore the backup state
            console.log('Impossible to save the story');
        });
    };

    // Drag and drop event
    $rootScope.$on('dropEvent', function(event, dragged, dropped, afterStory) {
        $scope.moveStoryToColumn(dragged, dropped, afterStory);
    });
}]);