import React, { useEffect, useState } from "react";
import qs from "qs";
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
const ListUsers = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(
        getRandomuserParams(tableParams)
      )}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 20,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
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
      render: (name) => `${name.first} ${name.last}`,
      width: "20%",
    },
    {
      title: "Role",
      dataIndex: "role",
      filters: [
        {
          text: "Premiun",
          value: "premium",
        },
        {
          text: "Normal",
          value: "normal",
        },
      ],
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
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};
export default ListUsers;
