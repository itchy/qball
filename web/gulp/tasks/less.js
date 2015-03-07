/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp, $ */

var handleErrors = require('../util/handleErrors');
var browserSync = require('browser-sync');

var SRC = global.DIRS.APP + '/styles/app.less';
var DEBUG = global.DIRS.DEBUG + '/styles/';

gulp.task('less', function () {
  return gulp.src([SRC])
    .pipe($.sourcemaps.init())
    .pipe($.less({
      strictMath: true
    })
      .on('error', handleErrors))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe($.sourcemaps.write('maps'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest(DEBUG));

});
