import {get,put,post,del} from "../../utils"

export const getAllCensor = async() => {
    return await get(`censor`);
}

export const getCensorById = async(id) => {
    return await get(`censor/${id}`);
}

export const addCensor = async(obj) =>{
    return await post(`censor`,obj)
}

export const updateCensor = async(obj) =>{
    return await put(`censor`,obj);
}
export const deleteCensorById = async(id)=>{
    return await del(`censor/${id}`)
}