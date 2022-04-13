import AuthService from "../../Pages/Login/services/AuthService";
import axios from 'axios';
import {API_URL} from "../../Pages/Login/http/index";

const SET_AUTH = 'AUTH/SET_AUTH';
const SET_USER = 'AUTH/SET_USER';
const SET_LOADING = 'AUTH/SET_LOADING';



let initialState = {
    user:  {},
    isAuth:  false,
    isLoading: false,
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH:
            return {...state, isAuth: action.auth}
        case SET_USER:
            return {...state, user: action.user}
        case SET_LOADING:
            return {...state, isLoading: action.bool}
        default:
            return state;
    }
}
export const actions = {
    setAuth: (auth) => ({
        type: SET_AUTH, auth,
    }), setUser: (user) => ({
        type: SET_USER, user,
    }), setIsLoading: (bool) => ({
        type: SET_LOADING, bool,
    }),
}

export const loginThunkCreater = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            dispatch(actions.setAuth(true))
            dispatch(actions.setUser(response.data.user))
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}

export const registrationThunkCreater = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            dispatch(actions.setAuth(true))
            dispatch(actions.setUser(response.data.user))
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}

export const logoutThunkCreater = () => {
    return async (dispatch) => {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            dispatch(actions.setAuth(false))
            dispatch(actions.setUser({}))
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}

export const checkAuthThunkCreater = () => {
    return async (dispatch) => {
        dispatch(actions.setIsLoading(true))
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            dispatch(actions.setAuth(true))
            dispatch(actions.setUser(response.data.user))
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            dispatch(actions.setIsLoading(false))
        }
    }
}



export default authReducer;