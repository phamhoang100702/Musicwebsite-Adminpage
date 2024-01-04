import React from "react";
import { Statistical, StatisticalDetails } from "./StatisticalDetails";
import "./styles/styles.css";
import { Typography } from "antd";
import { SingerList } from "./SingerList";
import { SongList } from "./SongList";
export const StatisticalMain = () => {
  return (
    <div className="wrapper">
      <StatisticalDetails />


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
