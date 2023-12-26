
const initialState = {
    searchText : "",
    listSong:[]
}

const listSongReducer = (state = initialState,action)=>{
    switch(action.type){
        case "SONG/ADD_SONG":{
            return {
                ...state,
                listSong:[...state.listSong,action.payload]
            }
        }
        
        case "SONG/SET_LIST_SONG":{
            return {
                ...state,
                listSong:[...action.payload]
            }
        }
        case "SONG/SEARCH_SONG":{
            return {
                ...state,
                searchText : action.payload
            }
        }
        case "SONG/EDIT_SONG":{
            const arr = state.listSong.map((item)=>{
                if(item.id == action.payload.id){
                    return {
                        key:item.key,
                        ...action.payload
                    }
                }
                return item;
            })
            return {
                ...state,
                listSong:[...arr]
            }
        }
        case "SONG/DELETE_SONG":{
            const list = [...state.listSong];
            return {
                ...state,
            }
        }
        default:{
            return state;
        }

    }
}

export default listSongReducer