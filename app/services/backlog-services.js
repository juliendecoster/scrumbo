'use strict'

angular.module('scrumbo.backlogServices', [])

.factory('Backlog', ['$http', '$q',
    function($http, $q) {

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

        return {
            fakeCall: function(result) {
                var deferred = $q.defer();

                // Simulate a latency
                $http.get('https://cors-test.appspot.com/test')
                    .success(function(data, status) {
                        deferred.resolve(result);
                    })
                    .error(function(data, status) {
                        deferred.reject(status);
                    });

                return deferred.promise;
            },

            getBacklog: function() {
                return this.fakeCall(backlog);
            },
        };
    }
]);