import React, { Component } from 'react';
import MainView from './MainView';

class View extends Component {
  render() {
    switch (this.props.view) {
      case 'main':
        return <MainView />;
      case 'detail':
        return `Detail of ${this.props.itemId}`;
      default:
        return `Unknown view "${this.props.view}"`;
    }
  }
}

export default View;
