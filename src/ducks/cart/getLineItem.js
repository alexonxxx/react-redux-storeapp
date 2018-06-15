import { createSelector } from "reselect";
import listLineItems from "./listLineItems";

const getProductId = (state, { productId }) => productId;

const getLineItem = createSelector(
  listLineItems,
  getProductId,
  (lineItems, productId) =>
    lineItems.find(lineItem => lineItem.id === productId)
);

export default getLineItem;
