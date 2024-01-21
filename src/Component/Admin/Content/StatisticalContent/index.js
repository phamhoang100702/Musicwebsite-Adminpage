import React, { useEffect, useLayoutEffect, useState } from "react";
import { Statistical, StatisticalDetails } from "./StatisticalDetails";
import "./styles/styles.css";
import { Row, Typography } from "antd";
import TopSinger, { SingerList } from "./TopSinger";
import  SongList  from "./SongList";
import { getTopSinger } from "../../../../services/api/singer";
import TopSong from "./TopSong";
import { Chart } from "./chart";
import { useDispatch, useSelector } from "react-redux";
import { getLocalStorage } from "../../../../services/localstorage";
import { decode } from "../../../../services/api/auth";
import { setAuth } from "../../../../redux/actions/auth";
import { useNavigate } from "react-router-dom";
export const StatisticalMain = () => {
  const [check,setCheck] = useState(true);
  const dispatch =useDispatch();
  let authData = useSelector((state)=>state.authReducer.authData);
  const navigate = useNavigate();
  useLayoutEffect(()=>{
    setCheck(!check);
    console.log("vao day ")
    if(getLocalStorage("user-token")!=""){
      if(authData==null){
       (async()=>{
        const data = await decode(getLocalStorage("user-token"));
        console.log(data)
        if(data.status!="ok"){
          window.location.replace("http://localhost:9100")
          return;
        } 
       else  dispatch(setAuth(data.content));
       })() 
      }
    }
    else {
      navigate("/");
      window.location.reload();
      return;
    }
  },[])
 

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
