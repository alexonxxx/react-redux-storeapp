const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";

const incrementQuantity = productId => ({
  type: INCREMENT_QUANTITY,
  productId
});

export { incrementQuantity, INCREMENT_QUANTITY };
