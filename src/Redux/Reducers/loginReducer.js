import {submitLoginAPI} from "../../API/loginAPI";

const iS_LOGIN = 'LOGIN/iS_LOGIN';


let initialState = {
    isLogin: false
}


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case iS_LOGIN:
            return {...state, isLogin: action.isLogin}
        default:
            return state;
    }
}

export const getLoginizationThunkCreater = (values) => {
    return async (dispatch) => {
        const response = await submitLoginAPI(values)
        dispatch(actions.loginization(response))
    }
}


export const actions = {
    loginization: (isLogin) => ({
        type: iS_LOGIN, isLogin,
    })
}


export default loginReducer;