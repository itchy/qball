if (require) {

  var reg_ = new require('winreg');
  var APP_KEY = '\\Software\\Weave Connect\\Client\\Parameters';
  var APP_KEY_DELETE = '\\Software\\Weave connect';
  var UNINSTALL_KEY = '\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Weave Client';
  var DISPLAY_VERSION = 'DisplayVersion';

  var deleteInstalledVersion = function(fn) {
    if (!fn) {
      throw new Error('Callback required!');
    }

    var regKey = reg_({
      hive: reg_.HKLM,
      key:  UNINSTALL_KEY
    });

    regKey.remove(DISPLAY_VERSION, function (err) {
      if (!err) {
        fn(null, true);
      } else {
        fn(err, false);
      }
    });

  };  // deleteInstalledVersion

  var Reg = function(){
    var self = this;

    self.getClientConfig = function(fn) {
      var config = null;

      if (!fn) {
        throw new Error('Callback required!');
      }

      var regKey = reg_({
        hive: reg_.HKLM,
        key:  APP_KEY
      });

      regKey.values(function (err, items) {
        if (!err) {
          config = {};

          for (var i in items) {

            switch (items[i].name.toUpperCase()) {
              case 'PRACTICE':
                config.practice = items[i].value;
                break;
              case 'WORKSTATION':
                config.workstation = items[i].value;
                break;
              case 'PASSWORD':
                config.password = items[i].value;
                break;
            } // switch

          } // for

          if (!config.practice || !config.workstation || !config.password) {
            config = null;
            fn('Unable to find the config in the registry', config);
          } else {
            fn(null, config);
          }
        } else {
          fn('Unable to find the config in the registry', config);
        }
      });

    };  // getClientConfig


    self.getPmsInfo = function(hive, key, value, fn) {
      var out_ = null;

      if (!fn) {
        throw new Error('Callback required!');
      }

      var regKey = reg_({
        hive: reg_[hive],
        key:  key
      });

      regKey.values(function (err, items) {
        if (!err) {

          for (var i in items) {
            if (items[i].name.toUpperCase() === value.toUpperCase()) {
              out_ = items[i].value;
              break;
            }
          } // for

          if (!out_) {
            fn('Unable to find the value in the registry', out_);
          } else {
            fn(null, out_);
          }
        } else {
          fn('An error occured while trying to read the registry key values', out_);
        }
      });

    };  // getPmsInfo


    self.deleteClientParamKey = function(fn) {
      if (!fn) {
        throw new Error('Callback required!');
      }

      var regKey = reg_({
        hive: reg_.HKLM,
        key:  APP_KEY_DELETE
      });

      regKey.erase(function (err) {
        console.log('args: ' + arguments);

        if (!err) {
          fn(null, true);
        } else {
          fn(err, false);
        }
      });

    };  // deleteClientParamKey

    self.updateInstalledVersion = function(version, fn) {
      if (!fn) {
        throw new Error('Callback required!');
      }

      var regKey = reg_({
        hive: reg_.HKLM,
        key:  UNINSTALL_KEY
      });

      deleteInstalledVersion(function(err) {
        if (!err) {
          regKey.set(DISPLAY_VERSION, reg_.REG_SZ, version, function (err) {
            if (!err) {
              fn(null, true);
            } else {
              fn(err, false);
            }
          });
        } else {
          fn(err, false);
        }
      });

    };  // updateInstalledVersion


  };  // Reg

  module.exports = (function() {
    return new Reg();
  }());
}
