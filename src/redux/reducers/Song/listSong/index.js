const initialState = {
  searchText: "",
  listSong: [],
};

const listSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SONG/ADD_SONG": {
      const arr = [...state.listSong];
      console.log(action.payload);
      const data1 = {
        ...action.payload,
        key: state.listSong.length + 1,
      };
      if (state.listSong.length < 10) {
        const arr1 = [...arr, data1];
        return {
          ...state,
          listSong: [...arr1],
        };
      }
      return {
        ...state,
        listSong: [...arr],
      };
    }
    case "SONG/SET_LIST_SONG": {
      return {
        ...state,
        listSong: [...action.payload],
      };
    }
    case "SONG/SEARCH_SONG": {
      return {
        ...state,
        searchText: action.payload,
      };
    }
    case "SONG/EDIT_SONG": {
      const arr = state.listSong.map((item) => {
        if (item.id == action.payload.id) {
          return {
            key: item.key,
            ...action.payload,
          };
        }
        return item;
      });
      return {
        ...state,
        listSong: [...arr],
      };
    }
    case "SONG/DELETE_SONG": {
      const list = state.listSong.filter((song) => {
        return song.id != action.payload;
      });
      console.log(list);
      return {
        ...state,
        listSong: [...list],
      };
    }
    default: {
      return state;
    }
  }
};

export default listSongReducer;
