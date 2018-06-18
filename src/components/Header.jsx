import React, { Component } from 'react';
import StateLink from '../containers/StateLink';
import StateTotalPrice from '../containers/StateTotalPrice';
import StateTotalItems from '../containers/StateTotalItems';

class Header extends Component {
  render() {
    return (
      <div
        style={{
          background: '#AE99FF',
          color: '333',
          marginTop: '0.5em',
          padding: '0.5em 1em',
          display: 'flex'
        }}
      >
        <strong style={{ flex: '1' }}>
          <StateLink view="main">Online Fruit Shop</StateLink>
        </strong>
        <span>
          <StateLink style={{ display: 'inline-block' }} view="cart">
            <StateTotalItems />
            <StateTotalPrice />
          </StateLink>
        </span>
      </div>
    );
  }
}

export default Header;
