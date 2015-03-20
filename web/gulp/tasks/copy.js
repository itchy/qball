/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp, $ */

var concat = require('gulp-concat-sourcemap');

var scriptsWorking = global.DIRS.SCRIPTS_COMPILED + '/**/*.js';
var scriptsDest = global.DIRS.DEBUG + '/scripts';

var vendorSrc = global.DIRS.APP + '/scripts/vendor/**/*.js';
var vendorWorking = global.DIRS.DEBUG + '/scripts';

var fontAwesomeFontSrc = './node_modules/font-awesome/fonts/**';
var fontsSrc = global.DIRS.APP + '/fonts/**';
var fontsDest = global.RELEASE
  ? global.DIRS.RELEASE_ASSETS + '/fonts'
  : global.DIRS.DEBUG + '/fonts';

var htmlSrc = global.DIRS.APP + '/*.html';
var htmlDest = global.DIRS.DEBUG;

// Don't need this, because of usemin task
//var htmlDest = global.RELEASE
//  ? global.DIRS.RELEASE_ASSETS
//  : global.DIRS.DEBUG;

var otherSrc = [
  './app/favicon.ico'
];
var otherDest = global.RELEASE
  ? global.DIRS.RELEASE_ASSETS
  : global.DIRS.DEBUG;


gulp.task('copy-scripts', function () {
  return gulp.src(scriptsWorking)
    .pipe(gulp.dest(scriptsDest));
});

gulp.task('copy-vendor', function () {
  return gulp.src(vendorSrc)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(vendorWorking));
});

gulp.task('copy-fonts', function () {
  return gulp.src([
    fontsSrc,
    fontAwesomeFontSrc
  ])
    .pipe(gulp.dest(fontsDest));
});

gulp.task('copy-other', function () {
  return gulp.src(otherSrc)
    .pipe(gulp.dest(otherDest));
});

gulp.task('copy-html', function () {
  return gulp.src(htmlSrc)
    .pipe($.if($.util.env.stripCss, $.replace('build:css styles/app.css', 'build:css')))
    .pipe($.if(global.RELEASE !== 'production', $.htmlReplace({'css': ''})))
    .pipe(gulp.dest(htmlDest));
});

gulp.task('copy-to-public', ['set-vars'], function () {
  return gulp.src(fontsWorking + '/**')
    .pipe(gulp.dest(fontsDist));
});
