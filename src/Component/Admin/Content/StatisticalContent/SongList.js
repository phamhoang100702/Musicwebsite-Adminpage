import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Top song",
    dataIndex: "songName",
  },
  {
    title: "Singer",
    dataIndex: "singer",
  },
  {
    title: "Listen",
    dataIndex: "totalListen",
  },
];
const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    songName: `Music ${i}`,
    totalListen: 32,
    singer: `singer ${i}`,
  });
}
export const SongList = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={{
      pageSize: 5,
    }}
  />
);
