import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button, Card, Space, Table, Drawer, Tag, Popconfirm } from "antd";
import Search from "antd/es/input/Search";
import FormAdd from "./FormAdd";
import FormEdit from "./Edit";
import {
  getSingerByNameAndNickName,
  deleteSingerById,
} from "../../../../services/api/singer";
import { getLocalStorage } from "../../../../services/localstorage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decode } from "../../../../services/api/auth";
import { setAuth } from "../../../../redux/actions/auth";
// const handleDelete = () => {};
const columns = [
  {
    title: "#",
    key: "key",
    dataIndex: "key",
    width: "3%",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    // filterMode: "tree",
    width: "15%",
  },
  {
    title: "NickName",
    dataIndex: "nickName",
    key: "name",
    // filterMode: "tree",
    width: "15%",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    // sorter: (a, b) => a.age - b.age,
    width: "20%",
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
    width: "10%",
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
            title="Delete "
            description="Are you sure to delete?"
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

export const OverviewSinger = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let authData = useSelector((state) => state.authReducer.authData);
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
      await deleteSingerById(id);
      fetch();
    })();
  };
  // console.log(data)
  function fetch() {
    (async () => {
      const data1 = await getSingerByNameAndNickName(search);
      const singers = data1.content;
      // console.log(singers);
      const arr = singers.map((singer, index) => {
        return {
          ...singer,
          key: index + 1,
          onDelete: handleDelete,
          onEdit: handleEdit,
        };
      });
      // console.log("chay vao day");
      // console.log(arr)
      setData([...arr]);
    })();
  }

  useEffect(() => {
    fetch();
  }, [search]);
  useLayoutEffect(() => {
    if (getLocalStorage("user-token") != "") {
      if (authData == null) {
        (async () => {
          const data = await decode(getLocalStorage("user-token"));
          if(data.status!="ok"){
            window.location.replace("http://localhost:9100/");
            return;
          } 
         else  dispatch(setAuth(data.content));
        })();
      }
      fetch();
    } else {
      navigate("/");
      window.location.reload();
      return;
    }
  }, []);
  return (
    <>
      <Card
        bordered={false}
        type="inner"
        title="Singer Management"
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
              title="NEW SINGER"
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
