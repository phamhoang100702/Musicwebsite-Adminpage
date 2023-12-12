import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";
import { Card } from "antd";

export const GroupUserPlot = () => {
  const data = [
    {
      name: "Users",
      月份: "Jan.",
      月均降雨量: 18.9,
    },
    {
      name: "Users",
      月份: "Feb.",
      月均降雨量: 28.8,
    },
    {
      name: "Users",
      月份: "Mar.",
      月均降雨量: 39.3,
    },
    {
      name: "Users",
      月份: "Apr.",
      月均降雨量: 81.4,
    },
    {
      name: "Users",
      月份: "May",
      月均降雨量: 47,
    },
    {
      name: "Users",
      月份: "Jun.",
      月均降雨量: 20.3,
    },
    {
      name: "Users",
      月份: "Jul.",
      月均降雨量: 24,
    },
    {
      name: "Users",
      月份: "Aug.",
      月均降雨量: 35.6,
    },
    {
      name: "Premium Users",
      月份: "Jan.",
      月均降雨量: 12.4,
    },
    {
      name: "Premium Users",
      月份: "Feb.",
      月均降雨量: 23.2,
    },
    {
      name: "Premium Users",
      月份: "Mar.",
      月均降雨量: 34.5,
    },
    {
      name: "Premium Users",
      月份: "Apr.",
      月均降雨量: 99.7,
    },
    {
      name: "Premium Users",
      月份: "May",
      月均降雨量: 52.6,
    },
    {
      name: "Premium Users",
      月份: "Jun.",
      月均降雨量: 35.5,
    },
    {
      name: "Premium Users",
      月份: "Jul.",
      月均降雨量: 37.4,
    },
    {
      name: "Premium Users",
      月份: "Aug.",
      月均降雨量: 42.4,
    },
  ];
  const config = {
    data,
    isGroup: true,
    xField: "月份",
    yField: "月均降雨量",
    seriesField: "name",

    color: ["#28a745", "#ebd517"],

    // marginRatio: 0.1,
    label: {
      position: "middle",
      // 'top', 'middle', 'bottom'

      layout: [
        {
          type: "interval-adjust-position",
        },
        {
          type: "interval-hide-overlap",
        },
        {
          type: "adjust-color",
        },
      ],
    },
  };
  return (
    <Card
      title="Number of Users statistic"
      style={{
        width: "50%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
      }}
    >
      <Column {...config} />
    </Card>
  );
};
