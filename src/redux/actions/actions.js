
export const addCategory = (payload) =>{
    return {
        type : 'category/addCategory',
        payload
    }
}
export const removeCategory = (payload) =>{
    return {
        type : 'category/removeCategory',
        payload
    }
}

export const setCategory = (payload) =>{
    return {
        type : 'category/setCategory',
        payload
    }
}

