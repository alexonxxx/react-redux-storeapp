const DROP_LINE_ITEM = "DROP_LINE_ITEM";

const dropLineItem = productId => ({
  type: DROP_LINE_ITEM,
  productId
});

export { dropLineItem, DROP_LINE_ITEM };
