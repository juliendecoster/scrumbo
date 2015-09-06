'use strict';

angular.module('scrumbo').directive('sprintcard', function(Sprint) {

    return {
        templateUrl: 'components/sprintcard/sprintcard.html',
        bindToController: true,
        scope: {
            sprint: '=set',
        },
        controllerAs: 'ctrl',
        controller: function() {
            
        },
    };
});