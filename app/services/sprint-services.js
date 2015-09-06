'use strict'

angular.module('scrumbo.sprintServices', [])

.factory('Sprint', ['$resource', '$http', '$q',
    function($resource, $http, $q) {

        var backlog = [
            {
                sequence: 1,
                ref: '#1',
                title: 'Write some tests 1',
            },
            {
                sequence: 2,
                ref: '#2',
                title: 'Write some tests 2',
            },
            {
                sequence: 3,
                ref: '#3',
                title: 'Write some tests 3',
            },
            {
                sequence: 4,
                ref: '#4',
                title: 'Write some tests 4',
            },
        ];

        var sprints = [
            {
                id: 1,
                title: 'Week 7',
                startDate: '2nd of Sept.',
                endDate: '9th of Sept.',
                backlog_count: 4,
                columns: [
                    {
                        id: 1,
                        title: 'In backlog',
                        color: 'red',
                        stories: [
                            {
                                sequence: 1,
                                ref: '#5',
                                title: 'Write some tests',
                            },
                        ]
                    },
                    {
                        id: 2,
                        title: 'In Progress',
                        color: 'blue',
                        stories: [
                            {
                                sequence: 1,
                                ref: '#4',
                                title: 'Copy Trello',
                            },
                            {
                                sequence: 2,
                                ref: '#3',
                                title: 'Learn AngularJS',
                            },
                        ]
                    },
                    {
                        id: 3,
                        title: 'In review',
                        color: 'orange',
                        stories: [
                            {
                                sequence: 1,
                                ref: '#6',
                                title: 'Coding Style',
                            },
                        ]
                    },
                    {
                        id: 4,
                        title: 'Done',
                        color: 'green',
                        stories: [
                            {
                                sequence: 1,
                                ref: '#1',
                                title: 'Read the specs',
                            },
                            {
                                sequence: 2,
                                ref: '#2',
                                title: 'Book the review',
                            },
                        ]
                    },
                ],
            },
            {
                id: 2,
                title: 'Week 8',
                startDate: '10th of Sept.',
                endDate: '17th of Sept.',
                backlog_count: 2,
                columns: [
                    {
                        id: 1,
                        title: 'In backlog',
                        color: 'red',
                        stories: [
                            {
                                sequence: 1,
                                ref: '#5',
                                title: 'Write some tests',
                            },
                        ]
                    },
                    {
                        id: 2,
                        title: 'In Progress',
                        color: 'blue',
                        stories: [
                            {
                                sequence: 1,
                                ref: '#4',
                                title: 'Copy Trello',
                            },
                            {
                                sequence: 2,
                                ref: '#3',
                                title: 'Learn AngularJS',
                            },
                        ]
                    },
                    {
                        id: 3,
                        title: 'In review',
                        color: 'orange',
                        stories: [
                            {
                                sequence: 1,
                                ref: '#6',
                                title: 'Coding Style',
                            },
                        ]
                    },
                    {
                        id: 4,
                        title: 'Done',
                        color: 'green',
                        stories: [
                            {
                                sequence: 1,
                                ref: '#1',
                                title: 'Read the specs',
                            },
                            {
                                sequence: 2,
                                ref: '#2',
                                title: 'Book the review',
                            },
                        ]
                    },
                ],
            },
            {
                id: 3,
                title: 'Week 9',
                startDate: '18th of Sept.',
                endDate: '25th of Sept.',
                backlog_count: 1,
                columns: [
                    {
                        id: 1,
                        title: 'In backlog',
                        color: 'red',
                        stories: [
                            {
                                sequence: 1,
                                ref: '#5',
                                title: 'Write some tests',
                            },
                        ]
                    },
                    {
                        id: 2,
                        title: 'In Progress',
                        color: 'blue',
                        stories: [
                            {
                                sequence: 1,
                                ref: '#4',
                                title: 'Copy Trello',
                            },
                            {
                                sequence: 2,
                                ref: '#3',
                                title: 'Learn AngularJS',
                            },
                        ]
                    },
                    {
                        id: 3,
                        title: 'In review',
                        color: 'orange',
                        stories: [
                            {
                                sequence: 1,
                                ref: '#6',
                                title: 'Coding Style',
                            },
                        ]
                    },
                    {
                        id: 4,
                        title: 'Done',
                        color: 'green',
                        stories: [
                            {
                                sequence: 1,
                                ref: '#1',
                                title: 'Read the specs',
                            },
                            {
                                sequence: 2,
                                ref: '#2',
                                title: 'Book the review',
                            },
                        ]
                    },
                ],
            },
        ];

        var currentStoryId = 6;
        var getNextStoryId = function() {
            currentStoryId += 1;
            return currentStoryId;
        }

        return {
            fetchAll: function() {
                return sprints;
            },

            getSprint: function(sprintId) {
                var deferred = $q.defer();

                // Simulate a latency
                $http.get('https://cors-test.appspot.com/test')
                    .success(function(data, status) {
                        for (var i = 0, len = sprints.length; i < len; i++) {
                            if (sprints[i].id === sprintId) {
                                deferred.resolve(sprints[i]);
                            }
                        }
                    })
                    .error(function(data, status) {
                        deferred.reject(status);
                    });

                return deferred.promise;
            },

            saveStory: function(story) {
                var deferred = $q.defer();

                // Simulate a latency
                $http.get('https://cors-test.appspot.com/test')
                    .success(function(data, status) {
                        deferred.resolve(getNextStoryId());
                    })
                    .error(function(data, status) {
                        deferred.reject(status);
                    });

                return deferred.promise;
            },

            deleteStory: function(story) {
                // Simulate a latency
                return $http.get('https://cors-test.appspot.com/test');
            },

            moveStoryToColumn: function(story, column, afterStory) {
                // Simulate a latency
                return $http.get('https://cors-test.appspot.com/test');
            },

            getBacklog: function() {
                return backlog;
            },
        };
    }]);