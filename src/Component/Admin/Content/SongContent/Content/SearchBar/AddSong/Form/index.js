import React, { useEffect, useState } from "react";
import { Button, Form, Input, Row, Col, Select, Space } from "antd";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import { getAllCategory } from "../../../../../../../../services/api/category";
import { getAllSinger } from "../../../../../../../../services/api/singer";
import { uploadFileSound,saveSong, getSongById } from "../../../../../../../../services/api/song";
import { useDispatch } from "react-redux";
import { addSong } from "../../../../../../../../redux/actions/admin/song";
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};
/* eslint-enable no-template-curly-in-string */

const handleSinger = (singers)=>{
  // console.log(singers)
  const arr = singers.map((singer)=>{
    const arr1 = singer.split(";");
    return {
      "id" : arr1[1]
    }
  })
  return arr;
}

const handleCategory = (categories)=>{
  const arr = categories.map((category)=>{
    const arr1 = category.split(";");
    return {
      "id" : arr1[1]
    }
  })
  return arr;
}

const AddForm = ({ onSubmit }) => {
  const [disabled, setDisabled] = useState(true);
  const [source, setSource] = useState(null);
  const [files, setFiles] = useState({});
  // api
  const [options, setOptions] = useState([]);
  const [listSinger, setListSinger] = useState([]);
  const [optionCategory, setOptionCategory] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [form] = Form.useForm();
  const dispatch = useDispatch();


  const onFinish = (values) => {
    // let songSubmi
    let form1 = new FormData();
    form1.append("sound", files["sound"]);
    form1.append("lyric", files["lyric"]);
    form1.append("avatar", files["avatar"]);
    const saveSongData = async () => {
      const object = await uploadFileSound(form1);
      let ct = object.content;
      const singers = handleSinger(values.song.singers);
      const categories = handleCategory(values.song.categories);
      const newSong = {
        ...values.song,
        'fileSound' : ct.sound,
        'fileLyric' : ct.lyric,
        'avatar' : ct.avatar,
        'singers' : singers,
        'categories' : categories
      }
      const obj = await saveSong(newSong);
      
      const objToTable = await getSongById(obj.content.id)
      dispatch(addSong(objToTable.content))
    };
    
    saveSongData();

    onSubmit();

    form.setFieldsValue({
      song: {
        name: "",
        categories: [],
        singers: [],
        fileLyric: "",
        fileSound: "",
        avatar: "",
        status: false,
      },
    });
    setSource("");
  };
  // api

  const onChangeMp3 = (e) => {
    let file = document.querySelector("#fileMp3");
    file = file.files[0];
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
      setDisabled(false);
    }
  };

  const onChangeLyric = (e) => {
    let file = document.querySelector("#fileLyric");
    file = file.files[0];
    if (file && file.name.endsWith(".lrc")) {
      // Assuming setSource is a function to set the source of your audio element
      setFiles((pre) => {
        return {
          ...pre,
          lyric: file,
        };
      });
      // setDisabled(!disabled);
    } else {
      setDisabled(true);
    }
  };

  const onChangeImg = (e) => {
    let filePath = document.querySelector("#fileAvatar");
    filePath = filePath.files[0];
    if (
      filePath &&
      (filePath.name.endsWith(".jpg") ||
        filePath.name.endsWith(".png") ||
        filePath.name.endsWith(".jpeg"))
    ) {
      // setDisabled(!disabled);
      setFiles((pre) => {
        return {
          ...pre,
          avatar: filePath,
        };
      });
    }
  };

  useEffect(() => {
    async function fetch_category() {
      const object = await getAllCategory();
      const arr1 = object.content;
      setListCategory(arr1);
      const object1 = await getAllSinger();
      const arr2 = object1.content;
      setListSinger(arr2);
    }
    fetch_category();
  }, []);

  useEffect(() => {
    // console.log(listSinger);
    const data = listSinger.map((singer) => {
      return {
        value: singer.nickName + ";" + singer.id,
        label: singer.nickName,
        key: singer.id,
        desc: singer.nickName + "(" + singer.name + ")",
      };
    });
    // console.log(data);
    setOptions([...data]);
  }, [listSinger]);

  useEffect(() => {
    const data = listCategory.map((category) => {
      return {
        value: category.name + ";" + category.id,
        label: category.name,
        key: category.id,
        desc: category.name,
      };
    });
    // console.log(data);
    setOptionCategory([...data]);
  }, [listCategory]);

  return (
    <Form
      form={form}
      name="song"
      onFinish={onFinish}
      validateMessages={validateMessages}
      layout="vertical"
      initialValues={{
        song: {
          name: "",
          categories: [],
          singers: [],
          fileLyric: "",
          fileSound: "",
          avatar: "",
          status: false,
        },
      }}
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
            <Input width="100%" />
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
                  label:"Pending",
                  value:1
                }
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
              mode="multiple"
              placeholder="select singer"
              optionLabelProp="label"
              options={options}
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
          <Form.Item name={["song", "avatar"]} label={"Avatar"}>
            <Input type="file" onChange={onChangeImg} id="fileAvatar"></Input>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name={["song", "categories"]} label="category">
            <Select
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
      </Row>

      <Row gutter={16} content="center">
        <Col span={12}>
          <Form.Item name={["song", "fileSound"]} label={"Sound"}>
            <Input
              type="file"
              accept=".mp3"
              id="fileMp3"
              onChange={onChangeMp3}
            ></Input>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name={["song", "fileLyric"]} label={"Lyric"}>
            <Input
              type="file"
              accept=".lrc"
              id="fileLyric"
              onChange={onChangeLyric}
            ></Input>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item>
            <AudioPlayer src={source} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={disabled}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddForm;
