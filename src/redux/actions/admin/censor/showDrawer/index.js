// DRAWERActions.js

export const openDrawer = () => ({
  type: "SHOW_DRAWER",
  payload: true,
});

export const closeDrawer = () => ({
  type: "HIDE_DRAWER",
  payload: false,
});
