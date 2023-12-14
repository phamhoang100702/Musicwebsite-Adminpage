import Song from "../../../Component/Song/Song";

const initialState = {
    editSong: {

    }
}

const editSongReducer = (state = initialState,action)=>{
    switch(action.type){
        case "SONG/EDIT_SONG":{
            return {
                editSong: Song
            }
        }
        default:{
            return state;
        }

    }
}

export default editSongReducer