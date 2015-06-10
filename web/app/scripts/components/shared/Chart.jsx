var React = require('react/addons');
var C3 = require('c3');

var Chart = React.createClass({
  render: function() {
    return (
      <div className="chart">
        {this.props.name}
      </div>
    );
  }
});

module.exports = Chart;
