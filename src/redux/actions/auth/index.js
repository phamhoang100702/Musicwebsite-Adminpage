
export const setAuth = (data)=>{
    return {
        type : "SET_AUTH",
        payload : data
    }
}

export const logOut = ()=>{
    return {
        type : "LOG_OUT"
    }
}