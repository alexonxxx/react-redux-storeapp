import React, { Component } from 'react';
import StateProductList from '../containers/StateProductList';

class MainView extends Component {
  render() {
    return (
      <div>
        <h1>List of Available Products</h1>
        <StateProductList products={this.props.products} />
      </div>
    );
  }
}

export default MainView;
