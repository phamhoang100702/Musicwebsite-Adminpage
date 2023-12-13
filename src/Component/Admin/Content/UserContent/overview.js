import React from "react";
import ListUsers from "./ListUsers";
import { Button, Card, Space } from "antd";
import Search from "antd/es/input/Search";
import FormAddNewUser from "./FormAddNewUser";
import FormEditUser from "./FormEditUser";
import { useDispatch } from "react-redux";
import { openDrawerUser } from "../../../../redux/actions/admin/user/showDrawer";

export const OverviewUser = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const dispatch = useDispatch();
  const handleAddNewUser = () => {
    dispatch(openDrawerUser());
  };
  return (
    <>
      <Card
        type="inner"
        title="User Management"
        extra={
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Space direction="vertical">
              <Search
                placeholder="search name user"
                onSearch={onSearch}
                style={{
                  width: 200,
                }}
              />
            </Space>
            <Button type="primary" onClick={handleAddNewUser}>
              Add new
            </Button>
          </div>
        }
      >
        <ListUsers />
        <FormAddNewUser />
        <FormEditUser />
      </Card>
    </>
  );
};
