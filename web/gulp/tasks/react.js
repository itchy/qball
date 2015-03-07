/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp, $ */

var handleErrors = require('../util/handleErrors');
var SRC = global.DIRS.APP + '/scripts/**/*.js*';
var DIST = global.DIRS.SCRIPTS_COMPILED;

gulp.task('react', function () {
  return gulp.src(SRC)
    .pipe($.changed(DIST, {
      extension: '.js'
    }))
    .pipe($.react({
      harmony: true
    })
      .on('error', handleErrors))
    .pipe(gulp.dest(DIST));
});
