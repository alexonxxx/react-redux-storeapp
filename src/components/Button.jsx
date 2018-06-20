import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button
        style={{ background: '#FFD52E' }}
        onClick={this.props.onClick}
        disabled={this.props.disable}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
