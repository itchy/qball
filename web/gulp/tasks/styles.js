/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp, $ */

var handleErrors = require('../util/handleErrors');

var SRC = global.DIRS.APP + '/styles/app.scss';
var DEST = global.RELEASE
  ? global.DIRS.RELEASE_ASSETS + '/styles/'
  : global.DIRS.DEBUG + '/styles/';

gulp.task('styles', function () {
  return gulp.src([SRC])
    .pipe($.if(!global.RELEASE, $.sourcemaps.init()))
    .pipe($.sass()
      .on('error', handleErrors))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe($.if(!global.RELEASE, $.sourcemaps.write('maps')))
    .pipe(gulp.dest(DEST));

});
