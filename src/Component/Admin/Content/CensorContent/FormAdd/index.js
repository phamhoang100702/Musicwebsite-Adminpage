import React, { useEffect, useState } from "react";
import { Button, Form, Input, Row, Col, Select } from "antd";
import "react-h5-audio-player/lib/styles.css";
import Password from "antd/es/input/Password";
import { addCensor } from "../../../../../services/api/censor";
import { registerCensor } from "../../../../../services/api/auth";
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};
/* eslint-enable no-template-curly-in-string */

const FormAdd = ({ handleAdd, onClose }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    // let songSubmi
    // console.log(values.censor);
    if (values.censor.status == null) {
      values.censor.status = true;
    }
    if (
      values.censor.email == "" ||
      values.censor.phone == "" ||
      values.censor.password == "" ||
      values.censor.name == ""
    ) {
      onClose();
      return;
    }
    (async () => {
      const newUser = await registerCensor(values.censor);
      // console.log(newUser);
      handleAdd(newUser.content);
    })();
    form.setFieldsValue({
      censor: {
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        status: true,
      },
    });
    onClose();
  };
  // api

  return (
    <Form
      form={form}
      name="censor"
      onFinish={onFinish}
      validateMessages={validateMessages}
      layout="vertical"
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name={["censor", "name"]} label="Name">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={["censor", "status"]}
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
        <Col span={12}>
          <Form.Item
            name={["censor", "email"]}
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
        <Col>
          <Form.Item name={["censor", "password"]} label="Password">
            <Password />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name={["censor", "phone"]} label="phone">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name={["censor", "address"]} label="Address">
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
