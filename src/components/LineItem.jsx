import React, { Component } from 'react';
import StateDecrementButton from '../containers/StateDecrementButton';
import StateIncrementButton from '../containers/StateIncrementButton';
import StateDropButton from '../containers/StateDropButton';

class LineItem extends Component {
  render() {
    const product = this.props;
    return (
      <div
        style={{
          background: 'white',
          padding: '0.5em 1em',
          margin: '0.5em 1em',
          display: 'flex',
          alignItems: 'flex-start'
        }}
      >
        <img
          src={product.lineItem.image}
          alt={product.lineItem.name}
          style={{ maxWidth: '4em', marginRight: '1em' }}
        />
        <div style={{ flex: '1' }}>
          <h4 style={{ margin: '0' }}>Product name: {product.lineItem.name}</h4>
          <h3 style={{ margin: '0' }}>
            Price by unit: {product.lineItem.price}€
          </h3>
          <h3 style={{ margin: '0' }}>
            Accumulated price: {product.lineItem.accumulatedPrice}€
          </h3>
          <h3 style={{ margin: '0' }}>Quantity: {product.lineItem.quantity}</h3>
          <StateIncrementButton
            product={product.lineItem}
            children="Increase"
          />
          <StateDecrementButton
            product={product.lineItem}
            children="Decrease"
          />
          <StateDropButton product={product.lineItem} children="Remove" />
        </div>
      </div>
    );
  }
}

export default LineItem;
