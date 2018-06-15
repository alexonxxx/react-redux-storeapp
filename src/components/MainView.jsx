import React, { Component } from 'react';
import ProductList from './ProductList';

const replaceByConnectToStateProductsXXX = Object.values(
  require('../initialState.json').products
);

class MainView extends Component {
  render() {
    return (
      <div>
        <h1>List of Available Products</h1>
        <ProductList products={replaceByConnectToStateProductsXXX} />
      </div>
    );
  }
}

export default MainView;
