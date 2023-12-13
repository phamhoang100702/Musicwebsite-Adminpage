import React, { useState } from "react";
import { Button, Modal, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions/admin/censor/showModal";
const ShowInfoModal = (props) => {
  const selectedItem = props.itemSelected;

  const open = useSelector((state) => state.openModal.open);
  const dispatch = useDispatch();
  const handleOk = (e) => {
    console.log(e);
    dispatch(closeModal());
  };
  const handleCancel = (e) => {
    console.log(e);
    dispatch(closeModal());
  };
  return (
    <>
      <Modal
        title="Info Censor"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{
          disabled: true,
        }}
        okButtonProps={{
          disabled: false,
        }}
      >
        {selectedItem && (
          <>
            <Space>
              <Space.Compact direction="vertical" size="large">
                <Typography>Name: {selectedItem.name.last}</Typography>
                <Typography>ID : {selectedItem.name.last}</Typography>
                <Typography>Role: {selectedItem.name.last}</Typography>
              </Space.Compact>
              <Space.Compact direction="vertical">
                <Typography>Address : {selectedItem.name.last}</Typography>
                <Typography>Phone : {selectedItem.name.last}</Typography>
                <Typography>Email : {selectedItem.name.last}</Typography>
              </Space.Compact>
              <Typography>Status : {selectedItem.name.last}</Typography>
            </Space>
          </>
        )}
      </Modal>
    </>
  );
};
export default ShowInfoModal;
