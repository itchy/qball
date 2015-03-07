if (require) {

  // Weave Client Updater Module
  var fs = require('fs');
  var path = require('path');
  var request = require('request');
  var progress = require('request-progress');
  var exec = require('child_process').exec;
  var AdmZip = require('adm-zip');
  var events = require('events');
  var exePath = process.execPath;

  var Updater = new events.EventEmitter();
  var dlRequest = null;

  var getExtension = function(filename) {
    return filename.toLowerCase().split('.').pop();
  };

  var progressUpdate = function(progress) {
    Updater.emit('downloadProgress', progress);
  };

  var writeToFile = function(path, contents) {
    fs.appendFile(path, contents, function(err) {
      if (err) {
        return {
          result: false,
          error: err
        };
      } else {
        return {
          result: true
        };
      }
    });
  };

  var writeLineToLog = function(path, contents) {
    writeToFile(path, contents + '\n');
  };


  /**
   * Fetches the new update file, downloads it and returns the filename.
   *
   * @param slug
   * @param workstation
   * @param password
   * @param release
   * @param cb
   * @returns {*}
   */
  var fetchUpdate = function(baseUrl, slug, workstation, password, release, cb) {
    if (!baseUrl || !slug || !workstation || !password || !release || typeof release !== 'object') {
      throw new Error('Required parameters missing. The following required parameter was expected, but not found, `slug`[string], `workstation`[string], `password`[string], `release`[object]');
    }

    // We download the file to a temp file, and then rename it once it has downloaded properly.
    var filename = Date.now() + '_' + release.version.toString();
    var fullPathTmp = path.resolve(release.saveTo, filename + '.~' + getExtension(release.file));
    var fullPathFinal = path.resolve(release.saveTo, filename + '.' + getExtension(release.file));
    var lastPercent = -1;

    if (dlRequest) {
      dlRequest.abort();
      dlRequest = null;
    }

    if (release.file && release.file.length > 0) {

      dlRequest = request('http://' + workstation + ':' + password + '@' + slug + '.' + baseUrl + release.file);

      progress(dlRequest, {
        throttle: 500,  // Throttle the progress event to xxxxms, defaults to 1000ms
        delay: 0      // Only start to emit after xxxxms delay, defaults to 0ms
      })

        .on('progress', function(state) {
          if (state.percent !== lastPercent) {
            lastPercent = state.percent;
            progressUpdate(state.percent);
          }
        })

        .on('error', function(err) {  // for request...
          cb(err, null);
        })

        .pipe(fs.createWriteStream(fullPathTmp, {
          flags: 'w',
          mode: 0777
        }))
        .on('error', function(err) {  // for pipe...
          cb(err, null);
        })

        .on('close', function() {
          // Clear Request object
          dlRequest = null;

          // Rename the tmp file
          fs.rename(fullPathTmp, fullPathFinal, function(err) {
            if (err) {
              cb(err, null);
            } else {
              cb(null, fullPathFinal);
            }
          });
        });

    } else {
      if (dlRequest) {
        cb('Download already in progress', null);
      } else {
        cb('No file was found in the passed release object.', null);
      }
    }

  };  // fetchUpdate


  var unzipFile = function(fileName, outputDir) {
    if ((!fileName || fileName.length === 0) || (!outputDir || outputDir.length === 0)) {
      throw new Error('Required parameters missing. The following required parameters were expected, but one or more were not found, `fileName`[string], `outputDir`[string]');
    }

    var logDir = path.dirname(fileName);

    writeLineToLog(path.resolve(logDir, 'client.log'), new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' | Extracting zip file, ' + fileName + ', to ' + outputDir);

    var zip = new AdmZip(fileName);

    zip.extractAllTo(
      outputDir,
      true
    );

  };  // unzipFile

  var copyZipToNwFile = function(fileName, sourceDir, targetDir, cb) {
    if ((!fileName || fileName.length === 0) || (!sourceDir || sourceDir.length === 0) || (!targetDir || targetDir.length === 0)) {
      throw new Error('Required parameters missing. The following required parameters were expected, but one or more were not found, `fileName`[string], `sourceDir`[string], `targetDir`[string]');
    }

//    var cbCalled = false;
    var sourceFile = path.resolve(sourceDir, fileName);
    var targetFile = path.resolve(targetDir, 'assets.wv');

    writeLineToLog(path.resolve(sourceDir, 'client.log'), new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' | Overwriting ' + targetFile + ' file with ' + sourceFile + '\n');

    fs.rename(sourceFile, targetFile, function(err, result) {
      if (!err) {
        cb && cb(null, result);
      } else {
        cb && cb(err, null);
      }
    });

  };  // copyZipToNwFile

  var execMsi = function(fullFilename, cb) {
    if (!fullFilename || fullFilename.length === 0) {
      throw new Error('Required parameters missing. The following required parameter was expected, but not found, `fullFilename`[string]');
    }

    var outputDir = path.dirname(fullFilename);
    var logFile = path.resolve(outputDir, 'install.log');

    fullFilename = fullFilename.replace(/\//g, '\\\\');

    function launch() {
      var child;
      var cmd;

      // TODO: Run msi silently? msiexec /i ' + fullFilename + ' /quiet /qn /norestart /l*v ' + logFile + ' UPGRADE="true"
      cmd = 'msiexec /i "' + fullFilename + '" /le "' + logFile + '" UPGRADE="true"';

      // Write out msiexec command
      writeLineToLog(path.resolve(outputDir, 'client.log'), new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' | Launching msi with the following command: ' + cmd);

      child = exec(cmd);
      child.unref();

      // Exit app...
      cb(null, 'exit');
    }

    fs.exists(fullFilename, function(exists) {
      if (exists) {
        launch();
      } else {
        cb(null, 'notfound');
      }
    });
  };  // execMsi

  var execExe = function(fullFilename, args,   cb) {
    if (!fullFilename || fullFilename.length === 0) {
      throw new Error('Required parameters missing. The following required parameter was expected, but not found, `fullFilename`[string]');
    }

    var outputDir = path.dirname(fullFilename);

    args = args || '';
    fullFilename = fullFilename.replace(/\//g, '\\\\');

    function launch() {
      var child;
      var cmd;

      cmd = 'cmd /c ""' + path.resolve(path.dirname(exePath), 'restart_app.bat') + '" 1 "' + fullFilename + '" ' + args + '"';

      // Write out command
      writeLineToLog(path.resolve(outputDir, 'client.log'), new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' | Launching exe with the following command: ' + cmd);

      child = exec(cmd);
      child.unref();

      // Exit app...
      cb(null, 'exit');

    }

    fs.exists(fullFilename, function(exists) {
      if (exists) {
        launch();
      } else {
        cb(null, 'notfound');
      }

    });
  };  // execExe

  var execDmg = function(fullFilename, cb) {
    if (!fullFilename || fullFilename.length === 0) {
      throw new Error('Required parameters missing. The following required parameter was expected, but not found, `fullFilename`[string]');
    }

    var outputDir = path.dirname(fullFilename);

    function launch() {
      var child;
      var cmd;

      cmd = 'hdiutil mount "' + fullFilename + '"';

      // Write out command
      writeLineToLog(path.resolve(outputDir, 'client.log'), new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' | Launching dmg with the following command: ' + cmd);

      child = exec(cmd);
      // Exit app...
      cb(null, 'exit');

    }

    fs.exists(fullFilename, function(exists) {
      if (exists) {
        launch();
      } else {
        cb(null, 'notfound');
      }

    });
  };  // execDmg

  Updater.writeToFile = writeToFile;
  Updater.fetchUpdate = fetchUpdate;
  Updater.unzipFile = unzipFile;
  Updater.copyZipToNwFile = copyZipToNwFile;
  Updater.execMsi = execMsi;
  Updater.execExe = execExe;
  Updater.execDmg = execDmg;

  // Export
  module.exports = Updater;
}
