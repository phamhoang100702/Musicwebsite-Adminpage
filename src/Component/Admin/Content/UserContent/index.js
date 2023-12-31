import React, { useEffect, useState } from "react";
import { Button, Card, Space, Table, Drawer } from "antd";
import Search from "antd/es/input/Search";
import {  searchAllUser,deleteUserById } from "../../../../services/api/user";
import FormAdd from "./FormAdd";
import FormEdit from "./EditUser";

// const handleDelete = () => {};
const columns = [
  {
    title: "#",
    key: "key",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    // filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    width: "30%",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Modified Date",
    dataIndex: "modifiedDate",
    key: "modifiedDate",
    render:(_,{modifiedDate})=>{
      const arr = modifiedDate.split("@");
      return <>
        {arr[0]}
      </>
    }
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => {
      console.log(record)
      return (
        <Space size="middle">
          <FormEdit record={record}/>
          <Button  danger type="primary" onClick={()=>{record.onDelete(record.id)}}>
            Delete
          </Button>
        </Space>
      );
    },
    width: "10%",
  },
  // {
  //   title : "Action",
  //   key: "action",
  //   render:(_,record)=>{
  //     return (
  //       <Space size="middle">
  //         < record={record} />
  //         <Button record={record} />
  //       </Space>
  //     );
  //   }
  // }
];

export const OverviewUser = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [search,setSearch] = useState("");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleSearch= () => {
    fetch()
  };
  const handleChange= (e) => {
    setSearch(e.target.value)
  };
  const handleAdd = (user) => {
    console.log(user);
    setData([...data,{
      ...user,
      key:data.length+1,
      onDelete : handleDelete,
      onEdit : handleEdit
    }])
  };
  const handleEdit = ()=>{
    fetch()
  }
  const handleDelete = (id)=>{
    let dataSrc;
    (async()=>{
    await deleteUserById(id);
    fetch();
    })();
  }
  // console.log(data)
function fetch(){
  (async () => {
    const data1 = await searchAllUser(search);
    const users = data1.content;
    const arr = users.map((user, index) => {
      return {
        ...user,
        key: index + 1,
        onDelete : handleDelete,
        onEdit : handleEdit
      };
    });
    console.log("chay vao day");
    // console.log(arr)
    setData([...arr]);
  })();
}

  useEffect(() => {
    fetch();
  }, [search]);
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
                onSearch={handleSearch}
                style={{
                  width: 200,
                }}
                value={search}
                onChange={handleChange}
              />
            </Space>
            <Button type="primary" onClick={showDrawer}>
              Add new
            </Button>
            <Drawer
              title="Basic Drawer"
              placement="right"
              onClose={onClose}
              open={open}
              // width={""}
              size="medium"
            >
              <FormAdd  handleAdd={handleAdd} onClose={onClose}/>
            </Drawer>
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
