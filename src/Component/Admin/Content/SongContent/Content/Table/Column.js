import { Tag, Space } from "antd";
import EditSong from "./EditSong";

const columns = [
  {
    title:"#",
    dataIndex:"key",
    key:"key",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    
  },
  {
    title: "Singer",
    dataIndex: "singer",
    key: "singer",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render:(_,{status})=>{
      let color = status=='private'?'red':'green';
      return <>
        <Tag color={color}>
            {status}
        </Tag>
      </>
    }
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => {
      return (
      <Space size="middle">
        <EditSong  record={record}/>
      </Space>
      )
    },
  },
];

export default columns;
