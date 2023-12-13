export const openDrawerEditUser = (isOpen, data) => ({
  type: "USER_OPEN_DRAWER_EDIT",
  payload: {
    open: isOpen,
    data: data,
  },
});

export const closeDrawerEditUser = (isOpen, data) => ({
  type: "USER_CLOSE_DRAWER_EDIT",
  payload: {
    open: isOpen,
    data: data,
  },
});
