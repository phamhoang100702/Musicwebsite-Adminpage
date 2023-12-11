import React from "react";
import { Statistical, StatisticalDetails } from "./StatisticalDetails";
import { ChartTimeline } from "./ChartTimeline";
import "./styles.css";
import { Typography } from "antd";
export const StatisticalMain = () => {
  return (
    <>
      <StatisticalDetails />

      <div className="chart-area">
        <ChartTimeline />
      </div>
    </>
  );
};
