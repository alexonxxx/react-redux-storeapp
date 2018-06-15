import { createSelector } from "reselect";

const getProducts = state => state.products;
const getCart = state => state.cart;

const listLineItems = createSelector(getProducts, getCart, (products, cart) =>
  cart.map(lineItem => ({
    ...products[lineItem.id],
    ...lineItem,
    accumulatedPrice: lineItem.quantity * products[lineItem.id].price
  }))
);

export default listLineItems;
