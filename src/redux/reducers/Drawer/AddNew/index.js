// DRAWERReducer.js

const initialState = {
  open: false,
};

const drawerReducerAddNew = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_DRAWER":
      return {
        ...state,
        open: true,
      };
    case "HIDE_DRAWER":
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export default drawerReducerAddNew;
