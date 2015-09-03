'use strict'

angular.module('scrumbo.sprintServices', [])

.factory('Sprint', [ 
    function($resource) {
        var data = {
            title: 'Coding Exercice',
            startDate: '2nd of September',
            endDate: '9th of September',
            columns: [
                {
                    title: 'To Do',
                    color: 'red',
                    stories: [
                        {
                            ref: '#5',
                            title: 'Write some tests',
                        },
                    ]
                },
                {
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
                    title: 'Reviewing',
                    color: 'orange',
                    stories: [
                        {
                            ref: '#6',
                            title: 'Coding Style',
                        },
                    ]
                },
                {
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
        };
    }]);