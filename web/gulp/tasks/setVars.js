
gulp.task('set-vars', function (cb) {
  var exec = require('child_process').exec;

  function getGitHash() {
    exec('git rev-parse --short HEAD', function(error, stdout){
      if (error) {
        $.util.log(error);
        $.util.log('Can not get a version number using `git rev-parse --short HEAD`');
      } else {
        global.GITHASH = stdout.trim();
        $.util.log('GIT HASH: ' + global.GITHASH);
        cb();
      }
    });
  }

  function getCommitCount() {
    exec('git rev-list HEAD --count', function(error, stdout){
      if (error) {
        $.util.log(error);
        $.util.log('Can not get a version number using `git rev-list HEAD --count`');
      } else {
        global.VERSION = global.PKG.major + '.' + global.PKG.minor + '.' + stdout.trim();
        global.DIRS.RELEASE = './build/releases/' + NW_VERSION + '/' + VERSION;
        $.util.log('VERSION: ' + global.VERSION);
        getGitHash();
      }
    });
  }

  getCommitCount();
});
