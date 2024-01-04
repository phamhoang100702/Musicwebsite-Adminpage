import { del, get, post, put } from "../../utils";

export const getSingerByNameAndNickName = async (name="",nickName="") => {
  return await get(`singer?name=${name}`);
};

export const addSinger = async(object)=>{
  return await post(`singer`,object)
}

export const updateSinger = async(object= {}) => {
  return await put("singer",object)
};

export const deleteSingerById = async(id) => {
  return await del(`singer/${id}`)
};

export const getAllSinger =async ()=>{
    return await get("singer");
}


export const getAllSongBySingerId =async (singerId)=>{
  return await get(`singer/${singerId}/song`)
}

export const getAllActiveSinger = async ()=>{
  const status = true;
  return await get(`singer?status=${status}`)
}

export const getAllUnActiveSinger = async ()=>{
  const status = false;
  return await get(`singer?status=${status}`)
}

export const getAlbumBySingerId = async(singerId)=>{
  return await get(`singer/${singerId}/album`)
}