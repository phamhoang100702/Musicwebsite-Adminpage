import React, { useEffect, useState } from "react";
import { Button, Form, Input, Row, Col, Select } from "antd";
import "react-h5-audio-player/lib/styles.css";
import Password from "antd/es/input/Password";

import { addSinger } from "../../../../../services/api/singer";
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
  const onFinish = (values) => {
    // let songSubmi
    console.log(values.singer);
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
      const newUser = await addSinger(values.singer);
      console.log(newUser);
      handleAdd(newUser.content);
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
            rules={[
              {
                required: "true",
              },
            ]}
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

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormAdd;
