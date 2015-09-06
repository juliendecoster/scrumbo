'use strict';

angular.module('scrumbo').directive('sprintcard', function(Sprint) {

    return {
        templateUrl: 'components/sprintcard/sprintcard.html',
        scope: {
            sprint: '=set',
        },
        controllerAs: 'ctrl',
        controller: function($rootScope, $scope) {
            var moveStoryToSprint = function(story, sprint, afterStory) {
                // We do the operation before having the feedback
                // from the server to be faster.
                // We make a copy of the sprint state just in case the call fail
                var sprintCopy = $scope.sprint;

                if (angular.equals($scope.sprint, sprint)) {
                    // Add the story to the dropped column at the right place
                    $scope.$apply(function() {
                        $scope.sprint.columns[0].stories.splice(0, 0, story);
                    });
                    
                    // Finally do the call to the server
                    Sprint.moveStoryToSprint(story, sprint)
                    .success(function() {
                        
                    })
                    .error(function() {
                        // TODO : Show a nice error to the user
                        $scope.sprint = sprintCopy; // Restore the backup state
                        console.log('Impossible to save the story');
                    });
                }
            };

            $scope.backlog_count = function() {
                return $scope.sprint.columns[0].stories.length;
            };

            // Drag and drop event
            var dropListener = $rootScope.$on('dropEvent', function(event, dragged, dropped, afterStory) {
                moveStoryToSprint(dragged, dropped, afterStory);
            });

            // Need to destroy the listener, otherwise the drag and drop
            // will copy the story several times
            $scope.$on('$destroy', function () {
                dropListener();
            });
        },
    };
});