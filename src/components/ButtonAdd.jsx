import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button style={{ background: '#FFD52E' }} onClick={this.props.onClick}>
        {this.props.getLineItem ? this.props.children : 'Buy'}
      </button>
    );
  }
}

export default Button;
