import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { PopDelete } from "../../../../styles/Popconfirm/PopDelete";
import { useDispatch } from "react-redux";
import { openDrawerEditUser } from "../../../../redux/actions/admin/user/showEditDrawer";
import { sortDataByName } from "../../../../sort";


const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

let myPromise = new Promise(async function (myResolve, myReject) {
  myResolve();
  myReject();
});
const ListUsers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  // useEffect(() => {
  //   fetchListUser();
  //   fetchData();
  // }, [listUser]);

  const fetchData = () => {
    setLoading(true);
     myPromise.then(() => {
      let results = []

      console.log(results)
      setData(results);
      setLoading(false);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: 20,
        },
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    if (sorter && sorter.field === "name") {
      const sortOrder = sorter.order === "descend" ? "desc" : "asc";
      // Sắp xếp dữ liệu theo tên và cập nhật state data
      const sortedData = sortDataByName(data, sortOrder);
      setData(sortedData);
    } else {
      setTableParams({
        pagination,
        filters,
        ...sorter,
      });
    }

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const dispatch = useDispatch();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
      render: (name) => `${name}`,
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <span style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Button type="primary" onClick={() => handleEditUser(record)}>
            Edit
          </Button>
          <PopDelete />
        </span>
      ),
      width: "20%",
    },
  ];

  const handleEditUser = (itemSelected) => {
    //console.log("row data: >>>>>>", itemSelected);
    dispatch(openDrawerEditUser(true, itemSelected));
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};
export default ListUsers;
