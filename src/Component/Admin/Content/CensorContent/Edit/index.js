import React, { useEffect, useState } from "react";
import { Button, Form, Input, Row, Drawer,Col,Select } from "antd";
import "react-h5-audio-player/lib/styles.css";
import Password from "antd/es/input/Password";
import { updateCensor } from "../../../../../services/api/censor";

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
  const [disabled,setDisabled] = useState(true)

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    // let songSubmi
    (async () => {
      const temp = values.censor;
      const censor = {
        ...temp,
        id: record.id,
      };
      const censor1 = await updateCensor(censor);
      const content = censor1.content;
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
      censor: {
        name: record.name,
        email: record.email,
        password: record.password,
        phone:record.phone,
        address : record.address,
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
        title="Info Censor"
        placement="right"
        onClose={onClose}
        open={open}
        // width={""}
        width={"500px"}
      >
        <Form
        // key={record.id}
          form={form}
          name="censor"
          onFinish={onFinish}
          validateMessages={validateMessages}
          layout="vertical"
          initialValues={{
            censor: {
              name: record.name,
              email: record.email,
              password: record.password,
              address: record.address,
              phone: record.phone,
              status: record.status,
            },
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name={["censor", "name"]} label="Name">
                <Input disabled={true}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={["censor", "status"]}
                label="Status"
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
              <Form.Item
                name={["censor", "password"]}
                label="Password"
              >
                <Password  />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name={["censor", "phone"]}
                label="phone"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={["censor", "address"]}
                label="Address"

              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit" >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};
export default FormEdit;
