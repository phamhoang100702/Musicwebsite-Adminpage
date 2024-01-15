import React, { useState } from "react";
import { Carousel, Radio } from "antd";
import SongList from "./SongList";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const TopSong = () => {
  const [time, setTime] = useState("Day");
  const handleChange = ({ target: { value } }) => {
    setTime(value);
  };
  return (
    <>
      <Radio.Group
        onChange={handleChange}
        value={time}
        style={{
          marginBottom: 8,
        }}
      >
        <Radio.Button value="Day">DAY</Radio.Button>
        <Radio.Button value="Week">WEEK</Radio.Button>
        <Radio.Button value="Month">MONTH</Radio.Button>
        <Radio.Button value="All">ALL</Radio.Button>
      </Radio.Group>
      <Carousel >
        <div>
          <SongList style={contentStyle} time={time} />
        </div>
      </Carousel>
    </>
  );
};
export default TopSong;
