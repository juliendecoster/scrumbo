'use strict';

// Declare app level module which depends on views, and components
angular.module('scrumbo', [
  'ngRoute',
  'scrumbo.sprintboard',
  'scrumbo.sprintServices',
  // 'myApp.view2',
  // 'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/sprintboard'});
}]);
