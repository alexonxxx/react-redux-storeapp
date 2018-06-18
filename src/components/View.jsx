import React, { Component } from 'react';
import MainView from './MainView';
import ListLineItems from './ListLineItems';
import StateCart from '../containers/stateCart';
import StateProducts from '../containers/StateProducts';

class View extends Component {
  render() {
    switch (this.props.view) {
      case 'main':
        return <StateProducts />;
      case 'detail':
        return `Detail of ${this.props.itemId}`;
      case 'cart':
        return <StateCart />;
      default:
        return `Unknown view "${this.props.view}"`;
    }
  }
}

export default View;
