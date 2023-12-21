
const initialState = {
    editSong: {

    },
    listSong:[]
}

const listSongReducer = (state = initialState,action)=>{
    switch(action.type){
        case "SONG/EDIT_SONG":{
            return {
                ...state,
                editSong: action.payload
            }
        }
        default:{
            return state;
        }

    }
}

export default listSongReducer