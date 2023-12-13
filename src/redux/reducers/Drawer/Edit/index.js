const initialState = {
  open: false,
  data: null,
};

export const drawerReducerEdit = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_DRAWER_EDIT":
      return {
        ...state,
        open: true,
        data: action.payload.data,
      };
    case "USER_OPEN_DRAWER_EDIT":
      return {
        ...state,
        open: true,
        data: action.payload.data,
      };
    case "CLOSE_DRAWER_EDIT":
      return {
        ...state,
        open: false,
        data: null,
      };
    case "USER_CLOSE_DRAWER_EDIT":
      return {
        ...state,
        open: false,
        data: null,
      };

    default:
      return state;
  }
};
