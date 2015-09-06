'use strict';

angular.module('scrumbo.sprintboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sprintboard/:sprintId', {
    templateUrl: 'sprintboard/sprintboard.html',
    controller: 'SprintboardCtrl'
  });
}])

.controller('SprintboardCtrl', ['$rootScope', '$scope', '$routeParams', 'Sprint', 
function($rootScope, $scope, $routeParams, Sprint) {

    // Get the sprint
    var sprintId = parseInt($routeParams.sprintId);

    Sprint.getSprint(sprintId).then(
        function(sprint) {
            $scope.sprint = sprint;
        },
        function(reason) {
            // TODO : Show a nice error to the user
            console.log('Impossible to get the story');
        });
}]);