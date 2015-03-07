/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp, $ */

var SRC = global.DIRS.APP + '/images/**';
var DEBUG = global.DIRS.DEBUG + '/images';
var browserSync = require('browser-sync');

gulp.task('images', function () {
  return gulp.src(SRC)
    .pipe($.changed(DEBUG)) // Ignore unchanged files
    .pipe($.imagemin()) // Optimize
    .pipe(gulp.dest(DEBUG))
    .pipe(browserSync.reload({stream:true}));
});
