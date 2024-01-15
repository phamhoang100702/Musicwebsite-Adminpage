import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Bar } from "@ant-design/plots";
import { getDataForChart } from "../../../../services/api/chart";

export const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    (async () => {
      const data = await getDataForChart(10);

      setData([...data.content]);
    })();
  };
  const config = {
    data,
    xField: "date",
    yField: "times",
    seriesField: "type",
    isGroup: "true",
    color : ['#E24617','#7A7EAF','#CD2562','#DFF51A'],
    colorField: ({type})=>{
      if(type=='SONG') return 'SONG'
      else if(type=='SINGER') return 'SINGER'
      else if(type=='LISTENS') return 'LISTENS'
      else return 'USER'  
    },
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
    size : "large",
    
  };

  return <Bar {...config}
  />;
};
