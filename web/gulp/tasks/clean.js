var vinylPaths = require('vinyl-paths');
var del = require('del');

gulp.task('clean', function () {
  return gulp.src([
    '.compiled/*',
    '.debug/*'
  ], {read: false})
    .pipe(vinylPaths(del));
});

gulp.task('clean-public', function () {
  del('../public/*', {
    force: true
  });
});
