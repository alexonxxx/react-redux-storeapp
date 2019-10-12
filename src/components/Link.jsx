import React, { Component } from 'react';

class Link extends Component {
  onClick = event => {
    this.props.onClick();
  };

  render() {
    return (
      <a href="" onClick={this.onClick}>
        {this.props.children}
      </a>
    );
  }
}

export default Link;
