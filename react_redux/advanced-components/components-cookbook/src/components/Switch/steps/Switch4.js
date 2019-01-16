import React, { PropTypes } from 'react';

const CREDITCARD = 'Creditcard';
const BTC = 'Bitcoin';

const Switch = React.createClass({
  getInitialState() {
    return {
      payMethod: BTC
    };
  },

  select(choice) {
    return (evt) => {
      this.setState({
        payMethod: choice
      })
    }
  },

  renderChoice(choice) {
    return (
      <div className="choice"
           onClick={this.select(choice)}>
        {choice}
      </div>
    )
  },

  render() {
    return (
      <div className="switch">
        {this.renderChoice(CREDITCARD)}
        {this.renderChoice(BTC)}
        Pay with: {this.state.payMethod}
      </div>
    )
  }
});

module.exports = Switch;
