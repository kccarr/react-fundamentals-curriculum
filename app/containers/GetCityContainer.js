var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps () {
    return {
      direction: 'column'
    }
  },
  propTypes: {
    direction: PropTypes.string
  },
  getInitialState () {
    return {
      city: ''
    }
  },
  handleSubmitCity: function (e) {
    e.preventDefault()
    this.context.router.push('/forecast/' + this.state.city)
  },
  handleUpdateCity: function (e) {
    this.setState({
      city: e.target.value
    })
  },
  render: function () {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
});

module.exports = GetCityContainer;