import React, { useState } from "react";
import { Alert, Button, Checkbox, Flex, Form, Input } from "antd";
import { loginAdmin } from "../services/api/auth";
import { redirect, useNavigate } from "react-router-dom";
import { setLocalStorage } from "../services/localstorage";
import { getUserById } from "../services/api/user";
import { getAdminById } from "../services/api/admin";
import { getCensorById } from "../services/api/censor";
import "./index.css";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = () => {
  const [checked, setChecked] = useState(false);
  const [authori, setAuthori] = useState(false);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const onFinish = (values) => {
    (async () => {
      console.log("Success:", values);
      let object = {
        username: values.username,
        password: values.password,
      };
      const jwt = await loginAdmin(object);
      // console.log(jwt);
      if (jwt.status == "ok") {
        const role = jwt.content.roles;
        console.log(role);
        if (role.includes("ADMIN")) {
          const token = jwt.content.token;
          setLocalStorage("user-token", token);
          const admin = await getAdminById(jwt.content.userId);
          setLocalStorage("info", admin.content);
          navigate("/admin-statistical");
          return;
        } else if (role.includes("CENSOR")) {
          const temp1 = await getCensorById(jwt.content.userId);
          if (temp1.status == "ok" && temp1.content.status) {
            console.log("sda");
            setLocalStorage("user-token", temp1.content);
            window.location.replace("http://localhost:9200/censor-overview");
            return;
          } else {
            alert("Wrong password");
            setStatus(true);
          }
        } else {
          setAuthori(true);
        }
      } else {
        alert("Wrong password");

        console.log("not ok");
        setChecked(true);
      }
    })();
  };
  return (
    <>
      {checked && <Alert message="Wrong username or password" type="error" />}
      {authori && <Alert message="You dont have permisson" type="warn" />}
      {status && <Alert message="Your account is locked" type="warn" />}
      <h1 className="label" style={{}}>
        SOUNTIFY
      </h1>
      <div className="form">
        <Form
          name="basic"
          style={{
            width: "300px",
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              size="large"
              style={{
                width: "400px",
                borderRadius: "30px",
                height: "50px",
                fontSize: "20px",
                fontFamily: "Arial",
              }}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              style={{
                width: "400px",
                borderRadius: "30px",
                height: "50px",
                fontSize: "20px",
                fontFamily: "Arial",
              }}
              placeholder="Password"
            />
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
            <Button
              type="primary"
              style={{ width: "400px", borderRadius: "30px", height: "50px" }}
              htmlType="Login"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default Login;
