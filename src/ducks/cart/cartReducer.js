import { DECREMENT_QUANTITY, DROP_LINE_ITEM, INCREMENT_QUANTITY } from '.';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case DECREMENT_QUANTITY: {
      const { productId } = action;
      const index = state.findIndex(lineItem => lineItem.id === productId);
      if (index === -1) return state;

      const lineItem = state[index];
      if (lineItem.quantity === 1) return state;

      const copy = [...state];
      copy[index] = {
        ...lineItem,
        quantity: lineItem.quantity - 1
      };
      return copy;
    }

    case DROP_LINE_ITEM: {
      const { productId } = action;
      return state.filter(lineItem => lineItem.id !== productId);
    }

    case INCREMENT_QUANTITY: {
      const { productId } = action;

      const index = state.findIndex(lineItem => lineItem.id === productId);
      if (index === -1) return [...state, { id: productId, quantity: 1 }];

      const lineItem = state[index];
      const copy = [...state];
      copy[index] = {
        ...lineItem,
        quantity: lineItem.quantity + 1
      };
      return copy;
    }

    default:
      return state;
  }
};

export default cartReducer;
