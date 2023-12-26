import { createSelector } from "reselect";

export const searchTextSong = (state)=>state.listSongReducer.search;
export const editSong = (state) => state.listSongReducer.editSong;