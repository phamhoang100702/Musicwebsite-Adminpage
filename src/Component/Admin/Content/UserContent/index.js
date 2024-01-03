import React from "react";
import { Button, Card, Space, Table } from "antd";
import Search from "antd/es/input/Search";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
      },
      {
        text: "Category 2",
        value: "Category 2",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    width: "30%",
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: "40%",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "5",
    name: "5",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "6",
    name: "6",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "7",
    name: "7",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "8",
    name: "8",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "9",
    name: "John 9",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "10",
    name: "Jim 10",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "11",
    name: "Joe 11",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "12",
    name: "12 Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "13",
    name: "John 13",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "14",
    name: "Jim 14",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "15",
    name: "Joe 15",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "16",
    name: "Jim 16",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

export const OverviewUser = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

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
            <Button type="primary">Add new</Button>
          </div>
        }
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 10,
          }}
        />
      </Card>
    </>
  );
};
