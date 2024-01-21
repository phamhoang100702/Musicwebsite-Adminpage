import { combineReducers } from "redux";
import modalReducer from "./Modal";
import dataCensorReducer from "./DataCensor";
import drawerReducerAddNew from "./Drawer/AddNew";
import { drawerReducerEdit } from "./Drawer/Edit";
import { sortReducer } from "./Sort";
import listSongReducer from "./Song/listSong";
import authReducer from "./auth"
import searchSongReducer from "./Song/search";

export const allReducers = combineReducers({
  openModal: modalReducer,
  openDrawerAddNew: drawerReducerAddNew,
  openDrawerEdit: drawerReducerEdit,
  getDataCensor: dataCensorReducer,
  sortReducer: sortReducer,
  listSongReducer : listSongReducer,
  authReducer : authReducer 
});
