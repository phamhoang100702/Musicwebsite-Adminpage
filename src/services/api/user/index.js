import {get,put,post,del} from "../../utils"

export const getAllUser = async() => {
    return await get(`user`);
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