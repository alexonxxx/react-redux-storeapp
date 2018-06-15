import { combineReducers } from 'redux';

import products from './products';
import views from './views';
import cart from './cart';

const reducer = combineReducers({ products, views, cart });

export default reducer;
