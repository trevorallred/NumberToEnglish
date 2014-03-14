module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            all: {
                files: ['*.js'],
                tasks: ['jshint:all', 'karma:unit:run'] // , 'karma:watcher:run'
            }
        },

        karma: {
            unit: {
                options: {
                    files: ['*.spec.js'],
                    browsers: ['PhantomJS'],
                    background: true
                },
            }
        },

        jshint: {
            all: ['**/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

// 'watch:scripts', 
    grunt.registerTask('default', ['karma:unit:run']);
};
