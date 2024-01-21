import React, { useEffect, useState } from "react";
import { Button, Form, Input, Row } from "antd";
import "react-h5-audio-player/lib/styles.css";
import Password from "antd/es/input/Password";
import { addUser } from "../../../../../services/api/user";
import { registerUser } from "../../../../../services/api/auth";

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
    // console.log(values.user);
    (async()=>{
      const newUser = await registerUser(values.user);
      // console.log(newUser)
      handleAdd(newUser.content);
    })()
    form.setFieldsValue({
      user: {
        name: "",
        email: "",
        password: "",
      },
    });
    onClose();
  };
  // api

  return (
    <Form
      form={form}
      name="user"
      onFinish={onFinish}
      validateMessages={validateMessages}
      layout="vertical"
    >
      <Form.Item name={["user", "name"]} label="Name">
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "password"]}
        label="Password"
        rules={[
          {
            required: "true",
          },
        ]}
      >
        <Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={false}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormAdd;
