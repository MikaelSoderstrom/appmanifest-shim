(function (root) {
    'use strict';

    if ('appmanifest' in root) {
        return;
    }

    var appmanifest = root.appmanifest = {};

    appmanifest.protototype.loadManifest = function () {
        console.log('Testing! :D');
    };

})(window);