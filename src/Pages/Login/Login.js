import React from 'react';
import classes from './Login.module.css'
import {Field, Form, Formik} from "formik";
import {getLoginizationThunkCreater} from "../../Redux/Reducers/loginReducer";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


export const Login = () => {

    const navigate = useNavigate();
    const {isLogin} = useSelector((state) => state.login)
    const dispatch = useDispatch()


    const initialValues = {
        login: '', password: '',
    }


    const onSubmit = async (values) => {
        await dispatch(getLoginizationThunkCreater(values))
        setTimeout(redirect, 1000);
    }


    const redirect = () => {
        navigate('/Members');
    }


    return (<div className={classes.all}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                <div><Field placeholder={'Login'}
                            type='text' name='login'
                            component='input'/></div>
                <div><Field placeholder={'Password'} type='text'
                            name='password'
                            component='input'/></div>
                <button type="submit"> Login</button>
                {isLogin ? "вы ввели верный пароль" : "Пароль неверный или не введен"}
            </Form>
        </Formik>


    </div>);
}
