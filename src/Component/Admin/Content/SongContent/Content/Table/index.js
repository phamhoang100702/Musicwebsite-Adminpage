import React, { useState, useEffect } from "react";
import { Button, Table, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { searchTextSong } from "../../../../../../redux/selector/song/index.js";
import { setListSong } from "../../../../../../redux/actions/admin/song/index.js";
import columns from "./Column.js";
import TopSider from "../SearchBar/index.js";
import { getSongPage } from "../../../../../../services/api/song/index.js";

const ListSong = () => {
  // const [dataSource, setDataSource] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const dispatch = useDispatch();
  let search = useSelector((state)=>state.listSongReducer.searchText);
  let dataSource = useSelector((state)=>state.listSongReducer.listSong);

  useEffect(() => {
    fetchRecords(1, pageSize);
  }, [search]);

  const fetchRecords = (page = 1, pageSize = 10) => {
    const name = search;
    setLoading(true);
    async function fetch(name, page, pageSize) {
      const object = await getSongPage(name, page, pageSize);
      const listSong = object.content;
      let data1 = listSong.content.map((item, index) => {
        return {
          ...item,
          key: index + 1,
        };
      });
        dispatch(setListSong(data1))
        setPageSize(listSong.size);
        setTotalPages(listSong.totalPages * pageSize);      
      setLoading(false)
    }
    fetch(name, page, pageSize);

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
          <TopSider />
        </div>
      }
    >
      <div>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
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
