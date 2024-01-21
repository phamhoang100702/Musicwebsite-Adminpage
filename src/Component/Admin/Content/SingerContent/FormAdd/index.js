import React, { useEffect, useState } from "react";
import { Button, Form, Input, Row, Col, Select, message, notification } from "antd";
import "react-h5-audio-player/lib/styles.css";
import Password from "antd/es/input/Password";

import { addSinger, uploadAvatar } from "../../../../../services/api/singer";
import { registerSinger } from "../../../../../services/api/auth";
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};
/* eslint-enable no-template-curly-in-string */

const FormAdd = ({ handleAdd, onClose }) => {
  const [form] = Form.useForm();
  const [files,setFiles] = useState({});
  const [api,contextHodler] = notification.useNotification();
  const onFinish = (values) => {
    let form1 = new FormData();
 
    form1.append("avatar", files["avatar"]);
    // let songSubmi
    // console.log(values.singer);
    if (values.singer.status == null) {
      values.singer.status = true;
    }
    if (
      values.singer.email == "" ||
      values.singer.phone == "" ||
      values.singer.password == "" ||
      values.singer.name == ""
    ) {
      onClose();
      return;
    }
    (async () => {
      const avatarUrl = await uploadAvatar(form1);
      let newSinger = {
        ...values.singer
      }
      // console.log("First")
      // console.log(avatarUrl)
      if(avatarUrl.status =='ok'){
        // console.log("vao day ")
        newSinger = {
          ...newSinger,
          avatar : avatarUrl.content
        }
        // console.log(newSinger)
      }
      
      const newUser = await registerSinger(newSinger);
      if(newUser.status == 'ok'){
        // console.log(newUser);
        handleAdd(newUser.content);
      }
      
    })();
    form.setFieldsValue({
      singer: {
        name: "",
        nickName: "",
        email: "",
        password: "",
        status: true,
        bio: "",
        socialMediaLink: "",
      },
    });
    
    onClose();
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
  // api

  return (
    <Form
      form={form}
      name="singer"
      onFinish={onFinish}
      validateMessages={validateMessages}
      layout="vertical"
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name={["singer", "name"]} label="Name">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={["singer", "status"]}
            label="Status"
            // initialValue="true"
          >
            <Select
              width="100%"
              options={[
                {
                  label: "Active",
                  value: true,
                },
                {
                  label: "Unactive",
                  value: false,
                },
              ]}
              defaultValue={true}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col>
          <Form.Item
            name={["singer", "email"]}
            label="Email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
        <Form.Item
            name={["singer", "nickName"]}
            label="NickName"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={["singer", "password"]}
            label="Password"
            rules={[
              {
                required: "true",
              },
            ]}
          >
            <Password />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name={["singer", "bio"]}
            label="Bio"

          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name={["singer", "socialMediaLink"]} label="Social Link">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name={['singer','avatar']} label="Avatar">
            <Input type="file" onChange={onChangeImg} id="fileAvatar"/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormAdd;
