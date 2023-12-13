import React from "react";
import ListUsers from "./ListUsers";
import { Button, Card, Space } from "antd";
import Search from "antd/es/input/Search";

export const OverviewUser = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const handleAddNewUser = () => {};
  return (
    <>
      <Card
        type="inner"
        title="Censor Management"
        extra={
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Space direction="vertical">
              <Search
                placeholder="search name censor"
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
      </Card>
    </>
  );
};
