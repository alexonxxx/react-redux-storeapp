import React, { Component } from 'react';

class TotalPriceCart extends Component {
  render() {
    return (
      <h2 style={{ textAlign: 'right', paddingRight: '3em' }}>
        Total price = {this.props.totalPrice} €
      </h2>
    );
  }
}

export default TotalPriceCart;
