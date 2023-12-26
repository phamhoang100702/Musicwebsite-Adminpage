import {get,put,del,post} from "../../utils"


// them cai creator
export const savePlaylist = async (object) => {
    return await post("playlist",object);
}

export const getFavoritePlaylistByUserId = async (userId)=>{
    return await get(`user/${userId}/playlist/favorite`)
}

export const getAllPlaylistByUserId = async (userId) =>{
    return await get(`user/${userId}/playlist`)
}

export const getAllPlayList = async () =>{
    return await get("playlist");
}

export const updatePlaylist= async(object)=>{
    return await put("playlist",object)
}

export const deletePlaylist = async(object) => {
    return await del(`playlist/${object}`)
}

export const getAllSongByPlaylist = async (object) =>{
    return await get(`/playlist/${object}/song`)
}

export const addSongToPlaylist = async (playlistId,songId) => {
    return await post(`/playlist/${playlistId}/song/${songId}`)
}

export const removeSongToPlaylist = async (playlistId,songId)=>{
    return await del(`/playlist/${playlistId}/song/${songId}`)
}