import { Button, Drawer } from "antd";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { Form, Input, Row, Col, Select, Space } from "antd";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { getAllSinger } from "../../../../../../services/api/singer";
import { getAllCategory } from "../../../../../../services/api/category";
import {
  updateSong,
  uploadFileSound,
} from "../../../../../../services/api/song";
import { editSong } from "../../../../../../redux/actions/admin/song";

const validateMessages = {};

const handleSinger = (singers) => {
  const arr = singers.map((singer) => {
    let arr1 = [];
    if (singer.value) {
      arr1 = singer.value.split(";");
    } else {
      arr1 = singer.split(";");
    }
    return {
      id: arr1[1],
    };
  });
  return arr;
};

const handleCategory = (categories) => {
  const arr = categories.map((category) => {
    let arr1;
    if (category.value) {
      arr1 = category.value.split(";");
    } else {
      arr1 = category.split(";");
    }
    return {
      id: arr1[1],
    };
  });
  return arr;
};

const EditSong = ({ record }) => {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState(null);
  // api
  const [optionSingers, setOptionSingers] = useState([]);
  const [optionCategory, setOptionCategory] = useState([]);
  const [files, setFiles] = useState({});
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const song_edit = record;
  const audioRef = useRef();
  const [form] = Form.useForm();
  // console.log( "di vao day ",record);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    // setSource(null);
    // audioRef.current.audio.current = null;
    setOpen(false);
  };

  const onFinish = (values) => {
    // console.log("edit");
    // console.log(values);
    const updateSongData = async () => {
      let songUpdate;
      const singers = handleSinger(values.song.singers);
      const categories = handleCategory(values.song.categories);
      songUpdate = {
        ...values.song,
        singers: singers,
        categories: categories,
        id: song_edit.id,
        fileSound: song_edit.fileSound,
      };

      if (checked) {
        let formData = new FormData();
        formData.append("sound", files["sound"]);
        const data = await uploadFileSound(formData);
        const url = data.content.sound;
        songUpdate = {
          ...songUpdate,
          fileSound: url,
        };
        // console.log("accept");
        // console.log(songUpdate);
      }

      const nData = await updateSong(songUpdate);
      if (nData.status == "ok") {
        dispatch(editSong(nData.content));
        setOpen(false);
      } else {
        alert(nData.message);
      }
    };
    updateSongData();
  };

  const onChangeMp3 = (e) => {
    const file = e.target.files[0];
    // console.log("change ");
    if (file && file.name.endsWith(".mp3")) {
      // Assuming setSource is a function to set the source of your audio element
      let file1 = URL.createObjectURL(file);

      setFiles((pre) => {
        return {
          ...pre,
          sound: file,
        };
      });
      setSource(file1);
      setChecked(true);
    }
  };

  const onChangeLyric = (e) => {
    const file = e.target.files[0];
    // console.log("change ");
    if (file && file.name.endsWith(".mp3")) {
      // Assuming setSource is a function to set the source of your audio element
      let file1 = URL.createObjectURL(file);

      setFiles((pre) => {
        return {
          ...pre,
          sound: file,
        };
      });
      setSource(file1);
      setChecked(true);
    }
  };

  useEffect(() => {
    setSource(song_edit.fileSound);
    const fetchApi = async () => {
      const optSinger = await getAllSinger();
      const optionCategory = await getAllCategory();
      let dt = optSinger.content;
      let dt1 = optionCategory.content;
      const opt1 = dt.map((singer) => {
        return {
          value: singer.nickName + ";" + singer.id,
          label: singer.nickName,
          key: singer.id,
          desc: singer.nickName + "(" + singer.name + ")",
        };
      });
      const opt2 = dt1.map((category) => {
        return {
          value: category.name + ";" + category.id,
          label: category.name,
          key: category.id,
          desc: category.name,
        };
      });

      setOptionCategory(opt2);
      setOptionSingers(opt1);
    };
    fetchApi();
    form.setFieldsValue({
      song: {
        name: song_edit.name,
        status: song_edit.status,
        singers: song_edit.singers.map((singer) => {
          return {
            value: singer.nickName + ";" + singer.id,
            label: singer.nickName,
            key: singer.id,
            desc: singer.nickName + "(" + singer.name + ")",
          };
        }),
        categories: song_edit.categories.map((category) => {
          return {
            value: category.name + ";" + category.id,
            label: category.name,
            key: category.id,
            desc: category.name,
          };
        }),
      },
    });
    
  }, [record]);
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        More
      </Button>
      <Drawer
        title="Song Info"
        placement="right"
        onClose={onClose}
        open={open}
        width={"500px"}
        // destroyOnClose={true}
      >
        <Form
          form={form}
          name="song"
          onFinish={onFinish}
          validateMessages={validateMessages}
          layout="vertical"
          // initialValues={{
          //   song: {
          //     name: song_edit.name,
          //     status: song_edit.status,
          //     singers: song_edit.singers.map((singer) => {
          //       return {
          //         value: singer.nickName + ";" + singer.id,
          //         label: singer.nickName,
          //         key: singer.id,
          //         desc: singer.nickName + "(" + singer.name + ")",
          //       };
          //     }),
          //     categories: song_edit.categories.map((category) => {
          //       return {
          //         value: category.name + ";" + category.id,
          //         label: category.name,
          //         key: category.id,
          //         desc: category.name,
          //       };
          //     }),
          //   },
          // }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name={["song", "name"]}
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input width="100%" disabled={true} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name={["song", "status"]} label="Status">
                <Select
                  width="100%"
                  options={[
                    {
                      label: "Public",
                      value: 2,
                    },
                    {
                      label: "Private",
                      value: 0,
                    },
                    {
                      label: "Pending",
                      value: 1,
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name={["song", "singers"]}
                label="Singer"
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <Select
                  disabled={true}
                  mode="multiple"
                  placeholder="select singer"
                  optionLabelProp="label"
                  options={optionSingers}
                  optionRender={(option) => (
                    <Space>
                      <span role="img" aria-label={option.data.label}>
                        {option.data.emoji}
                      </span>
                      {option.data.desc}
                    </Space>
                  )}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name={["song", "categories"]} label="Categories">
                <Select
                  disabled={true}
                  mode="multiple"
                  style={{
                    width: "100%",
                  }}
                  placeholder="select category"
                  optionLabelProp="label"
                  options={optionCategory}
                  optionRender={(option) => (
                    <Space>
                      <span role="img" aria-label={option.data.label}>
                        {option.data.emoji}
                      </span>
                      {option.data.desc}
                    </Space>
                  )}
                />
              </Form.Item>
            </Col>
            {/* <Col span={12}>
              <Form.Item name={["song", "fileSound"]} label="Modifed File">
                <Input
                  type="file"
                  title="Modified file"
                  onChange={onChangeMp3}
                  ref={audioRef}
                />
              </Form.Item>
            </Col> */}
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item>
                <AudioPlayer src={source} autoPlay={false} volume={0.5} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};
export default EditSong;
