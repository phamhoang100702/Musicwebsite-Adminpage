import React, { useEffect, useState } from "react";
import { Button, Form, Input, Row, Drawer } from "antd";
import "react-h5-audio-player/lib/styles.css";
import Password from "antd/es/input/Password";
import { updateUser } from "../../../../../services/api/user";

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};
/* eslint-enable no-template-curly-in-string */

const FormEdit = ({ record }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [form] = Form.useForm();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    // let songSubmi
    (async () => {
      const temp = values.user;
      const user = {
        ...temp,
        id: record.id,
      };
      const user1 = await updateUser(user);
      const content = user1.content;
      console.log(content)
      // record.handleEdit
      record = {
        ...record,
        ...content
      }
      record.onEdit();
    })();
    onClose();
    form.setFieldsValue({
      user: {
        name: record.name,
        email:record.email,
        password: record.password,
      },
    });
  };
  // api

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Edit
      </Button>
      <Drawer
        title="EDIT USER"
        placement="right"
        onClose={onClose}
        open={open}
        // width={""}
        size="medium"
      >
        <Form
          form={form}
          name="user"
          onFinish={onFinish}
          validateMessages={validateMessages}
          layout="vertical"
          initialValues={{
            user: {
              name: record.name,
              email: record.email,
              password: record.password,
            },
          }}
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};
export default FormEdit;
