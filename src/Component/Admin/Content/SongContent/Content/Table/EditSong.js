import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { useSelector,useDispatch } from 'react-redux';


import { editSong } from '../../../../../../redux/actions/admin/song/EditSong';
import EditForm from './EditForm';
const EditSong = ({record}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const showDrawer = () => {
    dispatch(editSong(record))
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Edit Song" placement="right" onClose={onClose} open={open} size='small' >
        <EditForm/>
      </Drawer>
    </>
  );
};
export default EditSong;