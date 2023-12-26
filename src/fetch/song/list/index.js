import { songUrl } from "../../url";

export const fetchListSong = async (name, page, pageSize) => {
  console.log(name +" " + page +"  " +  pageSize);
  try {
    const response = await fetch(
      `http://localhost:9000/api/v1/song/page?name=${name}&pageNo=${page}&pageSize=${pageSize}`,
      {
        method: "GET",
      }
    );
    console.log(`http://localhost:9000/api/v1/song/page?name=${name}&pageNo=${page}&pageSize=${pageSize}`)
    if (response.ok) {
      const result = await response.json();
      return result.object;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};
