import { createStore } from 'redux';

import appReducer from './tendaOnlineReducer';
import freezeReducer from './freezeReducer';

const compositeReducer = (state, action) =>
  freezeReducer(appReducer(state, action));

const createTendaOnlineStore = initialState => {
  return createStore(
    compositeReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export default createTendaOnlineStore;
