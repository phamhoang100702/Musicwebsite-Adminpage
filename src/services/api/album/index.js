import {get,put,post,del} from "../../utils"

// m phai them ca singer vao cai tk tao ra album ay 
export const addAlbum = async (object) =>{
    return await post("album",object);
}

export const getAllAlbum =async ()=>{
    return await get("album")
}

export const getAlbumById = async(id)=>{
    return await get(`album/${id}`)
}

export const delAlbumById = async(id)=>{
    return await get(`album/${id}`);
}


export const addSongToAlbum = async(albumId,albumId)=>{
    return await get(`album/${albumId}/song/${albumId}`);
}

export const removeSongToAlbum = async(albumId,albumId)=>{
    return await del(`album/${albumId}/song/${albumId}`);
}

// /album/{id}/song
export const getAllSongByAlbumId = async(albumId)=>{
    return await get(`album/${albumId}/song`);
}

export const getAllAlbumBySingerId = async(singerId)=>{
    return await get(`singer/${id}/album`)
}

