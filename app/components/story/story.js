'use strict';

angular.module('scrumbo').directive('story', function(Story) {

    return {
        templateUrl: 'components/story/story.html',
        bindToController: true,
        scope: {
            story: '=set',
        },
        controllerAs: 'ctrl',
        controller: function() {
            this.saveStory = function(story) {
                Story.saveStory(story).then(function(story_id) {
                    if (story.ref == undefined) {
                        story.ref = '#' + story_id;
                    }
                    story.editing = false;
                }, function(reason) {
                    // TODO : Show a nice error to the user
                    console.log('Impossible to save the story');
                });
            };
        },
    };
});