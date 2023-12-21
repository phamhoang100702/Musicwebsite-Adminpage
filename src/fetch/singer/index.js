import { singerUrl } from "../url";

const listSinger = [];
export const fetchSinger = () => {
  fetch(singerUrl, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
      }
    })
    .then((data) => {
      listSinger = [...data.object];
      return data.object;
    });
};

export {  listSinger };
