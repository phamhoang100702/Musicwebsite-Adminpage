import React from "react";
import { Statistical, StatisticalDetails } from "./StatisticalDetails";
import { ChartTimeline } from "./ChartTimeline";
import "./styles/styles.css";
import { Typography } from "antd";
import { GroupUserPlot } from "./GroupUserPlot";
import { SingerList } from "./SingerList";
import { SongList } from "./SongList";
export const StatisticalMain = () => {
  return (
    <div className="wrapper">
      <StatisticalDetails />

      <div className="chart-area">
        <ChartTimeline />
        <GroupUserPlot />
      </div>

      <div className="list-area">
        <div className="singer-list">
          <SingerList />
        </div>
        <div className="song-list">
          <SongList />
        </div>
      </div>
    </div>
  );
};
