const Auth_Domain = "http://localhost:9000/auth/";

const post = async (path, options = {}) => {
  const response = await fetch(Auth_Domain + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  return await response.json();
};

export const loginAdmin = async (object) => {
  return await post("login/admin", object);
};

export const loginUser = async (object) => {
  return await post("login/user", object);
};


export const registerCensor = async (object) => {
  return await post("register/censor", object);
};

export const registerSinger = async (object) => {
  return await post("register/singer", object);
};


export const registerUser = async (object) => {
  return await post("register/user", object);
};