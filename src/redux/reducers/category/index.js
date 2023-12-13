const initState = {
  category: "",
  categories: [],
};

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case "category/setCategory":
      return {
        ...state,
        category: action.payload,
      };
    case "category/addCategory":
      return {
        ...state,
        categories: [...state.categories,action.payload]
      };
    case "category/removeCategory":
        const newCategories = [...state.categories];
        newCategories.splice(action.payload,1);
      return {
        ...state,
        category: action.payload,
      };
    default :{
        return state;
    }
  }
};


export default categoryReducer;