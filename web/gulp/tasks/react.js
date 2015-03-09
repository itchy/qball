/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp, $ */

var handleErrors = require('../util/handleErrors');
var SRC = global.DIRS.APP + '/scripts/**/*.js*';
var DEST = global.DIRS.SCRIPTS_COMPILED;

gulp.task('react', function () {
  return gulp.src(SRC)
    .pipe($.changed(DEST, {
      extension: '.js'
    }))
    .pipe($.react({
      harmony: true
    })
      .on('error', handleErrors))
    .pipe(gulp.dest(DEST));
});
