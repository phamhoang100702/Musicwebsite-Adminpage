import { get, put } from "../../utils";

export const getSingerByNameAndNickName = async (name="",nickName="") => {
  return await get(`singer?name=${name}&nickname=${nickName}`);
};

export const updateSinger = async(object= {}) => {
  return await put("singer",object)
};

export const getAllSinger =async ()=>{
    return await get("singer");
}


export const getAllSongBySingerId =async (singerId)=>{
  return await get(`singer/${singerId}/song`)
}

export const getAlbumBySingerId = async(singerId)=>{
  return await get(`singer/${singerId}/album`)
}