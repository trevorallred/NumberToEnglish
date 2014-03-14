module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        basePath: './',
        files: [
            'main.js',
            'main.spec.js'
        ],
 
        // test results reporter to use
        reporters: ['dots'],
 
        autoWatch: true,
        browsers: ['PhantomJS'],
        captureTimeout: 10000,
        singleRun: false
    });
};