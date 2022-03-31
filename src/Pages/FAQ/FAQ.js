import React from 'react';
import classes from './FAQ.module.css'
import { Field, Form, Formik} from "formik";


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

