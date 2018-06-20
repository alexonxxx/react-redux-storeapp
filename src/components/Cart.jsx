import React, { Component } from 'react';
import LineItem from './LineItem';
import StateTotalPrice from '../containers/StateTotalPrice';

class Cart extends Component {
  render() {
    return (
      <div>
        <h1>List of Products in your cart</h1>
        <div style={{ background: '#49DD8E', padding: '1em .5em' }}>
          {this.props.itemsList.map(lineItem => (
            <LineItem lineItem={lineItem} />
          ))}
          <StateTotalPrice />
        </div>
      </div>
    );
  }
}

export default Cart;
