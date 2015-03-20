var vinylPaths = require('vinyl-paths');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('clean', function () {

  if (global.RELEASE) {
    runSequence('clean-release');
  } else {
    runSequence('clean-dev');
  }
});

gulp.task('clean-dev', function () {
  gulp.src([
    global.DIRS.DEBUG + '/**/*',
    global.DIRS.SCRIPTS_COMPILED + '/**/*'
  ], {read: false})
    .pipe($.debug({title: 'DEBUG:'}))
    .pipe(vinylPaths(del));
});

gulp.task('clean-release', function () {
  gulp.src([
    global.DIRS.DEBUG + '/**/*',
    global.DIRS.SCRIPTS_COMPILED + '/**/*'
  ], {
    read: false
  })
    .pipe($.debug({title: 'DEBUG:'}))
    .pipe(vinylPaths(del));

  del(global.DIRS.RELEASE_ASSETS + '/**/*', {
    force: true
  });

});
