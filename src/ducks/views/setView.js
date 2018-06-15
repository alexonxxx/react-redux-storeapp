const SET_VIEW = "SET_VIEW";

const setView = (name, itemId) => ({
  type: SET_VIEW,
  view: {
    name,
    itemId
  }
});

export { SET_VIEW, setView };
