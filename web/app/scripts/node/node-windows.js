var exec = require('child_process').exec;

module.exports = {

  /**
   * @method kill
   * @member nodewindows
   * Kill a specific process
   * @param {Number} PID
   * Process ID
   * @param {Boolean} [force=false]
   * Force close the process.
   * @param {Function} [callback]
   */
  kill: function(pid,force,callback){
    if (!pid){
      throw new Error('PID is required for the kill operation.');
    }
    callback = callback || function(){};
    if (typeof force == 'function'){
      callback = force;
      force = false;
    }
    exec("taskkill /PID "+pid+(force==true?' /f':''),callback);
  },

  /**
   * @method list
   * @member nodewindows
   * List the processes running on the server.
   * @param {Function} callback
   * Receives the process object as the only callback argument
   * @param {Boolean} [verbose=false]
   */
  list: function(callback,verbose){
    verbose = typeof verbose == 'boolean' ? verbose : false;
    exec('tasklist /FO CSV'+(verbose==true?' /V':''),function(err,stdout,stderr){
      var p = stdout.split('\r\n');
      var proc = [];
      var head = null;
      while (p.length > 1){
        var rec = p.shift();
        rec = rec.replace(/\"\,/gi,'";').replace(/\"|\'/gi,'').split(';');
        if (head == null){
          head = rec;
          for (var i=0;i<head.length;i++){
            head[i] = head[i].replace(/ /gi,'');
          }
        } else {
          var tmp = {};
          for (var i=0;i<rec.length;i++){
            tmp[head[i]] = rec[i].replace(/\"|\'/gi,'');
          }
          proc.push(tmp);
        }
      }
      callback(proc);
    });
  }

};
