export const searchSong = (payload) =>{
    return {
        type : "SONG/SEARCH_SONG",
        payload
    }
}
export const addSong = (payload)=>{
    return {
        type : "SONG/ADD_SONG",
        payload
    }
}

export const editSong = (payload)=>{
    console.log(payload)
    return {
        type : "SONG/EDIT_SONG",
        payload
    }
}

export const deleteSong = (payload)=>{
    return {
        type : "SONG/DELETE_SONG",
        payload
    }
}

export const setListSong = (payload)=>{
    return {
        type : "SONG/SET_LIST_SONG",
        payload
    }
}