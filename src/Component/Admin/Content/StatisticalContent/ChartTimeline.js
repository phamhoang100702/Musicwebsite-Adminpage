import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Line } from "@ant-design/plots";
import { Card } from "antd";

export const ChartTimeline = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    xField: "year",
    yField: "value",
    seriesField: "category",
    xAxis: {
      type: "time",
    },
    yAxis: {
      label: {
        formatter: (v) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  };

  return (
    <Card
      title="Data Analysis"
      style={{
        width: "50%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
      }}
    >
      <Line {...config} />
    </Card>
  );
};
