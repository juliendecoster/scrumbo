'use strict';

angular.module('scrumbo')
.directive('drag', ['$rootScope', '$timeout', function($rootScope, $timeout) {

    // Define actions for events
    function dragStart(event, element, dragStyle) {
        // We wait a little bit so the browser has
        // the time to copy the original element
        // before we hide it
        $timeout(function() {
            element.addClass(dragStyle);
        }, 100);
    }

    function dragEnd(event, element, dragStyle) {
        element.removeClass(dragStyle);
    }

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            attrs.$set('draggable', 'true');

            // Get the attributes from the element
            scope.dragData  = scope[attrs['drag']];
            scope.dragStyle = attrs['dragStyle'];

            // Bind the events to the elements
            element.bind('dragstart', function(event) {
                $rootScope.draggedElement = scope.dragData;
                dragStart(event, element, scope.dragStyle);
            });

            element.bind('dragend', function(event) {
                dragEnd(event, element, scope.dragStyle);
            });
        },
    }
}])
.directive('drop', ['$rootScope', function($rootScope) {

    // Define actions for events
    function dragEnter(event, element, dropStyle) {
        event.preventDefault();
        element.addClass(dropStyle);
    }

    function dragLeave(event, element, dropStyle) {
        element.removeClass(dropStyle);
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event, element, dropStyle) {
        event.preventDefault();
        element.removeClass(dropStyle);
    }

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            // Get the attributes from the element
            scope.dropData   = scope[attrs['drop']];
            scope.dropStyle  = attrs['dropStyle'];
            scope.afterStory = scope[attrs['dropPositionAfter']];

            // Bind the events to the elements
            element.bind('dragenter', function(event) {
                dragEnter(event, element, scope.dropStyle);
            });

            element.bind('dragleave', function(event) {
                dragLeave(event, element, scope.dropStyle);
            });

            element.bind('dragover', dragOver); // Needed to be a valid drop element

            element.bind('drop', function(event) {
                drop(event, element, scope.dropStyle);
                $rootScope.$broadcast('dropEvent', $rootScope.draggedElement, scope.dropData, scope.afterStory);
            });
        },
    }
}]);