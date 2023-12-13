// DRAWERActions.js

export const openDrawerUser = () => ({
  type: "USER_SHOW_DRAWER",
  payload: true,
});

export const closeDrawerUser = () => ({
  type: "USER_HIDE_DRAWER",
  payload: false,
});
