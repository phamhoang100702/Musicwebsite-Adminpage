import { json } from "react-router-dom";
import { songUrl } from "../../url";
import { s3Url } from "../../url";
export const addSong = async (file, song) => {
  var form = new FormData();
  console.log(song);
  form.append("sound", file.sound);
  form.append("lyric", file.lyric);
  form.append("avatar", file.avatar);
  await fetch(s3Url, {
    method: "POST",
    mode: "cors",
    "Content-Type": "multipart/form-data",
    body: form,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
      }
    })
    .then((data) => {
      console.log(data.object);
      song = {
        ...song,
        fileSound: data.object[0],
        fileLyric: data.object[1],
        avatar: data.object[2],
      };
      if (data.object) {
        return data.object;
      }
    });

  addSongNotFile(song);
};

export const addSongNotFile = (song) => {
  let listCategory = song.categories.map((category) => {
    let arr = category.split(";");
    return {
      id: arr[1],
    };
  });

  let listSinger = song.singers.map((singer) => {
    let arr = singer.split(";");
    return {
      id: arr[1],
    };
  });
  song = {
    ...song,
    categories: listCategory,
    singers: listSinger,
  };
  fetch(songUrl, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(song),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return null;
      }
    })
    .then((data) => {
      if (data) {
        return data.object;
      }
    }).catch((error)=>{
        console.log(error)
    })
};
