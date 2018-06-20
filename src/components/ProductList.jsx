import React, { Component } from 'react';
import StateProductListItem from '../containers/StateProductListItem';

class ProductList extends Component {
  render() {
    return (
      <div style={{ background: '#49DD8E', padding: '1em .5em' }}>
        {this.props.products.map(product => (
          <StateProductListItem product={product} />
        ))}
      </div>
    );
  }
}

export default ProductList;
