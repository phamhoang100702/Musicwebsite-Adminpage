const initialState = {
  list: [],
  sortOrder: "asc",
};

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHORT_BY_NAME":
      const sortedList = [...state.list].sort((a, b) => {
        const nameA = a.name.first.toLowerCase();
        const nameB = b.name.first.toLowerCase();
        if (action.payload === "asc") {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      });
      return {
        ...state,
        list: sortedList,
        sortOrder: action.payload,
      };
    default:
      return state;
  }
};
