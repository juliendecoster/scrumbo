'use strict';

angular.module('scrumbo').directive('column', function(Sprint, Story) {

    return {
        templateUrl: 'components/column/column.html',
        scope: {
            column: '=set',
        },
        controller: function($rootScope, $scope) {
            var removeStoryFromColumn = function(story) {
                var index = $scope.column.stories.indexOf(story);
                if (index > -1) {
                    $scope.column.stories.splice(index, 1);
                }
            };

            var doesColumnContainsStory = function(story) {
                for (var i = 0; i < $scope.column.stories.length; i++) {
                    if ($scope.column.stories[i] == story) {
                        return true;
                    }
                }
                return false;
            }

            $scope.addStory = function(column) {
                // Add a blank story in edit mode to the column
                column.stories.push({ ref: undefined, title: '', editing: true });
            };

            $scope.deleteStory = function(story) {
                Story.deleteStory(story).then(
                    function() {
                        removeStoryFromColumn(story);
                    },
                    function(reason) {
                         // TODO : Show a nice error to the user
                        console.log('Impossible to delete the story:' + reason);
                    });
            };

            var moveStoryToColumn = function(story, column, afterStory) {
                // We do the operation before having the feedback
                // from the server to be faster.
                // We make a copy of the sprint state just in case the call fail
                var columnCopy = $scope.column;

                if (doesColumnContainsStory(story)) {
                    removeStoryFromColumn(story);
                }

                if (angular.equals($scope.column, column)) {
                    // Add the story to the dropped column at the right place
                    if (afterStory) {
                        var index = $scope.column.stories.indexOf(afterStory);
                        $scope.column.stories.splice(index + 1, 0, story);
                    } else {
                        $scope.column.stories.splice(0, 0, story);
                    }

                    // Finally do the call to the server
                    Story.moveStoryToColumn(story, column, afterStory).then(
                        function(result) {

                        },
                        function(reason) {
                            // TODO : Show a nice error to the user
                            $scope.column = columnCopy; // Restore the backup state
                            console.log('Impossible to save the story:' + reason);
                        });
                }
            };

            // Drag and drop event
            var dropListener = $rootScope.$on('dropEvent', function(event, dragged, dropped, afterStory) {
                moveStoryToColumn(dragged, dropped, afterStory);
            });

            // Need to destroy the listener, otherwise the drag and drop
            // will copy the story several times
            $scope.$on('$destroy', function () { 
                dropListener();
            });
        },
    };
});