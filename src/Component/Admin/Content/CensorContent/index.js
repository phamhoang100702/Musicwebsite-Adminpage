import React, { useEffect, useState } from "react";
import { Button, Card, Space, Table, Drawer, Tag, Popconfirm } from "antd";
import Search from "antd/es/input/Search";
import FormAdd from "./FormAdd";
import FormEdit from "./Edit";
import {
  getAllCensorByName,
  deleteCensorById,
} from "../../../../services/api/censor";

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
    width: "10%",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    // sorter: (a, b) => a.age - b.age,
    width: "20%",
  },

  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => {
      const arr = status == true ? "Active" : "Unactive";
      const color = status == true ? "green" : "grey";
      return (
        <>
          <Tag color={color}>{arr}</Tag>
        </>
      );
    },
  },
  {
    title: "Modified Date",
    dataIndex: "modifiedDate",
    key: "modifiedDate",
    render: (_, { modifiedDate }) => {
      const arr = modifiedDate.split("@");
      return <>{arr[0]}</>;
    },
    width: "10%",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => {
      return (
        <Space size="middle">
          <FormEdit record={record} />
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            okText="Yes"
            cancelText="No"
          >
            <Button
              danger
              type="primary"
              onClick={() => {
                record.onDelete(record.id);
              }}
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      );
    },
    width: "10%",
  },
];

export const OverviewCensor = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleSearch = () => {
    fetch();
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleAdd = (user) => {
    setData([
      ...data,
      {
        ...user,
        key: data.length + 1,
        onDelete: handleDelete,
        onEdit: handleEdit,
      },
    ]);
  };
  const handleEdit = () => {
    fetch();
  };
  const handleDelete = (id) => {
    let dataSrc;
    (async () => {
      await deleteCensorById(id);
      fetch();
    })();
  };
  // console.log(data)
  function fetch() {
    (async () => {
      const data1 = await getAllCensorByName(search);
      const censors = data1.content;
      console.log(censors);
      const arr = censors.map((censor, index) => {
        return {
          ...censor,
          key: index + 1,
          onDelete: handleDelete,
          onEdit: handleEdit,
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
        title="Censor Management"
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
              width={"500px"}
            >
              <FormAdd handleAdd={handleAdd} onClose={onClose} />
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
          size="small"
        />
      </Card>
    </>
  );
};
