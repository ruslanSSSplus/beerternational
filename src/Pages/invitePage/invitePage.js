import React, {useState} from 'react';
import classes from './invitePage.module.css'
import {Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from "yup";
import sveti from '../../Pictures/registr_svetl.png'
import temn from '../../Pictures/ragistr_temn.png'
import cn from "classnames";
import { v4 as uuidv4 } from 'uuid';



export const InvitePage = (props) => {


    const [data, setData] = useState(null)
    const [avatar, setAvatar] = useState('https://ex-beton.ru/images/home/client-say/00.jpg')

    const initialValues = {
        name: '',
        age: '',
        social: '',
    }


    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Обязательно'),
        age: Yup.string()
            .required('Обязательно'),
        social: Yup.string()
            .required('Обязательно'),
    })

    const encodeImageFileAsURL = (element) => {
        let file = element.target.files[0];
        let reader = new FileReader();
        reader.onloadend = function() {
            setAvatar(reader.result)
        }
        reader.readAsDataURL(file);
    }

    const onSubmit = (values) => {
        submit(values.name, values.age, values.social)
    }

    const submit = (name, age, social) =>{
        let data ={
            name: name,
            age: age,
            social: social,
            photo: avatar,
            id: uuidv4()
        }
        fetch('https://glacial-crag-96225.herokuapp.com/api', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(response => setData(response.message))
    }

    return (<div className={classes.all}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}
                    validateOnBlur>
                <Form className={classes.content}>
                    <p className={classes.resquit}> Рекрутирование</p>
                    <img className={classes.photo}
                         alt={'photo'}
                         src={avatar}/>
                 <div className={classes.chooseFile}>
                     <input onChange={encodeImageFileAsURL} type={'file'}  name='photo'
                     className={classes.customfileinput}/>
                 </div>
                    <div><Field className={classes.field} placeholder={'Имя'} type='text' name='name'
                                component='input'/></div>
                    <div><Field className={classes.field} placeholder={'Возраст'}
                                type='number' name='age'
                                component='input'/></div>
                    <div><Field className={classes.field} placeholder={'VK'} type='text'
                                name='social'
                                component='input'/></div>

                    <button type="submit" className={cn({
                        [classes.dayZayvka]: props.theme === true
                    }, classes.nightZayvka)}><p className={classes.invite}> Вступить </p></button>
                    <div>{!data ? null : <p className={classes.response}> {data} </p>}</div>
                    <div> <ErrorMessage name='name' /> </div>

                </Form>
            </Formik>

            <div className={classes.pivo}>
                {!props.theme ? <img alt={'Pivo'}
                                     src={temn}/>
                    : null}
                {props.theme ? <img alt={'Pivo'}
                                    src={sveti}/> : null}
            </div>
        </div>
    );
}
