'use strict';

(function (root) {
    if ('appmanifest' in root) {
        return;
    }

    var appmanifest = root.appmanifest = {};

    appmanifest.protototype.loadManifest = function () {
        console.log('Testing! :D');
    };

})(window);