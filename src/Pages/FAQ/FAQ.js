import React, {useState} from 'react';
import classes from './FAQ.module.css'
import * as Yup from "yup";
import {v4 as uuidv4} from "uuid";
import {ErrorMessage, Field, Form, Formik} from "formik";
import cn from "classnames";
import temn from "../../Pictures/ragistr_temn.png";
import sveti from "../../Pictures/registr_svetl.png";


export const FAQ = (props) => {



    const initialValues = {
        login: '',
        password: '',
    }





    const onSubmit = (values) => {
        props.submitLogin(values)
    }



    return (<div className={classes.all}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form >
                    <div><Field  placeholder={'Login'}
                                type='text' name='login'
                                component='input'/></div>
                    <div><Field placeholder={'Password'} type='text'
                                name='password'
                                component='input'/></div>
                    <button type="submit"> Login</button>
                    {props.isLogin ? "вы ввели верный пароль" : "Пароль неверный или не введен"}
                </Form>
            </Formik>


        </div>
    );
}

