import {deleteMemberAPI, getMembersAPI} from "../API/membersAPI";


const GET_MEMBERS = 'MEMBERS/GET_MEMBERS';
const DELETE_MEMBER = 'MEMBERS/DELETE_MEMBER';


let initialState = {
    members: []
}



const membersReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_MEMBERS:
            return {...state, members: action.members}
        case DELETE_MEMBER:
            return {...state, members: action.members}
        default:
            return state;
    }
}

export const getMembersThunkCreater = () => {
    return async (dispatch) => {
        const response = await getMembersAPI()
        dispatch(actions.getMembers(response))
    }
}
export const deleteMemberThunkCreater = (uid) => {
    console.log('try disp')
    return async (dispatch) => {
        const response = await deleteMemberAPI(uid)
        dispatch(actions.deleteMember(response))
        console.log(response)
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
    })
}


export default membersReducer;