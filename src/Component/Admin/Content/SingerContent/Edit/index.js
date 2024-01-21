import React, { useEffect, useState } from "react";
import { Button, Form, Input, Row, Drawer, Col, Select } from "antd";
import "react-h5-audio-player/lib/styles.css";
import Password from "antd/es/input/Password";
import { updateSinger } from "../../../../../services/api/singer";

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
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(true);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    // let songSubmi
    (async () => {
      const temp = values.singer;
      // console.log(temp)
      const singer = {
        ...temp,
        id: record.id,
      };
      const singer1 = await updateSinger(singer);
      // console.log(singer1)
      const content = singer1.content;
      // record.handleEdit
      record = {
        ...record,
        ...content,
      };
      record.onEdit();
    })();
    onClose();
  };
  // api
  useEffect(()=>{
    form.setFieldsValue({
      singer: {
        name: record.name,
        email: record.email,
        nickName: record.nickName,
        bio: record.bio,
        socialMediaLink: record.socialMediaLink,
        status: record.status,
      },
    });
  },[record])

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        More
      </Button>
      <Drawer
        title="Info"
        placement="right"
        onClose={onClose}
        open={open}
        // width={""}
        width={"500px"}
      >
        <Form
          // key={record.id}
          form={form}
          name="singer"
          onFinish={onFinish}
          validateMessages={validateMessages}
          layout="vertical"
          initialValues={{
            singer: {
              name: record.name,
              email: record.email,
              nickName: record.nickName,
              bio: record.bio,
              socialMediaLink: record.socialMediaLink,
              status: record.status,
            },
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name={["singer", "name"]} label="Name">
                <Input disabled={true}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name={["singer", "status"]} label="Status">
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
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={20}>
              <Form.Item
                name={["singer", "email"]}
                label="Email"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input disabled={true} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name={["singer", "nickName"]}
                label="NickName"
              >
                <Input disabled={true}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={["singer", "password"]}
                label="Password"
              >
                <Password disabled={true} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name={["singer", "bio"]}
                label="bio"
              >
                <Input disabled={true}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={["singer", "socialMediaLink"]}
                label="Social Link"
              >
                <Input disabled={true}/>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Edit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};
export default FormEdit;
