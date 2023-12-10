import { Layout, Breadcrumb, Menu } from "antd";
import React from "react";

import "./App.css"
import ContentAdmin from "./Content";
import MenuSiderbar from "./Component/Menu";


const { Header, Sider, Content,Footer } = Layout;
const handleClick = ()=>{
  window.location.href="/user"
}

function App() {
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={false}>
        <div className="logo-vertical"> </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{
            height: "300px",
            fontSize: "20px",
          }}
          items={MenuSiderbar}
        ></Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            background: "pink",
            height: "60px",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          Header
        </Header>
        <Content
          style={{
            minHeight: '620px',
            fontSize: 20,
            padding: 20,
            textAlign: "center",
          }}
        >
          <ContentAdmin/>
        </Content>
        <Footer style={{textAlign:"center"}}> About us </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
