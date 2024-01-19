import {post,get} from "../../utils"

export const saveClick = async(object)=>{
    return await post("click",object);
}

export const countClickByDay = async ()=>{
    return await get("click/day");
}

export const countClickByMonth =async ()=>{
    return await get("click/month");
}
export const countClickByWeek = async()=>{
    return await get("click/week");
}

export const countClickAll =async ()=>{
    return await get("click/all");
}

export const getTotalClick =async ()=>{
    return await get("click/count");
}

// http://localhost:9000/api/v1/click/history/user/20


/// get top song


export const getHistoryByUserId =async (userId)=>{
    return await get(`click/history/user/${userId}`);
}

export const getTopSongWithMostListensByCategory =async ()=>{
    return await get(`song/topByCategory`);
}

