import React, { useEffect, useLayoutEffect, useState } from "react";
import ListSong from "./Content/Table";
import TopSider from "./Content/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../../../services/localstorage";
import { decode } from "../../../../services/api/auth";
import { setAuth } from "../../../../redux/actions/auth";

export const OverviewSong = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authData = useSelector((state) => state.authReducer.authData);
  useLayoutEffect(() => {
    if (getLocalStorage("user-token") != "") {
      if (authData == null) {
        (async()=>{
          const data = await decode(getLocalStorage("user-token"));
          console.log(data)
        if (data.status != "ok") {
          window.location.replace("http://localhost:9100/");
          return;
        }
        else dispatch(setAuth(data.content));
        })()
        
      }
    } else {
      navigate("/");
      window.location.reload();
      return;
    }
  }, []);
  return (
    <div>
      {/* <TopSider/> */}
      <ListSong />
    </div>
  );
};
