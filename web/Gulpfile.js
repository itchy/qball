/*jshint indent: 2, node: true, nomen: true, browser: true*/

/*
	Gulpfile.js
	===========
	Rather than manage one giant configuration file responsible
	for creating multiple tasks, each task has been broken out into
	its own file in gulp/tasks. Any file in that folder gets automatically
	required by the loop in ./gulp/index.js (required below).

	To add a new task, simply add a new task file to gulp/tasks.
*/

global.$ = require('gulp-load-plugins')();
global.gulp = require('gulp');
global.path = require('path');

//global.gulp.plumbedSrc = function( src ){
//	return gulp.src.apply(gulp, Array.prototype.slice.call(arguments, 0))
//		.pipe($.plumber());
//};

// Some global vars
global.RELEASE = !!$.util.env.release;           // Minimize and optimize during a build?
global.GOOGLE_ANALYTICS_ID = 'UA-XXXXX-X';       // https://www.google.com/analytics/web/
global.AUTOPREFIXER_BROWSERS = [                 // https://github.com/ai/autoprefixer
	'ie >= 10',
	'ie_mob >= 10',
	'ff >= 30',
	'chrome >= 34',
	'safari >= 7',
	'opera >= 23',
	'ios >= 7',
	'android >= 4.4',
	'bb >= 10'
];
global.isWatching = false;

// Client-specific settings
global.NW_VERSION = '0.11.6';
global.DIRS = {
  APP: './app',
  DEBUG: './.debug',
  RELEASE: './build/releases/' + NW_VERSION,
  SCRIPTS_COMPILED: './.compiled'
};

// Load separate tasks
require('./gulp');