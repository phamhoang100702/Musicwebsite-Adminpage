import { combineReducers } from "redux";
import modalReducer from "./Modal";
import drawerReducer from "./Drawer";

export const allReducers = combineReducers({
  openModal: modalReducer,
  openDrawer: drawerReducer,
});
