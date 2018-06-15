import { createSelector } from "reselect";
import listLineItems from "./listLineItems";

const getTotalItems = createSelector(listLineItems, lineItems =>
  lineItems.reduce((count, lineItem) => count + lineItem.accumulatedPrice, 0)
);

export default getTotalItems;
