import React from 'react';
import {useNavigate} from 'react-router-dom';

import {useDispatch, useSelector} from "react-redux";
import {
    actions,
    putPhotoThunkCreater,
    submitThunkCreater
} from "../../Redux/Reducers/invitePageReducer";
import {InvitePage} from "./InvitePage";


export const InvitePageContainer = (props) => {


    const navigate = useNavigate();



    const {avatar, isSend, data} = useSelector((state) => state.invitePage)

    const {user} = useSelector((state) => state.auth)
    const dispatch = useDispatch()


    const encodeImageFileAsURL = (element) => {
        dispatch(putPhotoThunkCreater(element))
    }

    const onSubmit = async (values) => {
        if (user.isActivated) {
            await dispatch(submitThunkCreater(values.name, values.beer, values.social, avatar))
            setTimeout(redirect, 2000);
        }
        else {
            dispatch(actions.putData('Для подачить заявки необходима регистрация'))
        }
    }


    const redirect = () => {
        navigate('/Members');
    }

    return (<InvitePage onSubmit={onSubmit} close={props.close} theme={props.theme}
                        encodeImageFileAsURL={encodeImageFileAsURL} avatar={avatar} isSend={isSend} data={data}/>);
}
