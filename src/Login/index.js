import React, { useEffect, useLayoutEffect, useState } from "react";
import { Alert, Button, Checkbox, Flex, Form, Input, notification } from "antd";
import {  decode, loginAdmin } from "../services/api/auth";
import { redirect, useNavigate } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../services/localstorage";
import { getUserById } from "../services/api/user";
import { getAdminById } from "../services/api/admin";
import { getCensorById } from "../services/api/censor";
import "./index.css";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/actions/auth";

const onFinishFailed = (errorInfo) => {
  // console.log("Failed:", errorInfo);
};
const Login = () => {
  const [checked, setChecked] = useState(false);
  const [authori, setAuthori] = useState(false);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const [api,contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  

  const openNotificationWithIcon = (type,message,desciption) => {
    api[type]({
      message: message,
      description: desciption
    });
  };
  const onFinish = (values) => {
    (async () => {
      // console.log("Success:", values);
      let object = {
        username: values.username,
        password: values.password,
      };
      const jwt = await loginAdmin(object);
      console.log(jwt);
      if (jwt.status == "ok") {
        const authInfo = await decode(jwt.content.token);
        // console.log(authInfo.content)
        if(authInfo.content.role == 0){
          // console.log(jwt.content.token)
          alert("Login success");
          setLocalStorage("user-token",jwt.content.token);
          dispatch(setAuth(authInfo.content))
          navigate("/admin-statistical");
        }
        else if(authInfo.content.role == 4){
          if(authInfo.content.status){
            alert("Login success");
            window.location.replace("http://localhost:9200/censor-overview");
          }
          else{
            setStatus(true);
           openNotificationWithIcon("warning","Warning","You account is locked");
           setStatus(true)
          }
        }
        else {
          openNotificationWithIcon("warning","Warning","You dont have permission");
          setAuthori(true)
        }
      } else {
        openNotificationWithIcon("warning","Warning","Wrong password or username");

        // console.log("not ok");
        setChecked(true);
      }
    })();
  };

  useLayoutEffect(()=>{
    if(getLocalStorage("user-token")!=""){
      (async()=>{
        const data = await decode(getLocalStorage("user-token"));
        if(data.status=="ok"){
          if(data.content.role==0){
            navigate("admin-statistical")
          }
          // else (data.content.role == 4)
          // {
          //   window.location.replace("http://localhost:9200/censor-overview")
          // }
        }
      })()
    }
  },[])
  return (
    <>
      {contextHolder}
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
