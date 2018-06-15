const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";

const decrementQuantity = productId => ({
  type: DECREMENT_QUANTITY,
  productId
});

export { decrementQuantity, DECREMENT_QUANTITY };
