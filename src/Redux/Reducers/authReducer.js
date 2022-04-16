import AuthService from "../../Pages/Login/services/AuthService";
import axios from 'axios';
import {API_URL} from "../../API/authAPI";

const SET_AUTH = 'AUTH/SET_AUTH';
const SET_USER = 'AUTH/SET_USER';
const SET_LOADING = 'AUTH/SET_LOADING';
const SET_LOCAL_LOADING = 'AUTH/SET_LOCAL_LOADING';
const SET_RESPONSE = 'AUTH/SET_RESPONSE';


let initialState = {
    user:  {},
    isAuth:  false,
    isLoading: false,
    responseMessage: '',
    localLoading: false
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH:
            return {...state, isAuth: action.auth}
        case SET_USER:
            return {...state, user: action.user}
        case SET_LOADING:
            return {...state, isLoading: action.bool}
        case SET_LOCAL_LOADING:
            return {...state, localLoading: action.bool}
        case SET_RESPONSE:
            return {...state, responseMessage: action.data}
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
    }), setLocalLoading: (bool) => ({
        type: SET_LOCAL_LOADING, bool,
    }),setResponse: (data) => ({
        type: SET_RESPONSE, data,
    }),
}

export const loginThunkCreater = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(actions.setLocalLoading(true))
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('refresh', response.data.refreshToken);
            dispatch(actions.setAuth(true))
            dispatch(actions.setUser(response.data.user))
            dispatch(actions.setLocalLoading(false))
        } catch (e) {
            dispatch(actions.setResponse(e.response?.data?.message))
            console.log(e.response?.data?.message);
            dispatch(actions.setLocalLoading(false))
        }
    }
}

export const registrationThunkCreater = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(actions.setLocalLoading(true))
            const response = await AuthService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('refresh', response.data.refreshToken);
            dispatch(actions.setAuth(true))
            dispatch(actions.setUser(response.data.user))
            dispatch(actions.setLocalLoading(false))
        } catch (e) {
            dispatch(actions.setResponse(e.response?.data?.message))
            console.log(e.response?.data?.message);
            dispatch(actions.setLocalLoading(false))
        }
    }
}

export const logoutThunkCreater = () => {
    return async (dispatch) => {
        try {
            dispatch(actions.setLocalLoading(true))
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            dispatch(actions.setAuth(false))
            dispatch(actions.setUser({}))
            dispatch(actions.setLocalLoading(false))
        } catch (e) {
            dispatch(actions.setResponse(e.response?.data?.message))
            console.log(e.response?.data?.message);
            dispatch(actions.setLocalLoading(false));
        }
    }
}

export const checkAuthThunkCreater = () => {
    return async (dispatch) => {
        dispatch(actions.setIsLoading(true))
        try {
            const response = await axios.post(`${API_URL}/refresh`, {refreshToken: localStorage.getItem('refresh') ,withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('refresh', response.data.refreshToken);
            dispatch(actions.setAuth(true))
            dispatch(actions.setUser(response.data.user))
        } catch (e) {
            dispatch(actions.setResponse(e.response?.data?.message))
            console.log(e.response?.data?.message);
        } finally {
            dispatch(actions.setIsLoading(false))
        }
    }
}



export default authReducer;