import { Button, Card, Dropdown, Flex, Space } from "antd";
import Search from "antd/es/input/Search";

import React from "react";
import ListCensor from "./ListCensor";
import FormAddNewCensor from "./FormAddNewCencor";
import { useDispatch } from "react-redux";
import { openDrawer } from "../../../../redux/actions/showDrawer";

const onSearch = (value, _e, info) => console.log(info?.source, value);

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Name
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Gender
      </a>
    ),
  },
];
export const OverviewCensor = () => {
  const handleAddNewCensor = () => {
    dispatch(openDrawer());
  };

  const dispatch = useDispatch();
  return (
    <Card
      type="inner"
      title="Censor Management"
      extra={
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Dropdown menu={{ items }} placement="bottomLeft">
            <Button>Short by</Button>
          </Dropdown>
          <Space direction="vertical">
            <Search
              placeholder="search name censor"
              onSearch={onSearch}
              style={{
                width: 200,
              }}
            />
          </Space>
          <Button type="primary" onClick={handleAddNewCensor}>
            Add new
          </Button>
          <FormAddNewCensor />
        </div>
      }
    >
      <ListCensor />
    </Card>
  );
};
