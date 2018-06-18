import React, { Component } from 'react';

class LineItem extends Component {
  render() {
    return (
      <div
        style={{
          background: 'white',
          padding: '0.5em 1em',
          margin: '0.5em 1em',
          display: 'flex',
          alignItems: 'flex-start'
        }}
      >
        <img
          src={this.props.lineItem.image}
          alt={this.props.lineItem.name}
          style={{ maxWidth: '4em', marginRight: '1em' }}
        />
        <div style={{ flex: '1' }}>
          <h4 style={{ margin: '0' }}>{this.props.lineItem.name}</h4>
          <h3 style={{ margin: '0' }}>
            {this.props.lineItem.accumulatedPrice}€
          </h3>
          <h3 style={{ margin: '0' }}>{this.props.lineItem.quantity}</h3>
        </div>
      </div>
    );
  }
}

export default LineItem;
