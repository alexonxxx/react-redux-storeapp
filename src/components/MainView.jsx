import React, { Component } from 'react';
import ProductList from './ProductList';

class MainView extends Component {
  render() {
    return (
      <div>
        <h1>List of Available Products</h1>
        <ProductList products={this.props.productList} />
      </div>
    );
  }
}

export default MainView;
