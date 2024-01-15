import React, { useEffect, useState } from "react";
import { Avatar, List } from "antd";
import { getTopSinger } from "../../../../services/api/singer";

const TopSinger = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setData((await getTopSinger(10)).content);
    })();
  }, []);
  console.log("avata>>>>>>>>", data);
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
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
            description={`Followers: ${item.followers}`}
          />
        </List.Item>
      )}
    />
  );
};
export default TopSinger;
