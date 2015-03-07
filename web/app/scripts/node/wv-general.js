if (require) {

  // Weave Client General Module

  var fs = require('fs');
  var path = require('path');
  var exec = require('child_process').exec;
  var events = require('events');
  var WeaveGeneral = new events.EventEmitter();

  var openPms = function(cmd, cb) {
    if (!cmd || cmd.length === 0) {
      throw new Error('Required parameters missing. The following required parameter was expected, but not found, `cmd`[string]');
    }

    var child;

    console.log('Launching PMS with the following command:', cmd);

    child = exec(cmd);

    child.stdout.on('data', function(d) {
      cb && cb(d, null);
    });

    child.stderr.on('data', function(d) {
      cb && cb(d, null);
    });

    child.on('exit', function(code) {
      cb && cb(null, code);
    });
  };

  var deleteFile = function(fullFilename, cb) {
    if ((!fullFilename || fullFilename.length === 0)) {
      throw new Error('Required parameters missing. The following required parameters were expected, but one or more were not found, `fullFilename`[string]');
    }

    fs.unlink(fullFilename, function(status) {
      if (status === 0) {
        cb && cb(null, true);
      } else {
        cb && cb(status, null);
      }
    });
  };

  var deleteFileSync = function(fullFilename) {
    if ((!fullFilename || fullFilename.length === 0)) {
      throw new Error('Required parameters missing. The following required parameters were expected, but one or more were not found, `fullFilename`[string]');
    }

    fs.unlinkSync(fullFilename);
  };

  var fileExists = function(fullFilename, cb) {
    if ((!fullFilename || fullFilename.length === 0)) {
      throw new Error('Required parameters missing. The following required parameters were expected, but one or more were not found, `fullFilename`[string]');
    }

    fs.exists(fullFilename, function(exists) {
      if (exists) {
        cb && cb(null, true);
      } else {
        cb && cb(null, false);
      }
    });
  };

  var deleteAllFilesOfType = function(dir, type) {
    if (fs.existsSync(dir)) {
      fs.readdirSync(dir).forEach(function(file) {
        var curPath = path.resolve(dir, file);

        if (fs.lstatSync(curPath).isFile() && path.extname(curPath) === '.' + type) { // recurse
          fs.unlinkSync(curPath);
        }
      });
    }
  };


  var deleteFolderRecursive = function(path) {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach(function(file) {
        var curPath = path + '/' + file;

        if (fs.lstatSync(curPath).isDirectory()) { // recurse
          deleteFolderRecursive(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      });

      fs.rmdirSync(path);
    }
  };

  var copyFile = function(fileName, sourceDir, targetDir, deleteSource, cb) {
    if ((!fileName || fileName.length === 0) || (!sourceDir || sourceDir.length === 0) || (!targetDir || targetDir.length === 0)) {
      throw new Error('Required parameters missing. The following required parameters were expected, but one or more were not found, `fileName`[string], `sourceDir`[string], `targetDir`[string]');
    }

    var sourceFile = path.resolve(sourceDir, fileName);
    var targetFile = path.resolve(targetDir, fileName);

    fs.rename(sourceFile, targetFile, function(err, result) {
      if (!err) {
        // If success, and deleteSource, delete source file
        deleteSource && deleteFile(sourceFile);

        cb && cb(null, result);
      } else {
        cb && cb(err, null);
      }
    });

  };  // copyFile

  WeaveGeneral.openPms = openPms;
  WeaveGeneral.deleteFile = deleteFile;
  WeaveGeneral.deleteFileSync = deleteFileSync;
  WeaveGeneral.deleteAllFilesOfType = deleteAllFilesOfType;
  WeaveGeneral.fileExists = fileExists;
  WeaveGeneral.copyFile = copyFile;

  // Export
  module.exports = WeaveGeneral;
}
