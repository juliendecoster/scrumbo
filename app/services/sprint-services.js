'use strict'

angular.module('scrumbo.sprintServices', [])

.factory('Sprint', ['$resource', '$http', 
    function($resource, $http) {
        var data = {
            title: 'Coding Exercice',
            startDate: '2nd of September',
            endDate: '9th of September',
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
        };

        return {
            getAll: function() {
                return data;
            },

            saveStory: function(story) {
                // Simulate a latency
                return $http.get('https://cors-test.appspot.com/test');
            },

            deleteStory: function(story) {
                // Simulate a latency
                return $http.get('https://cors-test.appspot.com/test');
            },

            moveStoryToColumn: function(story, column) {
                // Simulate a latency
                return $http.get('https://cors-test.appspot.com/test');
            }
        };
    }]);