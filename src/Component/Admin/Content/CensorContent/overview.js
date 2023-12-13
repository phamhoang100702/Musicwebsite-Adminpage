import { Button, Card, Dropdown, Flex, Menu, Space } from "antd";
import Search from "antd/es/input/Search";

import React from "react";
import ListCensor from "./ListCensor";
import FormAddNewCensor from "./FormAddNewCencor";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer } from "../../../../redux/actions/admin/censor/showDrawer";
import FormEditCensor from "./FormEditCensor";
import {
  shortByName,
  sortByName,
} from "../../../../redux/actions/admin/censor/shortByName";

const onSearch = (value, _e, info) => console.log(info?.source, value);

export const OverviewCensor = () => {
  const handleAddNewCensor = () => {
    dispatch(openDrawer());
  };

  const dispatch = useDispatch();
  const sortOrder = useSelector((state) => state.sortByName);

  const handleItemClick = (e) => {
    // Lấy giá trị hoặc thông tin từ mục đã chọn
    const selectedItemInfo = e.item.props.value;
    console.log("clicked>>>>>", e.item.props.value);
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    dispatch(sortByName(newOrder));
    //setSelectedItem(selectedItemInfo);
    // Thực hiện các hành động khác nếu cần
  };

  return (
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
          <Button type="primary" onClick={handleAddNewCensor}>
            Add new
          </Button>
          <FormAddNewCensor />
          <FormEditCensor />
        </div>
      }
    >
      <ListCensor />
    </Card>
  );
};
