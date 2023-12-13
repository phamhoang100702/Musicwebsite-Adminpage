// modalActions.js

export const openModal = () => ({
  type: "SHOW_MODAL",
  payload: true,
});

export const closeModal = () => ({
  type: "HIDE_MODAL",
  payload: false,
});
