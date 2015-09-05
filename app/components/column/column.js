'use strict';

angular.module('scrumbo').directive('column', function(Sprint) {

    return {
        templateUrl: 'components/column/column.html',
        scope: {
            column: '=set',
        },
        controller: function($scope) {
            var removeStoryFromColumn = function(story) {
                angular.forEach($scope.sprint.columns, function(column) {
                        var index = column.stories.indexOf(story);
                        if (index > -1) {
                            column.stories.splice(index, 1);
                        }
                    });
            };

            $scope.addStory = function(column) {
                // Add a blank story in edit mode to the column
                column.stories.push({ ref: undefined, title: '', editing: true });
            };

            $scope.deleteStory = function(story) {
                Sprint.deleteStory(story)
                .success(function() {
                    removeStoryFromColumn(story);
                })
                .error(function() {
                    // TODO : Show a nice error to the user
                    console.log('Impossible to delete the story');
                });
                
            };
        },
    };
});