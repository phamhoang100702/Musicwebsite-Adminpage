import React, { useEffect, useState } from "react";
import { Avatar, List } from "antd";
import { getTopSinger } from "../../../../services/api/singer";
import {
  countClickAll,
  countClickByDay,
  countClickByMonth,
  countClickByWeek,
} from "../../../../services/api/click";

const SongList = ({ time }) => {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    (async () => {
      let data;
      if (time.includes("All")) {
        console.log(time);
        data = await countClickAll();
      } else if (time.includes("Month")) {
        console.log(time);

        data = await countClickByMonth();
      } else if (time.includes("Week")) {
        console.log(time);
        data = await countClickByWeek();
      } else {
        console.log(time);
        data = await countClickByDay();
      }
      const arr = data.content.map((record) => {
        return {
          avatar: record.song.avatar,
          name: record.song.name,
          times: record.times,
        };
      });
      setDataSource([...arr]);
    })();
  }, [time]);
  return (
    <List
      itemLayout="horizontal"
      dataSource={dataSource}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <>
                {item.avatar ? (
                  <Avatar src={item.avatar} />
                ) : (
                  <Avatar
                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=2`}
                  />
                )}
              </>
            }
            title={<a>{item.name}</a>}
            description={`Listens: ${item.times}`}
          />
        </List.Item>
      )}
    />
  );
};
export default SongList;
