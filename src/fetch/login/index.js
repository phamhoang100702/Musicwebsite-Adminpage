import { json } from "react-router-dom";
import { loginUrl } from "../url";

export const loginFetch = (object) => {
  const object1 = JSON.stringify(object);

  fetch(loginUrl, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: object1,
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      return data.object;
    });
};

export const listSongFetch = (name) => {
  fetch("http://localhost:9000/api/v1");
};
