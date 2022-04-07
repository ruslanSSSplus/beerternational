import React, {useEffect} from 'react';
import Preloader from "../../components/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {deleteMemberThunkCreater, getMembersThunkCreater} from "../../Redux/Reducers/membersReducer";
import {Members} from "./Members";


export const MembersContainer = (props) => {

    const {members} = useSelector((state) => state.members)
    const {isLogin} = useSelector((state) => state.login)
    const dispatch = useDispatch()

    const deleteUser = (uid) => {
        console.log('try delete')
        dispatch(deleteMemberThunkCreater(uid))
    }

    useEffect(  () => {
        dispatch(getMembersThunkCreater())
    }, [])

    return (
        <div>
            {members[0]=== undefined ? <Preloader /> :
                <Members members={members} deleteUser={deleteUser} theme={props.theme} isLogin={isLogin}/>}
        </div>




    )
}
