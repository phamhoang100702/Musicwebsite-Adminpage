import { QuestionCircleOutlined } from "@ant-design/icons";
import React from "react";
import { Button, Popconfirm } from "antd";
export const PopDelete = () => (
  <Popconfirm
    title="Delete"
    description="Are you sure to delete ?"
    icon={
      <QuestionCircleOutlined
        style={{
          color: "red",
        }}
      />
    }
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);
