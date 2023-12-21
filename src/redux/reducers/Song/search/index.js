
const initialState = {
    search: {

    }
}

const searchSongReducer = (state = initialState,action)=>{
    switch(action.type){
        case "SONG/SEARCH_SONG":{
            return {
                ...state,
                search: action.payload
            }
        }
        default:{
            return state;
        }

    }
}

export default searchSongReducer