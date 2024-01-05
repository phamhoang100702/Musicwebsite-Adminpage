import React, { useState } from "react";
import { Alert, Button, Checkbox, Flex, Form, Input } from "antd";
import { loginAdmin } from "../services/api/auth";
import { useNavigate } from "react-router-dom";


const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const onFinish = (values) => {
    (async () => {
      console.log("Success:", values);
      let object = {
        username: values.username,
        password: values.password,
      };
      const jwt = await loginAdmin(object);
      console.log(jwt);
      if (jwt.message == "ok") {
        localStorage.setItem("token", jwt.content);
        console.log("ok " ,jwt)
        navigate("/admin")
        return;
      } else {
        console.log("not ok");
        setChecked(true)
      }
    })();
  };
  return (
    <>
      {checked && <Alert message="Wrong username or password" type="error" />}

      <Flex justify="center" align="center" style={{ marginTop: "30vh" }}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </>
  );
};
export default Login;
