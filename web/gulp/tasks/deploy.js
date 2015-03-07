/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp */
//var remoteExec = require('remote-exec');
//var auth = require('../../.deployauth.json');
//
//gulp.task('deploy', function () {
//  var host = $.util.env.host
//    ? $.util.env.host
//    : 'adapter-manager-01';
//
//  $.util.log('Begin deploying to ' + host);
//
//  var remoteOptions = {
//    port: 22,
//    username: auth.keyAdapterApi01.user,
//    password: auth.keyAdapterApi01.pass
//  };
//
//  remoteExec(host, 'rm -fr /opt/jasper/www/', remoteOptions, function(err){
//    if (err) {
//      $.util.log('Failed to clear `www` folder on ' + host);
//      return gulp.src('build/**/*');
//    } else {
//      $.util.log('Cleared `www` folder on ' + host);
//      return deploy();
//    }
//  });
//
//  function deploy() {
//    $.util.log('Deploying to ' + host);
//
//    return gulp.src('build/**/*')
//      .pipe($.sftp({
//        authFile: '.deployauth.json',
//        host: host,
//        remotePath: '/opt/jasper/www',
//        auth: 'keyAdapterApi01'
//      }));
//  }
//
//});
