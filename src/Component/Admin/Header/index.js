import { NotificationFilled } from "@ant-design/icons";
import { Avatar, Layout } from "antd";
import React from "react";
import { Button, Dropdown, Flex } from "antd";
import { deleteLocalStorage } from "../../../services/localstorage";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/actions/auth";

const { Header } = Layout;



export const HeaderAdmin = () => {
  const dispatch = useDispatch();
  const handleClick = ()=>{
    deleteLocalStorage("user-token");
    dispatch(logOut());
    window.location.replace("/")
  }
  const items = [
    {
      key: "logout",
      label: (
        <a onClick={handleClick}>Log out</a>
      ),
    },
    {
      key: "faq",
      label: "FAQs",
    },
    {
      key: "setting",
      label: "Setting",
    },
  ];



  return (
    <>
      <Header
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div className="dropdown-header">
          <Dropdown.Button
            menu={{
              items,
            
            }}
          >
            ADMIN
          </Dropdown.Button>
        </div>
        <NotificationFilled style={{ color: "#f5f5f5", fontSize: "1rem" }} />
      </Header>
    </>
  );
};
