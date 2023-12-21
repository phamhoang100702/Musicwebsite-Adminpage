import { userUrl } from "../url"

let listUser = [];

export const fetchListUser = async() => {
    await fetch(userUrl,{
        method:"GET"
    }).then((response)=>{
        console.log(response)
        if(response.ok){
            return response.json();
        }
    }).then((data)=>{
        listUser = [...data.object];
        return data.object;
    }).catch(error=>{
        console.log(error);
    })
};

export {listUser};