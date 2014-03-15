module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            'main.js',
            'main.spec.js'
        ],

        reporters: ['dots'],

        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        captureTimeout: 10000,
        singleRun: false
    });
};