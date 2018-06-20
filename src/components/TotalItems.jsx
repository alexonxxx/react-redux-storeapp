import React, { Component } from 'react';

class TotalItems extends Component {
  render() {
    return (
      <h4>
        {this.props.totalItems} items
        <br />
        {this.props.totalPrice} €
      </h4>
    );
  }
}

export default TotalItems;
