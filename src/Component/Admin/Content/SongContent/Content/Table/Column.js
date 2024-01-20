import { Tag, Space, Button, Row, Col } from "antd";
import EditSong from "./EditSong";
import { deleteSongById } from "../../../../../../services/api/song";
import { useDispatch } from "react-redux";
import { deleteSong } from "../../../../../../redux/actions/admin/song";

const ButtonHandleDelete = ({ record }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    const del = async () => {
      const dt = await deleteSongById(record.id);
    };
    del();
    
    dispatch(deleteSong(record.id));
  };
  return (
    <Button type="primary" danger onClick={handleDelete}>
      Delete
    </Button>
  );
};

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
    width : '20%'
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => {
      let color,value;
      if(status==0){
        color = "red"
        value ="PRIVATE"
      }
      else if(status == 1){
        color = "gray"
        value = "PENDING"
      }
      else{
        color = "green"
        value = "PUBLIC"
      }
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

          <ButtonHandleDelete record={record} />
        </Space>
      );
    },
    width: "10%",
  },
];

export default columns;
