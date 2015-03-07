if (require) {

  var fs = require('fs');

  var INI = function(){
    var self = this;
    var eol = process.platform === 'win32' ? '\r\n' : '\n';

    var obj = {}
      , regex = {
        section: {
          key: /^\s*\[\s*([^\]]*)\s*\]\s*$/
          , arr: /^\s*\[\s*([^\]]*)\s*\]\[\]\s*$/
          , obj: /^\s*\[\s*([^\]]*)\s*\]\[(\w+)\]\s*$/
        }
        , param: {
          key: /^\s*([\w\.\-\_]+)\s*=\s*(.*?)\s*$/
          , arr: /^\s*([\w\.\-\_]+)\[\]\s*=\s*(.*?)\s*$/
          , obj: /^\s*([\w\.\-\_]+)\[(\w+)\]\s*=\s*(.*?)\s*$/
        }
        , comment: [
          /^\s*;.*$/
          , /^\s*#.*$/
          , /^\s*\/\/.*$/
        ]
      };

    self.encoding = 'utf-8';
    self.curSection = {};

    function safe (val) {
      return ( typeof val !== 'string'
        || val.match(/[\r\n]/)
        || val.match(/^\[/)
        || (val.length > 1
          && val.charAt(0) === '"'
          && val.slice(-1) === '"')
        || val !== val.trim() )
        ? JSON.stringify(val)
        : val.replace(/;/g, '\\;');
    }

    function unsafe (val, doUnesc) {
      val = (val || '').trim();

      if (val.charAt(0) === '"' && val.slice(-1) === '"') {
        try { val = JSON.parse(val); } catch (_) {}
      } else {
        // walk the val to find the first not-escaped ; character
        var esc = false;
        var unesc = '';
        for (var i = 0, l = val.length; i < l; i++) {
          var c = val.charAt(i);

          if (esc) {
            if (c === '\\' || c === ';') {
              unesc += c;
            } else {
              unesc += '\\' + c;
            }
            esc = false;
          } else if (c === ';') {
            break;
          } else if (c === '\\') {
            esc = true;
          } else {
            unesc += c;
          }
        }
        if (esc) {
          unesc += '\\';
        }
        return unesc;
      }
      return val;
    }

    function dotSplit (str) {
      return str.replace(/\1/g, '\2LITERAL\\1LITERAL\2')
        .replace(/\\\./g, '\1')
        .split(/\./).map(function (part) {
          return part.replace(/\1/g, '\\.')
            .replace(/\2LITERAL\\1LITERAL\2/g, '\1');
        });
    }

    var encode = function(obj, section) {
      var children = []
        , out = '';

      Object.keys(obj).forEach(function (k, _, __) {
        var val = obj[k];
        if (val && Array.isArray(val)) {
          val.forEach(function(item) {
            out += safe(k + '[]') + '=' + safe(item) + '\n';
          });
        }
        else if (val && typeof val === 'object') {
          children.push(k);
        } else {
          out += safe(k) + '=' + safe(val) + eol;
        }
      });

      if (section && out.length) {
        out = '[' + safe(section) + ']' + eol + out;
      }

      children.forEach(function (k, _, __) {
        var nk = dotSplit(k).join('\\.');
        var child = encode(obj[k], (section ? section + '.' : '') + nk);
        if (out.length && child.length) {
          out += eol;
        }
        out += child;
      });

      return out;
    };

    var addParam = function(pType, cfg, match){
      switch(self.curSection.type){
        case "key":
          if(pType === 'key') cfg[self.curSection.name][match[1]] = match[2];
          else if(pType === 'arr') {
            if(typeof(cfg[self.curSection.name][match[1]]) === 'undefined'){
              cfg[self.curSection.name][match[1]] = [];
              self.curSection.pIndex = 0;
            }
            cfg[self.curSection.name][match[1]][self.curSection.pIndex] = match[2];
            self.curSection.pIndex++;
          }
          else if(pType === 'obj'){
            if(typeof(cfg[self.curSection.name][match[1]]) === 'undefined'){
              cfg[self.curSection.name][match[1]] = {};
            }
            cfg[self.curSection.name][match[1]][match[2]] = match[3];
          }
          break;
        case "arr":
          if(pType === 'key') {
            if(typeof(cfg[self.curSection.name][self.curSection.index]) === 'undefined'){
              cfg[self.curSection.name][self.curSection.index] = {};
            }
            cfg[self.curSection.name][self.curSection.index][match[1]] = match[2];
          }
          else if(pType === 'arr'){
            if(typeof(cfg[self.curSection.name][self.curSection.index][match[1]]) === 'undefined'){
              cfg[self.curSection.name][self.curSection.index][match[1]] = [];
              self.curSection.pIndex = 0;
            }
            cfg[self.curSection.name][self.curSection.index][match[1]][self.curSection.pIndex] = match[2];
            self.curSection.pIndex++;
          }
          else if(pType === 'obj'){
            if(typeof(cfg[self.curSection.name][self.curSection.index][match[1]]) === 'undefined'){
              cfg[self.curSection.name][self.curSection.index][match[1]] = {};
            }
            cfg[self.curSection.name][self.curSection.index][match[1]][match[2]] = match[3];
          }
          break;
        case "obj":
          if(pType === 'key') {
            if(typeof(cfg[self.curSection.name][self.curSection.key]) === 'undefined'){
              cfg[self.curSection.name][self.curSection.key] = {};
            }
            cfg[self.curSection.name][self.curSection.key][match[1]] = match[2];
          }
          else if(pType === 'arr'){
            if(typeof(cfg[self.curSection.name][self.curSection.key][match[1]]) === 'undefined'){
              cfg[self.curSection.name][self.curSection.key][match[1]] = [];
              self.curSection.pIndex = 0;
            }
            cfg[self.curSection.name][self.curSection.key][match[1]][self.curSection.pIndex] = match[2];
            self.curSection.pIndex++;
          }
          else if(pType === 'obj'){
            if(typeof(cfg[self.curSection.name][self.curSection.key][match[1]]) === 'undefined'){
              cfg[self.curSection.name][self.curSection.key][match[1]] = {};
            }
            cfg[self.curSection.name][self.curSection.key][match[1]][match[2]] = match[3];
          }
          break;
      }
      return;
    };

    var parse = function(data){
      var lines = data.split(/\r\n|\r|\n/)
        , cfg = {};

      lines.forEach(function(line){
        // Check for comments
        regex.comment.forEach(function(patt){
          if(patt.test(line)){
            return;
          }
        });

        // Check for a section
        Object.keys(regex.section).forEach(function(type){
          if(regex.section[type].test(line)){
            var match = line.match(regex.section[type]);
            self.curSection.type = type;
            self.curSection.name = match[1];
            switch(type){
              case "key":
                if(typeof(cfg[self.curSection.name]) === 'undefined'){
                  cfg[self.curSection.name] = {};
                }
                break;
              case "arr":
                if(typeof(cfg[self.curSection.name]) === 'undefined'){
                  cfg[self.curSection.name] = [];
                  self.curSection.index = 0;
                  cfg[self.curSection.name][0] = {};
                } else {
                  self.curSection.index++;
                }
                break;
              case "obj":
                if(typeof(cfg[self.curSection.name]) === 'undefined') {
                  cfg[self.curSection.name] = {};
                  cfg[self.curSection.name][match[2]] = {};
                }
                self.curSection.key = match[2];
                break;
            }
          }
        });


        // Check for param
        Object.keys(regex.param).forEach(function(type){
          if(regex.param[type].test(line)){
            var match = line.match(regex.param[type]);
            switch(type){
              case "key":
                if(typeof(self.curSection.name) === 'undefined'){
                  cfg[match[1]] = match[2];
                } else {
                  addParam(type, cfg, match);
                }
                break;
              default:
                addParam(type, cfg, match);
                break;
            }
          }
        });
      });
      return cfg;
    };

    self.parse = function(file, fn){
      if(!fn){
        return self.parseSync(file);
      }
      fs.readFile(file, self.encoding, function(err, data){
        if(err) {
          fn(err);
        } else {
          fn(null, parse(data));
        }
      });
    };

    self.parseSync = function(file){
      return parse(fs.readFileSync(file, self.encoding));
    };

    self.write = function(file, contents, section, fn) {
      if (!fn) {
        return self.writeSync(file, contents, section);
      }

      try {
        fs.writeFile(file, encode(contents, section), function(err) {
          if (err) {
            console.log('Error:', err);
            fn(err);
          } else {
            fn(null);
          }
        });
      } catch (e) {
        console.log('Error:', e);
      }
    };

    self.writeSync = function(file, contents, section) {
      try {
        fs.writeFileSync(file, encode(contents, section));
      } catch (e) {
        console.log('Error:', e);
      }
    };

  };

  module.exports = (function() {
    return new INI();
  }());
}
