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
import { closeDrawerEdit } from "../../../../redux/actions/admin/censor/showDrawerEdit";
const { Option } = Select;
const FormEditCensor = (props) => {
  const data = useSelector((state) => state.openDrawerEdit.data);
  const dispatch = useDispatch();
  const open = useSelector((state) => state.openDrawerEdit.open);
  const onClose = () => {
    dispatch(closeDrawerEdit(false, null));
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleUpdateCensor = () => {
    console.log("item get formedit", data);
  };
  return (
    <>
      {data && (
        <Drawer
          title="Edit censor"
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
              <Button type="primary" onClick={handleUpdateCensor}>
                Update
              </Button>
            </Space>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter name",
                    },
                  ]}
                >
                  <Input
                    placeholder="Please enter name"
                    value={data.name.first}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Address"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Address",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: "100%",
                    }}
                    placeholder="Please enter address"
                    value={data.nat}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
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
                    value={data.gender}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
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
                    value={data.nat}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Phone number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter phone number",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: "100%",
                    }}
                    placeholder="Please enter phone number"
                    value={data}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Birthdate"
                  rules={[
                    {
                      required: true,
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
                  label="Email address"
                  rules={[
                    {
                      required: true,
                      message: "please enter email address",
                    },
                  ]}
                >
                  <Input
                    placeholder="please enter email address"
                    value={data.email}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      )}
    </>
  );
};
export default FormEditCensor;
