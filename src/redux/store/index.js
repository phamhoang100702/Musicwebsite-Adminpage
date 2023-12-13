import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { allReducers } from "../reducers";

export const store = createStore(allReducers);
