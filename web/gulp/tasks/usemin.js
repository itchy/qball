/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp, $ */

gulp.task('usemin', function() {
  var assets = $.useref.assets();
  var SRC = global.DIRS.DEBUG + '/*.html';
  var DEST = global.DIRS.RELEASE;

  return gulp.src(SRC)
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.minifyCss()))
    .pipe($.rev())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(gulp.dest(DEST));
});
