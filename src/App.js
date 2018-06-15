import React from 'react';
import { Provider } from 'react-redux';
import createTendaOnlineStore from './ducks';
import initialState from './initialState';
import Page from './components/Page';

// Flexbox Styles:
// https://philipwalton.github.io/solved-by-flexbox/

var store = createTendaOnlineStore(initialState);

const App = () => (
  <Provider store={store}>
    <Page />
  </Provider>
);

export default App;
