export const openDrawerEdit = (isOpen, data) => ({
  type: "OPEN_DRAWER_EDIT",
  payload: {
    open: isOpen,
    data: data,
  },
});

export const closeDrawerEdit = (isOpen, data) => ({
  type: "CLOSE_DRAWER_EDIT",
  payload: {
    open: isOpen,
    data: data,
  },
});
