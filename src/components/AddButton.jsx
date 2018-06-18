import React, { Component } from 'react';

class AddButton extends Component {
  onClick = event => {
    event.preventDefault();
    this.props.onClick();
  };

  render() {
    return (
      <button style={{ background: '#FFD52E' }} onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default AddButton;
