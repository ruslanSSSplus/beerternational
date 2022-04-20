import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteMemberThunkCreater, getMembersThunkCreater} from "../../Redux/Reducers/membersReducer";
import {Members} from "./Members";
import {useNavigate} from "react-router-dom";


export const MembersContainer = (props) => {

    const {members, isLoading} = useSelector((state) => state.members)
    const {isLogin} = useSelector((state) => state.admin)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth)

    const loginization = () => {
        navigate('/Admin');
    }

    const deleteUser = (uid) => {
        dispatch(deleteMemberThunkCreater(uid))
    }

    useEffect(() => {
        dispatch(getMembersThunkCreater())
        // eslint-disable-next-line
    }, [])

    return (<div>
        <Members members={members} deleteUser={deleteUser} theme={props.theme} isLogin={isLogin}
                 isLoading={isLoading} loginization={loginization} user={user}/>}
    </div>)
}
