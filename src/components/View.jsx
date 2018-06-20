import React, { Component } from 'react';
import MainView from './MainView';
import StateCart from '../containers/StateCart';
import StateProductDetail from '../containers/StateProductDetail';

class View extends Component {
  render() {
    switch (this.props.view) {
      case 'main':
        return <MainView />;
      case 'cart':
        return <StateCart />;
      case 'detail':
        return <StateProductDetail itemId={this.props.itemId} />; //`Detail of ${this.props.itemId}`;
      default:
        return `Unknown view "${this.props.view}"`;
    }
  }
}

export default View;
