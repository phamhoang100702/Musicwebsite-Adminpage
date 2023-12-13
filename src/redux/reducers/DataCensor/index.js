// DRAWERReducer.js

const initialState = {
  email: "",
  name: "",
  gender: "",
  first: "",
  last: "",
  title: "",
  nat: "",
};

const dataCensorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_CENSOR":
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        gender: action.payload.gender,
        first: action.payload.name.first,
        last: action.payload.name.last,
        title: action.payload.title,
        nat: action.payload.nat,
      };

    default:
      return state;
  }
};

export default dataCensorReducer;
