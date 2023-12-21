import React, { useEffect, useState } from "react";
import { Button, Form, Input, Row, Col, Select, Space } from "antd";
import { useSelector } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import { categoryUrl } from "../../../../../../../../fetch/url";
import { addSong } from "../../../../../../../../fetch/song/add";
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};
/* eslint-enable no-template-curly-in-string */

const AddForm = () => {
  const [disabled, setDisabled] = useState(true);
  const [source, setSource] = useState(null);
  const [files, setFiles] = useState({});
  // api
  const [options, setOptions] = useState([]);
  const [listSinger, setListSinger] = useState([]);
  const [optionCategory, setOptionCategory] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  useEffect(() => {
    fetch(categoryUrl, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        if (data) {
          setListCategory([...data.object]);
          return data.object;
        }
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9000/api/v1/singer", {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        if (data) {
          setListSinger([...data.object]);
          return data.object;
        }
        else {

        }
      });
  }, []);
  useEffect(() => {
    console.log(listSinger);
    const data = listSinger.map((singer) => {
      return {
        value: singer.nickName+";"+singer.id,
        label: singer.nickName,
        key: singer.id,
        desc: singer.nickName + "(" + singer.name + ")",
      };
    });
    console.log(data);
    setOptions([...data]);
  }, [listSinger]);

  useEffect(() => {
    const data = listCategory.map((category) => {
      return {
        value: category.name+";"+category.id,
        label: category.name,
        key: category.id,
        desc: category.name,
      };
    });
    console.log(data);
    setOptionCategory([...data]);
  }, [listCategory]);

  const onFinish = (values) => {
    // let songSubmi
    
    values = {
      ...values,
      files
    }
    console.log(values)
    addSong(values.files,values.song)
    
  };
  // api

  const onChangeMp3 = (e) => {
    let file = document.querySelector("#fileMp3");
    file = file.files[0];
    if (file && file.name.endsWith(".mp3")) {
      // Assuming setSource is a function to set the source of your audio element
      let file1 = URL.createObjectURL(file);
      setFiles((pre)=>{
        return {
        ...pre,
        'sound':file
      }})
      setSource(file1);
      setDisabled(false);
    }
  };

  const onChangeLyric = (e) => {
    let file = document.querySelector("#fileLyric");
    file = file.files[0];
    if (file && file.name.endsWith(".lrc")) {
      // Assuming setSource is a function to set the source of your audio element
      setFiles((pre)=>{
        return {
          ...pre,
          'lyric':file
        }
      })

      // setDisabled(!disabled);
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
      setFiles((pre)=>{
        return {
        ...pre,
        'avatar':filePath
      }})
    }
  };

  return (
    <Form
      name="song"
      onFinish={onFinish}
      validateMessages={validateMessages}
      layout="vertical"
      initialValues={{
        song : {
          name : "",
          categories : [],
          singers : [],
          fileLyric : "",
          fileSound : "",
          avatar : "",
          status : false
        }
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
                  value: "true",
                },
                {
                  label: "Private",
                  value: "false",
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
