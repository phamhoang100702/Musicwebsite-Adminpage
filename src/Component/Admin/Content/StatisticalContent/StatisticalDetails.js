import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  AudioOutlined,
  AuditOutlined,
  CustomerServiceFilled,
  SketchOutlined,
  UserOutlined,
} from "@ant-design/icons";
const shadow = "0 4px 8px rgba(0, 0, 0, 0.4)";
export const StatisticalDetails = () => {
  return (
    <Row gutter={[12, 12]} justify="space-around">
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <Card
          bordered={false}
          style={{
            background: "#28a745",
            boxShadow: shadow,
          }}
        >
          <Statistic
            title={
              <span style={{ color: "#fff", fontSize: "1rem" }}>Users</span>
            }
            value={4953}
            valueStyle={{ color: "#fff", fontWeight: "800" }}
            prefix={<UserOutlined />}
            suffix={<span style={{ fontSize: "0.9rem" }}>users</span>}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <Card
          bordered={false}
          style={{ background: "#17a2b8", boxShadow: shadow }}
        >
          <Statistic
            title={
              <span style={{ color: "#fff", fontSize: "1rem" }}>Singers</span>
            }
            value={7749}
            valueStyle={{ color: "#fff", fontWeight: "800" }}
            prefix={<AudioOutlined />}
            suffix={<span style={{ fontSize: "0.9rem" }}>singers</span>}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <Card
          bordered={false}
          style={{ background: "#dc3545", boxShadow: shadow }}
        >
          <Statistic
            title={
              <span style={{ color: "#fff", fontSize: "1rem" }}>Censors</span>
            }
            value={7}
            valueStyle={{ color: "#fff", fontWeight: "800" }}
            prefix={<AuditOutlined />}
            suffix={<span style={{ fontSize: "0.9rem" }}>censors</span>}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <Card
          bordered={false}
          style={{ background: "#440382", boxShadow: shadow }}
        >
          <Statistic
            title={
              <span style={{ color: "#fff", fontSize: "1rem" }}>Songs</span>
            }
            value={9999}
            valueStyle={{ color: "#fff", fontWeight: "800" }}
            prefix={<CustomerServiceFilled />}
            suffix={<span style={{ fontSize: "0.9rem" }}>songs</span>}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <Card
          bordered={false}
          style={{ background: "#ebd517", boxShadow: shadow }}
        >
          <Statistic
            title={
              <span style={{ color: "#000", fontSize: "1rem" }}>
                Listens
              </span>
            }
            value={3333}
            valueStyle={{ color: "#000", fontWeight: "800" }}
            prefix={<SketchOutlined />}
           
          />
        </Card>
      </Col>
    </Row>
  );
};
