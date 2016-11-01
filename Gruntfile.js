module.exports = function(grunt) {

	"use strict";

	grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		'string-replace': {
			dist: {
				options: {
					replacements: [
						{
							pattern: /{{VERSION}}/g,
							replacement: '<%= pkg.version %>'
						}
					]
				},
				files: {
				'dist/eventsource.js': ['javascript/src/eventsource.js'],
				'dist/browserify-eventsource.js': ['javascript/src/browserify-eventsource.js']
				}
			}
		},

		uglify: {
			dist: {
				files: {
					'dist/eventsource.min.js': ['dist/eventsource.js']
				}
			}
		},

		jasmine: {
			src: "dist/eventsource.js",
			options: {
				specs: [
					"specs/*-spec.js",
				],
				helpers: [
					"specs/helpers/*.js",
				]
			}
		},
	});

	grunt.registerTask('default', ['string-replace', 'uglify']);
};
