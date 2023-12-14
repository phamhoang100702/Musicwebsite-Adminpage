import { combineReducers } from "redux";
import modalReducer from "./Modal";
import dataCensorReducer from "./DataCensor";
import drawerReducerAddNew from "./Drawer/AddNew";
import { drawerReducerEdit } from "./Drawer/Edit";
import { shortReducer } from "./Short";

export const allReducers = combineReducers({
  openModal: modalReducer,
  openDrawerAddNew: drawerReducerAddNew,
  openDrawerEdit: drawerReducerEdit,
  getDataCensor: dataCensorReducer,
  shortByName: shortReducer,
});
