import React, {useState} from 'react';
import classes from './invitePage.module.css'
import {Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from "yup";

export const InvitePage = () => {

    const initialValues = {
        name: '',
        surname: '',
        phoneNumber: '',
        social: '',

    }
    const [data, setData] = useState(null)

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Обязательно'),
        surname: Yup.string()
            .required('Обязательно'),
        phoneNumber: Yup.string()
            .required('Обязательно')
            .length(11, 'Не наебешь'),
        social: Yup.string()
            .required('Обязательно'),
    })

    const onSubmit = (values) => {
        fetch('/api', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(response => response.json())
            .then(response => setData(response.message))

    }

    return (
        (<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} validateOnBlur>

                <Form className={classes.all}>

                    <div><Field className={classes.field} placeholder="Твоё имя" type='text' name='name'
                                component='input'/> <span className={classes.error}> <ErrorMessage name='name' /> </span></div>
                    <div><Field className={classes.field} placeholder="Твоя фамилия" type='text' name='surname'
                                component='input'/>  <span className={classes.error}> <ErrorMessage name='surname' /> </span></div>
                    <div><Field className={classes.field} placeholder="Номер телефона" type='number' name='phoneNumber'
                                component='input'/>  <span className={classes.error}> <ErrorMessage name='phoneNumber' /> </span></div>
                    <div><Field className={classes.field} placeholder="Ссылка на соц.сеть" type='text' name='social'
                                component='input'/>  <span className={classes.error}> <ErrorMessage name='social' /> </span></div>
                    <button type="submit" className={classes.sub}>submit</button>
                    <div>{!data ? null : <p  className={classes.response}> {data} </p>}</div>
                </Form>
            </Formik>
        )
    );
}
