import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawerUser } from "../../../../redux/actions/admin/user/showDrawer";
const { Option } = Select;
const FormAddNewUser = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.openDrawerAddNew.open);
  const onClose = () => {
    dispatch(closeDrawerUser());
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <Drawer
        title="Create a new User"
        width={480}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary">Submit</Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter name",
                  },
                ]}
              >
                <Input placeholder="Please enter name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Role"
                label="Role"
                rules={[
                  {
                    required: true,
                    message: "Please select a role",
                  },
                ]}
              >
                <Select
                  defaultValue="Normal"
                  style={{
                    width: "100%",
                  }}
                  allowClear
                  options={[
                    {
                      value: "normal",
                      label: "Normal",
                    },
                    {
                      value: "premium",
                      label: "Premium",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="username"
                label="Usename"
                rules={[
                  {
                    required: true,
                    message: "Please enter username",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please enter username"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="passwd"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter password",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please enter password"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Phone number"
                rules={[
                  {
                    required: false,
                    message: "Please enter phone number",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please enter phone number"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="Birthdate"
                rules={[
                  {
                    required: false,
                    message: "Please choose the birthday",
                  },
                ]}
              >
                <DatePicker style={{ width: "100%" }} onChange={onChange} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="email"
                label="Email address"
                rules={[
                  {
                    required: false,
                    message: "please enter email address",
                  },
                ]}
              >
                <Input placeholder="enter email address" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default FormAddNewUser;
