import React, { Component } from 'react';
import StateView from '../containers/StateView';
import Header from './Header';

class Page extends Component {
  render() {
    return (
      <div
        style={{
          fontFamily:
            '-apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
          fontSize: '17px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '1.7',
          textSizeAdjust: '100%',
          width: '714px',
          maxWidth: '95%',
          margin: 'auto'
        }}
      >
        <Header /> <StateView />
      </div>
    );
  }
}

export default Page;
