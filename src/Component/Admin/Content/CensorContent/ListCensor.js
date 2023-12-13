import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  List,
  Modal,
  Popconfirm,
  Skeleton,
  Space,
  Typography,
} from "antd";
import ShowInfoModal from "../../../../styles/Modal/ShowInfoModal";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { PopDelete } from "../../../../styles/Popconfirm/PopDelete";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../../redux/actions/admin/censor/showModal";
import FormEditCensor from "./FormEditCensor";
import { openDrawerEdit } from "../../../../redux/actions/admin/censor/showDrawerEdit";
const count = 8;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const ListCensor = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();

  const listSorted = useSelector((state) => state.shortByName.list);

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event("resize"));
      });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  const showModal = (item) => {
    setSelectedItem(item);
    dispatch(openModal());
    //console.log("item selected: >>>", item);
  };

  const handleEditCensor = (item) => {
    setSelectedItem(item);
    console.log("itemselected>>>>", item);
    dispatch(openDrawerEdit(true, item));
  };
  return (
    <>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        //loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button type="primary" onClick={() => handleEditCensor(item)}>
                Edit
              </Button>,
              <PopDelete />,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a onClick={() => showModal(item)}>{item.name?.last}</a>}
                description="Censor Sountify Website"
              />
              <div>{item.email}</div>
            </Skeleton>
          </List.Item>
        )}
      />
      {selectedItem && <ShowInfoModal itemSelected={selectedItem} />}
    </>
  );
};
export default ListCensor;
