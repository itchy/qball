var React = require('react/addons');
var DocumentTitle = require('react-document-title');

var Root = React.createClass({
  getInitialState: function() {
    return {
      name: 'my friend!'
    };
  },

  render: function() {
    return (
      <DocumentTitle title="Weave Client">

        <div className="page">
          Hello, {this.state.name}!
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = Root;
