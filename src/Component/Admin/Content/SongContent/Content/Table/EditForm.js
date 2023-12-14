import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { useSelector } from "react-redux";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const EditForm = () => {
  const data = useSelector(state => state.editSong);


  return (
    <Form
      {...layout}
      name="song"
      size="medium"
      onFinish={onFinish}
      style={{
        maxWidth: 800,
        //   width:'400px'
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["song", "name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value={data.name} />
      </Form.Item>
      <Form.Item
        name={["song", "age"]}
        label="age"
        rules={[
          {
            type: "true",
          },
        ]}
      >
        <Input value={data.age}/>
      </Form.Item>
      <Form.Item name={["song", "address"]} label="address">
        <Input value={data.address}/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default EditForm;
