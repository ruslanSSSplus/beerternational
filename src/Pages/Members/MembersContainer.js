import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteMemberThunkCreater, getMembersThunkCreater} from "../../Redux/Reducers/membersReducer";
import {Members} from "./Members";
import {useNavigate} from "react-router-dom";


export const MembersContainer = (props) => {

    const {members, isLoading} = useSelector((state) => state.members)
    const {isLogin} = useSelector((state) => state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate();


    const loginization = () => {
        navigate('/Login');
    }

    const deleteUser = (uid) => {
        dispatch(deleteMemberThunkCreater(uid))
    }

    useEffect(() => {
        dispatch(getMembersThunkCreater())
    }, [])

    return (
        <div>
            <Members members={members} deleteUser={deleteUser} theme={props.theme} isLogin={isLogin}
                     isLoading={isLoading} loginization={loginization}/>}
        </div>
    )
}
