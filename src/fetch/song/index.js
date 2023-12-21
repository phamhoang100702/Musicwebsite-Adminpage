import { songUrl } from "../url";

let listSongData;
export const listSong = () => {
  fetch(songUrl, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        response.json();
      }
    })
    .then((data)=>{
        listSongData = data.object;
        return data.object;
    });
};

export {listSongData}