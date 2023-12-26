import { Tag, Space, Button, Row, Col } from "antd";
import EditSong from "./EditSong";

const columns = [
  {
    title: "#",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Singer",
    dataIndex: "singers",
    key: "singers",
    render: (_, { singers }) => {
      return singers.map((singer, index) => {
        return <Tag key={index}>{singer.nickName}</Tag>;
      });
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => {
      let color = status == true ? "green" : "red";
      let value = status == true ? "Public" : "Private";
      return (
        <>
          <Tag color={color}>{value}</Tag>
        </>
      );
    },
  },
  {
    title: "Category",
    dataIndex: "categories",
    key: "categories",
    render: (_, { categories }) => {
      return categories.map((category, index) => {
        return <Tag key={index}>{category.name}</Tag>;
      });
    },
  },
  {
    title: "Modified Date",
    key: "modifiedDate",
    render: (_, { modifiedDate }) => {
      const d = modifiedDate.split("@");
      return <>{d[0]}</>;
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => {
      return (
        <Space size="middle">
          <EditSong record={record} />
          <Button type="primary" danger>
            Delete
          </Button>
        </Space>
      );
    },
    width: "10%",
  },
];

export default columns;
