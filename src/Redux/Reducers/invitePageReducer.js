import avaDefault from '../../assets/Pictures/avatar.png'
import {submitInviteAPI} from "../../API/invitePageAPI";

const PUT_PHOTO = 'INVITE/PUT_PHOTO';
const PUT_DATA = 'INVITE/PUT_DATA';
const PUT_IS_SEND = 'INVITE/PUT_IS_SEND';


let initialState = {
    avatar: avaDefault,
    isSend: false,
    data: null
}


const invitePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_PHOTO:
            return {...state, avatar: action.photo}
        case PUT_DATA:
            return {...state, data: action.data}
        case PUT_IS_SEND:
            return {...state, isSend: action.data}
        default:
            return state;
    }
}


export const putPhotoThunkCreater = (element) => {
    return async (dispatch) => {
        if (window.FileReader) {
            let file = element.target.files[0];
            let reader = new FileReader();
            reader.onloadend = function () {
                dispatch(actions.putPhoto(reader.result))
            }
            if (file && file.type.match('image.*')) {
                reader.readAsDataURL(file);
            }
        }
    }
}
export const submitThunkCreater = (name, beer, social, avatar) => {
    return async (dispatch) => {
        dispatch(actions.putData('Loading...'))
        dispatch(actions.putIsSend(true))
        let response = await submitInviteAPI(name, beer, social, avatar)
        dispatch(actions.putData(response))
    }
}

export const actions = {
    putPhoto: (photo) => ({
        type: PUT_PHOTO,
        photo,
    }),
    putData: (data) => ({
        type: PUT_DATA,
        data,
    }),
    putIsSend: (data) => ({
        type: PUT_IS_SEND,
        data,
    }),
}


export default invitePageReducer;