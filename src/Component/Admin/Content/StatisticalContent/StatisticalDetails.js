import React, { useEffect, useState } from "react";
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
import { getTotalCensor } from "../../../../services/api/censor";
import { getTotalSinge, getTotalSinger } from "../../../../services/api/singer";
import { getTotalPlaylist } from "../../../../services/api/playlist";
import { getTotalSong } from "../../../../services/api/song";
import { getTotalUser } from "../../../../services/api/user";
import { getTotalClick } from "../../../../services/api/click";
const shadow = "0 4px 8px rgba(0, 0, 0, 0.4)";
export const StatisticalDetails = () => {
  const [data,setData] = useState(pre => {
    return {
      ...pre,
      totalCensor : 0,
      totalSinger : 0,
      totalPlaylist : 0,
      totalUser : 0,
      totalSong : 0
    }
  })


  useEffect(()=>{
    (async()=>{
      const totalUser = await getTotalUser();
      const totalSinger = await getTotalSinger();
      const totalCensor = await getTotalCensor();
      const totalPlaylist = await getTotalPlaylist();
      const totalSong = await getTotalSong();
      const totalListen = await getTotalClick();
      console.log("songs : ",totalSong.content);
      console.log("censors : ",totalCensor.content)
      console.log("playlists : ",totalPlaylist.content);
      console.log("users : ",totalUser.content)
      console.log("singers : ",totalSinger.content);
      console.log("listens : ",totalListen.content);

      setData((pre)=>{
        return {
          ...pre,
          totalCensor : totalCensor.content,
          totalSinger : totalSinger.content,
          totalPlaylist : totalPlaylist.content,
          totalUser : totalUser.content,
          totalSong : totalSong.content,
          totalListen : totalListen.content
        }
      })
    })()
  },[])
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
            value={data.totalUser}
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
            value={data.totalSinger}
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
            value={data.totalCensor}
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
            value={data.totalSong}
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
            value={data.totalListen}
            valueStyle={{ color: "#000", fontWeight: "800" }}
            prefix={<SketchOutlined />}
           
          />
        </Card>
      </Col>
    </Row>
  );
};
