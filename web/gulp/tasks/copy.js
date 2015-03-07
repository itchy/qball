/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp, $ */

var browserSync = require('browser-sync');

var scriptsSrc = global.DIRS.APP + '/scripts/**/*.js';
var scriptsWorking = global.DIRS.SCRIPTS_COMPILED;

var fontAwesomeFontSrc = './node_modules/font-awesome/fonts/**';
var fontsSrc = global.DIRS.APP + '/fonts/**';
var fontsWorking = global.DIRS.DEBUG + '/fonts';

var htmlSrc = global.DIRS.APP + '/**/*.html';
var htmlWorking = global.DIRS.DEBUG;

var otherSrc = [
  './app/favicon.ico'
];
var otherWorking = global.DIRS.DEBUG;


gulp.task('copy.scripts', function () {
  return gulp.src(scriptsSrc)
    .pipe($.changed(scriptsWorking))
    .pipe(gulp.dest(scriptsWorking));
});

gulp.task('copy.fonts', function () {
  return gulp.src([
    fontsSrc,
    fontAwesomeFontSrc
  ])
    .pipe(gulp.dest(fontsWorking));
});

gulp.task('copy.other', function () {
  return gulp.src(otherSrc)
    .pipe(gulp.dest(otherWorking));
});

gulp.task('copy.html', function () {
  return gulp.src(htmlSrc)
    .pipe(gulp.dest(htmlWorking))
    .pipe(browserSync.reload({
      stream:true
    }));
});

gulp.task('release', function () {
  return gulp.src(global.DIRS.DEBUG + '/**/*')
    .pipe(gulp.dest(global.DIRS.RELEASE));
});
