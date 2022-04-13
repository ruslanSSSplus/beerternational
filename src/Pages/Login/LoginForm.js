import React, {useState} from 'react';
import classes from './Login.module.css'
import {Field, Form, Formik} from "formik";
import {getLoginizationThunkCreater} from "../../Redux/Reducers/loginReducer";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginThunkCreater, registrationThunkCreater} from "../../Redux/Reducers/authReducer";


export const LoginForm = () => {

    const navigate = useNavigate();
    const {isLogin} = useSelector((state) => state.login)
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
            />
            <button onClick={() => dispatch(loginThunkCreater(email, password))}>
                Логин
            </button>
            <button onClick={() => dispatch(registrationThunkCreater(email, password))}>
                Регистрация
            </button>
        </div>);
}
