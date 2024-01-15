import { get } from "../../utils"



export const getDataForChart = async(date)=>{
    return await get(`user/chart/date/${date}`);
}