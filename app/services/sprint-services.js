'use strict'

angular.module('scrumbo.sprintServices', [])

.factory('Sprint', ['$resource', 
    function($resource) {
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
                            ref: '#4',
                            title: 'Copy Trello',
                        },
                        {
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
                            ref: '#1',
                            title: 'Read the specs',
                        },
                        {
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

            deleteStory: function(story) {
                return true;
            },
        };
    }]);