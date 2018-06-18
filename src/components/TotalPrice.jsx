import React, { Component } from 'react';

class TotalPrice extends Component {
  render() {
    return (
      <div>
        <h3 style={{ display: 'inline-block' }}>{this.props.totalPrice} €</h3>
      </div>
    );
  }
}

export default TotalPrice;
