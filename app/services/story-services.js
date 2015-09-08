'use strict'

angular.module('scrumbo.storyServices', [])

.factory('Story', ['$http', '$q',
    function($http, $q) {

        var currentStoryId = 22;
        var getNextStoryId = function() {
            currentStoryId += 1;
            return currentStoryId;
        }

        return {
            fakeCall: function(result) {
                var deferred = $q.defer();

                // Simulate a latency
                $http.get('https://scrumbo.firebaseapp.com/ping.json')
                    .success(function(data, status) {
                        deferred.resolve(result);
                    })
                    .error(function(data, status) {
                        deferred.reject(status);
                    });

                return deferred.promise;
            },

            deleteStory: function(story) {
                return this.fakeCall(true);
            },

            moveStoryToColumn: function(story, column, afterStory) {
                return this.fakeCall(true);
            },

            moveStoryToSprint: function(story, column) {
                return this.fakeCall(true);
            },

            saveStory: function(story) {
                return this.fakeCall(getNextStoryId());
            },
        };
    }
]);