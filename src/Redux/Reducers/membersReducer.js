import {deleteMemberAPI, getMembersAPI} from "../../API/membersAPI";


const GET_MEMBERS = 'MEMBERS/GET_MEMBERS';
const DELETE_MEMBER = 'MEMBERS/DELETE_MEMBER';
const IS_LOADING = 'MEMBERS/IS_LOADING';

let initialState = {
    members: [],
    isLoading: true
}



const membersReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_MEMBERS:
            return {...state, members: action.members}
        case DELETE_MEMBER:
            return {...state, members: action.members}
        case IS_LOADING:
            return {...state, isLoading: action.data}
        default:
            return state;
    }
}

export const getMembersThunkCreater = () => {
    return async (dispatch) => {
        dispatch(actions.isLoadingDone(true))
        const response = await getMembersAPI()
        await dispatch(actions.getMembers(response))
        dispatch(actions.isLoadingDone(false))

    }
}
export const deleteMemberThunkCreater = (uid) => {
    return async (dispatch) => {
        dispatch(actions.isLoadingDone(true))
        const response = await deleteMemberAPI(uid)
        await dispatch(actions.deleteMember(response))
        dispatch(actions.isLoadingDone(false))
    }
}


export const actions = {
    getMembers: (members)  => ({
        type: GET_MEMBERS,
        members,
    }),
    deleteMember: (members)  => ({
        type: GET_MEMBERS,
        members,
    }),
    isLoadingDone: (data)  => ({
        type: IS_LOADING,
        data
    })
}


export default membersReducer;