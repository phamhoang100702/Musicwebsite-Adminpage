const initialValues = {
    authData : null
}

 const authReducer = (state = initialValues,action)=>{
    switch(action.type){
        case "SET_AUTH" : {
            return {
                ...state,
                authData : {
                    ...action.payload
                }
            }
        }
        case "LOG_OUT" : {
            return {
                
            }
        }
        default :{
            return state;
        }
    }
}
export default authReducer