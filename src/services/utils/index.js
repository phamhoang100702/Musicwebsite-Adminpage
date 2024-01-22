import { getLocalStorage } from "../localstorage";

const API_DOMAIN = "http://localhost:9000/api/v1/";

export const get = async (path) => {
  
  const response = await fetch(API_DOMAIN + path, {
    method: "GET",
    headers:  {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getLocalStorage("user-token")}`,
    },
  });
  return await response.json();
};

export const post = async (path, options = {}) => {
  console.log("token :  ", getLocalStorage("user-token"));
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers:  {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLocalStorage("user-token")}`,
    },
    body: JSON.stringify(options),
  });
  return await response.json();
};

export const put = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PUT",
   headers:  {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLocalStorage("user-token")}`,
    },
    body: JSON.stringify(options),
  });
  return await response.json();
};

export const del = async (path) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getLocalStorage("user-token")}`,
    },
  });
  if (!response.ok) {
    return await response.json();
  }
};

export const uploadFile = async (path, formData) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getLocalStorage("user-token")}`,
    },
    body: formData,
  });
  return response.json();
};
