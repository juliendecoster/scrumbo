'use strict'

angular.module('scrumbo.sprintServices', [])

.factory('Sprint', ['$http', '$q',
    function($http, $q) {
        var sprints = [
            {
                id: 1,
                title: 'Week 7',
                startDate: '2nd of Sept.',
                endDate: '9th of Sept.',
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
                                ref: '#6',
                                title: 'Copy Trello',
                            },
                            {
                                sequence: 2,
                                ref: '#7',
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
                                ref: '#8',
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
                                ref: '#9',
                                title: 'Read the specs',
                            },
                            {
                                sequence: 2,
                                ref: '#10',
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
                columns: [
                    {
                        id: 1,
                        title: 'In backlog',
                        color: 'red',
                        stories: [
                            {
                                sequence: 1,
                                ref: '#11',
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
                                ref: '#12',
                                title: 'Copy Trello',
                            },
                            {
                                sequence: 2,
                                ref: '#13',
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
                                ref: '#14',
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
                                ref: '#15',
                                title: 'Read the specs',
                            },
                            {
                                sequence: 2,
                                ref: '#16',
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
                columns: [
                    {
                        id: 1,
                        title: 'In backlog',
                        color: 'red',
                        stories: [
                            {
                                sequence: 1,
                                ref: '#17',
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
                                ref: '#18',
                                title: 'Copy Trello',
                            },
                            {
                                sequence: 2,
                                ref: '#19',
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
                                ref: '#20',
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
                                ref: '#21',
                                title: 'Read the specs',
                            },
                            {
                                sequence: 2,
                                ref: '#22',
                                title: 'Book the review',
                            },
                        ]
                    },
                ],
            },
        ];

        var newSprintSkeleton = {
            id: 5,
            title: 'No Title',
            startDate: 'No start date',
            endDate: 'No end date',
            columns: [
                {
                    id: 1,
                    title: 'In backlog',
                    color: 'red',
                    stories: [],
                },
                {
                    id: 2,
                    title: 'In Progress',
                    color: 'blue',
                    stories: [],
                },
                {
                    id: 3,
                    title: 'In review',
                    color: 'orange',
                    stories: [],
                },
                {
                    id: 4,
                    title: 'Done',
                    color: 'green',
                    stories: [],
                },
            ],
        };

        var currentStoryId = 4;
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

            fetchAll: function() {
                return this.fakeCall(sprints);
            },

            getSprint: function(sprintId) {
                var fct = function(sprintId) {
                    for (var i = 0, len = sprints.length; i < len; i++) {
                        if (sprints[i].id === sprintId) {
                            return sprints[i];
                        }
                    }
                };

                return this.fakeCall(fct(sprintId));
            },

            newSprint: function() {
                var newSprint = angular.copy(newSprintSkeleton)
                newSprint.id = getNextStoryId();
                return this.fakeCall(newSprint);
            },

            createSprint: function() {
                return this.fakeCall(true);
            },

            archiveSprint: function() {
                return this.fakeCall(true);
            },
        };
    }]);