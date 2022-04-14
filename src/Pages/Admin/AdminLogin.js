import React from 'react';

import classes from './AdminPage.module.css'
import {getLoginizationThunkCreater} from "../../Redux/Reducers/adminReducer";

import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
export const AdminLogin = () => {


    const dispatch = useDispatch()

    const initialValues = {
        login: '', password: ''
    }



    const onSubmit = (values) => {
        console.log(values)
        dispatch(getLoginizationThunkCreater(values))
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form className={classes.all}>

            <div className={classes.all}>
            Панель админa
            <Field  placeholder={'Логин'} type='text' name='login'
                        component='input'/>

            <Field placeholder={'пароль'}
                        type='text' name='password'
                        component='input'/>


            <button type="submit"> войти</button>
        </div>

            </Form>
        </Formik>

    );
};


