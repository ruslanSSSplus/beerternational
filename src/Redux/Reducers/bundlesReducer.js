
const MEMBER = 'HISTORY/MEMBER';
const IS_OPEN = 'HISTORY/IS_OPEN';
const IS_CLOSING = 'HISTORY/IS_CLOSING';
const IS_BIG_PICTURE = 'HISTORY/IS_BIG_PICTURE';
const CLEAN_DATA = 'HISTORY/CLEAN_DATA';

let initialState = {
    member: 0,
    isOpen: false,
    closing: false,
    bigPicture: false
}


const bundlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case MEMBER:
            return {...state, member: action.member}
        case IS_OPEN:
            return {...state, isOpen: action.data}
        case IS_CLOSING:
            return {...state, closing: action.data}
        case IS_BIG_PICTURE:
            return {...state, bigPicture: action.data}
        case CLEAN_DATA:
            return {...state,
                member: 0,
                isOpen: false,
                closing: false,
                bigPicture: false}
        default:
            return state;
    }
}



export const closeBundleThunkCreater = () => {
    return async (dispatch) => {
    await dispatch(actions.putIsClosing(true))
    setTimeout(() => dispatch(actions.putIsOpen(false)), 300)
    setTimeout(() => dispatch(actions.putIsClosing(false)), 305)
}}

export const chooseBundleThunkCreater = (who) => {
    return async (dispatch) => {
        await dispatch(actions.putIsOpen(false))
        dispatch(actions.putMember(who))
        dispatch(actions.putIsOpen(false))
        dispatch(actions.putIsOpen(true))
    }
}

export const cleanDataThunkCreater = () => {
    return  (dispatch) => {
        dispatch(actions.cleanData())
    }
}


export const actions = {
    putMember: (member) => ({
        type: MEMBER,
        member,
    }),
    putIsOpen: (data) => ({
        type: IS_OPEN,
        data,
    }),
    putIsClosing: (data) => ({
        type: IS_CLOSING,
        data,
    }),
    putIsBigPicture: (data) => ({
        type: IS_BIG_PICTURE,
        data,
    }),
    cleanData: () => ({
        type: CLEAN_DATA,
    }),
}


export default bundlesReducer;