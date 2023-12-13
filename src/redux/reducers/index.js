import { combineReducers } from "redux";
import categoryReducer from "./category";

export const allReducers = combineReducers({
    category: categoryReducer,
})

export default allReducers