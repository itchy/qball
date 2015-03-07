
module.exports = {
  isJson: function(string) {
    var json;

    try {
      json = window.JSON.parse(string);
      return true;
    } catch(e) {
      return false;
    }
  }
};
