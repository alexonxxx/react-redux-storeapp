import React, { Component } from 'react';
import StateLink from '../containers/StateLink';

class ProductListItem extends Component {
  render() {
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
          src={this.props.product.image}
          alt={this.props.product.name}
          style={{ maxWidth: '4em', marginRight: '1em' }}
        />
        <div style={{ flex: '1' }}>
          <h4 style={{ margin: '0' }}>{this.props.product.name}</h4>
          <h3 style={{ margin: '0' }}>{this.props.product.price}€</h3>
          <button style={{ background: '#FFD52E' }} onClick={() => 'XXX'}>
            BUY (if none in cart), ADD (if any in cart) XXX
          </button>
          <StateLink view="detail" itemId={this.props.product.id}>
            details...
          </StateLink>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
