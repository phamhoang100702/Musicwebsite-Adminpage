import { get, put, del, post } from "../../utils";

// them cai creator
export const savePlaylistForUser = async (object) => {
  const playlist = {
    ...object,
    role:"USER"
  }
  return await post("playlist", object);
};

export const savePlaylistForMainPage = async (object) => {
  const playlist = {
    ...object,
    role:"MAINPAGE"
  }
  return await post("playlist", object);
};



export const getFavoritePlaylistByUserId = async (userId) => {
  return await get(`user/${userId}/playlist/favorite`);
};

export const getAllPlaylistByUserId = async (userId) => {
  return await get(`user/${userId}/playlist`);
};

// main page user/ censor
export const getAllMainpagePlayList = async () => {
  return await get("playlist/mainpage");
};
// search for user 
export const searchAllPlaylistByNameForUser = async (name) => {
  return await get(`user/playlist?name=${name}`);
};

export const updatePlaylist = async (object) => {
  return await put("playlist", object);
};

export const deletePlaylist = async (object) => {
  return await del(`playlist/${object}`);
};

export const getAllSongByPlaylist = async (object) => {
  return await get(`/playlist/${object}/song`);
};

export const addSongToPlaylist = async (playlistId, songId) => {
  return await post(`/playlist/${playlistId}/song/${songId}`);
};

export const removeSongToPlaylist = async (playlistId, songId) => {
  return await del(`/playlist/${playlistId}/song/${songId}`);
};
