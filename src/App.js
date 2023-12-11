import { Layout, Breadcrumb, Menu } from "antd";
import React from "react";

import "./App.css";
import ContentAdmin from "./Content";
import { HeaderAdmin } from "./Component/Admin/Header";
import { Admin } from "./Component/Admin";

const { Header, Sider, Content, Footer } = Layout;

function App() {
  return <Admin />;
}

export default App;
