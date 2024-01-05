import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { allReducers } from "../reducers";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({reducer: allReducers});
