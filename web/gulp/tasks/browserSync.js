/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp */

var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('browserSync', ['build'], function () {
  browserSync({
    notify: false,
    // Customize the BrowserSync console logging prefix
    logPrefix: 'sync',
    server: {
      baseDir: [global.DIRS.DEBUG],
      middleware: [historyApiFallback]
    },
    port: 3001,
    directory: true,
    browser: [
      'google chrome'
    ]
  });
});
