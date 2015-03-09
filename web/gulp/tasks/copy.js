/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp, $ */

var browserSync = require('browser-sync');

var scriptsSrc = global.DIRS.APP + '/scripts/**/*.js';
var scriptsWorking = global.DIRS.SCRIPTS_COMPILED;

var fontAwesomeFontSrc = './node_modules/font-awesome/fonts/**';
var fontsWorking = global.DIRS.DEBUG + '/fonts';
var fontsDist = global.DIRS.RELEASE + '/fonts';

var htmlSrc = global.DIRS.APP + '/**/*.html';
var htmlWorking = global.DIRS.DEBUG;

var otherSrc = [
  './app/favicon.ico'
];
var otherWorking = global.DIRS.DEBUG;


gulp.task('copy.scripts', function () {
  return gulp.src(scriptsSrc)
    .pipe($.changed(scriptsWorking))
    .pipe(gulp.dest(scriptsWorking))
    .pipe(gulp.dest(fontsDist));
});

gulp.task('copy.fonts', function () {
  return gulp.src([
    fontAwesomeFontSrc
  ])
    .pipe(gulp.dest(fontsWorking));
});

gulp.task('copy.fonts.dist', function () {
  return gulp.src([
    fontsWorking + '/**'
  ])
    .pipe(gulp.dest(fontsDist));
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
