import React, { Component } from 'react';
import LineItem from './LineItem';

class ListLineItems extends Component {
  render() {
    return (
      <div>
        <h1>List of Cart</h1>
        <div style={{ background: '#49DD8E', padding: '1em .5em' }}>
          {this.props.itemList.map(lineItem => (
            <LineItem lineItem={lineItem} />
          ))}
        </div>
      </div>
    );
  }
}

export default ListLineItems;
