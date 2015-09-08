'use strict';

// Declare app level module which depends on views, and components
angular.module('scrumbo', [
  'ngRoute',
  'ngResource',
  'scrumbo.sprintboard',
  'scrumbo.planningboard',
  'scrumbo.sprintServices',
  'scrumbo.storyServices',
  'scrumbo.backlogServices',
  // 'focus',
  // 'myApp.view2',
  // 'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/planningboard'});
}]);
