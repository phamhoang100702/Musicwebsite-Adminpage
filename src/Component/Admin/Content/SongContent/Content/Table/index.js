import React, { useState, useEffect } from "react";
import { Button, Table, Card } from "antd";

import columns from "./Column.js";
import { current } from "@reduxjs/toolkit";
import TopSider from "../SearchBar/index.js";
import { songSearch } from "../../../../../../redux/selector/song/";
import { useSelector } from "react-redux";
const ListSong = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(10);

  const OnSearch = () => {
    let name = useSelector((state) => state.searchSongReducer.search);
    console.log(name);
    fetchRecords(name, 1, pageSize);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  useEffect(() => {
    fetchRecords(1);
  }, []);

  const fetchRecords = (name = "", page = 1, pageSize = 10) => {
    setLoading(true);
    fetch(
      `http://localhost:9000/api/v1/song?name=${name}&pageNo=${page}&pageSize=${pageSize}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          console.log(data);
          setPageSize(data.object.size);
          let data1 = data.object.content.map((item, index) => {
            return {
              ...item,
              key: index + 1,
            };
          });
          setDataSource(data1);
          setTotalPages(data.object.totalPages * pageSize);
          setLoading(false);
        }
      });
  };

  return (
    <Card
      title="All Song"
      bordered={false}
      style={{
        marginTop: "5px",
      }}
      extra={
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <TopSider submitSearch={OnSearch} />
        </div>
      }
    >
      <div>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          rowSelection={rowSelection}
          pagination={{
            pageSize: pageSize,
            total: totalPages,
            onChange: (page, pageSize) => {
              fetchRecords(page, pageSize);
            },
          }}
          size="small"
        />
      </div>
    </Card>
  );
};
export default ListSong;
