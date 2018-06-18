import React, { Component } from 'react';

class TotalItems extends Component {
  render() {
    return (
      <div>
        <h3 style={{ display: 'inline-block' }}>
          {this.props.totalItems} items
        </h3>
      </div>
    );
  }
}

export default TotalItems;
