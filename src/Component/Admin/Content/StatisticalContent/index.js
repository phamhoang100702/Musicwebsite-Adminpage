import React from "react";
import { Statistical, StatisticalDetails } from "./StatisticalDetails";
import "./styles/styles.css";
import { Row, Typography } from "antd";
import TopSinger, { SingerList } from "./TopSinger";
import  SongList  from "./SongList";
import { getTopSinger } from "../../../../services/api/singer";
import TopSong from "./TopSong";
import { Chart } from "./chart";
export const StatisticalMain = () => {
 

  return (
    <div className="wrapper">
      <StatisticalDetails />
      
      <div className="list-area">
        <div className="left-list">
          <h2>Access Times</h2>
          <Chart/>
        </div>
        <div className="singer-list">
          <h2>Top Singer</h2>
          <TopSinger />
        </div>
        <div className="song-list">
          <h2>Top Song </h2>
          <TopSong />
        </div>
      </div>
    </div>
  );
};
