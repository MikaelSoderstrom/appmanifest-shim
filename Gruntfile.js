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
                '<%= options.app %>/*.js',
                '<%= options.app %>/modules/**/*.js',
            ]
        },
        uglify: {
            dist: {
                options: {
                    report: 'min'
                },
                files: {
                    '<%= options.dist %>/require.js': [
                        '<%= options.app %>/bower_components/requirejs/require.js'
                    ]
                }
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