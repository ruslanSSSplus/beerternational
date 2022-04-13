import React, {useEffect, useState} from 'react';
import {LoginForm} from "./LoginForm";
import UserService from "./services/UserService";
import {useDispatch, useSelector} from "react-redux";
import {checkAuthThunkCreater, logoutThunkCreater} from "../../Redux/Reducers/authReducer";

export const Login = () => {

    const [users, setUsers] = useState([]);

    const dispatch = useDispatch()
    const {user,
        isAuth,
        isLoading,} = useSelector((state) => state.auth)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkAuthThunkCreater())
        }
    }, [])

   const getUsers = async () => {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    if (isLoading) {
        return <div>Загрузка...</div>
    }

    if (!isAuth) {
        return (
            <div>
                <LoginForm/>
                <button onClick={() => getUsers()}>Получить пользователей</button>
            </div>
        );
    }

    return (
        <div>
            <h1>{isAuth ? `Пользователь авторизован ${user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
            <h1>{user.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}</h1>
            <button onClick={() => dispatch(logoutThunkCreater())}>Выйти</button>
            <div>
                <button onClick={getUsers}>Получить пользователей</button>
            </div>
            {users.map(user =>
                <div key={user.email}>{user.email}</div>
            )}
        </div>
    );
};


