import {get,put,post,del} from "../../utils"

export const searchAllUser = async(name) => {
    return await get(`user?name=${name}`);
}

export const getUserById = async(id) => {
    return await get(`user/${id}`);
}

export const addUser = async(obj) =>{
    return await post(`user`,obj)
}

export const updateUser = async(obj) =>{
    return await put(`user`,obj);
}
export const deleteUserById = async(id)=>{
    return await del(`user/${id}`)
}

export const getTotalUser = async()=>{
    return await get(`user/count`)
}

export const getFollowedSinger = async(id)=>{
    return await get(`user/${id}/singer`)
}


export const addFollow = async(userId,singerId)=>{
    return await post(`singer/${singerId}/user/${userId}`)
  }
  
  
  export const removeFollow = async(userId,singerId)=>{
    return await del(`singer/${singerId}/user/${userId}`)
  }
  