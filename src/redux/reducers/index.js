import { combineReducers } from "redux";
import modalReducer from "./Modal";
import dataCensorReducer from "./DataCensor";
import drawerReducerAddNew from "./Drawer/AddNew";
import { drawerReducerEdit } from "./Drawer/Edit";
import { sortReducer } from "./Sort";

export const allReducers = combineReducers({
  openModal: modalReducer,
  openDrawerAddNew: drawerReducerAddNew,
  openDrawerEdit: drawerReducerEdit,
  getDataCensor: dataCensorReducer,
  sortByName: sortReducer,
});
