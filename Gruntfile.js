'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    grunt.loadNpmTasks('grunt-mocha-test');

    require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/mocha/**/*.js']
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: [
                    'app/templates.js',
                    'app/require.js',
                    'app/modules/temp/temp.js'
                ],
            },
            all: [
                'Gruntfile.js',
                'src/**/*.js',
            ]
        },
        uglify: {
            dist: {
                options: {
                    report: 'min'
                },
                files: [
                    'src/**/*.js'
                ]
            }
        }
    });

    grunt.registerTask('default', function () {
        grunt.task.run([
            'jshint',
            'mochaTest'
        ]);
    });
};