import { Layout, Breadcrumb, Menu } from "antd";
import React from "react";

import "./App.css";
import ContentAdmin from "./Content";
import { HeaderAdmin } from "./Component/Admin/Header";
import { Admin } from "./Component/Admin";
import Login from "./Login";
import AllRoutes from "./Routes/Routes/Router";


function App() {
  return <AllRoutes />;
}

export default App;
