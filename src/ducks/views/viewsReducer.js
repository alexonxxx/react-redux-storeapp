import { SET_VIEW } from ".";

const viewsReducer = (state = { name: "main" }, action) => {
  switch (action.type) {
    case SET_VIEW: {
      const { view } = action;
      return view;
    }
    default:
      return state;
  }
};

export default viewsReducer;
