import { Layout, Breadcrumb, Menu } from "antd";
import React from "react";

import "./App.css";
import ContentAdmin from "./Content";
import { HeaderAdmin } from "./Component/Admin/Header";
import { Admin } from "./Component/Admin";
import Login from "./Login";

const { Header, Sider, Content, Footer } = Layout;

function App() {
  return <Login />;
}

export default App;
