import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { allReducers } from "../reducers";
import { thunk } from "redux-thunk";

export const store = createStore(allReducers);
