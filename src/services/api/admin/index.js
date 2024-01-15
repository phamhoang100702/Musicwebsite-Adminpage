import { get } from "../../utils"

export const  getAdminById = (id)=>{
    return get(`admin/${id}`)
}