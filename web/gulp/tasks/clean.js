
gulp.task('clean', function () {
  return gulp.src([
    '.compiled/*',
    '.debug/*'
  ], {read: false})
    .pipe($.clean());
});
