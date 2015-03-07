/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp */
var browserSync = require('browser-sync');

gulp.task('watch', ['setWatch', 'browserSync'], function () {
  gulp.watch('app/scripts/**/*.jsx', ['react']);
  gulp.watch('app/scripts/**/*.js', ['copy.scripts']);
  gulp.watch('app/less/**/*.less',['less']);
  gulp.watch('app/images/**', ['images']);
  gulp.watch('app/**/*.html', ['copy.html']);
});
