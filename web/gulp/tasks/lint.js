
gulp.task('lint', function() {
  return gulp.src([
    global.DIRS.SCRIPTS_COMPILED + '/**/*.js',
    '!' + global.DIRS.SCRIPTS_COMPILED + '/vendor/**/*.js'
  ])
    .pipe($.jshint('./.jshintrc'))
    .pipe($.jshint.reporter('jshint-stylish'));
});
