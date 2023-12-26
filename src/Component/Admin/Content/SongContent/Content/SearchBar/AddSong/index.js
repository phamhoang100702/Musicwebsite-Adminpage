import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import AddForm from './Form';
const AddSong = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} style={{backgroundColor:"#23ba9f"}}>
        ADD
      </Button>
      <Drawer title="New Song" placement="right" onClose={onClose} open={open} width={"500px"} >
        <AddForm  onSubmit ={onClose}/>
      </Drawer>
    </>
  );
};
export default AddSong;