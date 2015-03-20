var React = require('react/addons');
var DocumentTitle = require('react-document-title');

var Login = React.createClass({
  render: function() {
    return (
      <DocumentTitle title="Login">
        <div className="page-login">
          <h1>LOGIN</h1>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = Login;
