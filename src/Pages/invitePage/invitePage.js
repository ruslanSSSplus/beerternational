import React, {useState} from 'react';
import classes from './invitePage.module.css'
import {Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from "yup";

import avaDefault from '../../Pictures/avatar.png'
import inviteButton from '../../Pictures/inviteBut.png'
import galochka from '../../Pictures/galochka.png'
import inputPng from '../../Pictures/input.png'
import closeButton from '../../Pictures/close.png'
import closeButtonDay from '../../Pictures/closeDay.png'
import errorPng from '../../Pictures/error.png'

import cn from "classnames";
import {v4 as uuidv4} from 'uuid';
import {useNavigate} from 'react-router-dom';


export const InvitePage = (props) => {


    const navigate = useNavigate();

    const [data, setData] = useState(null)
    const [avatar, setAvatar] = useState(avaDefault)
    const [isSend, setIsSend] = useState(false)

    const initialValues = {
        name: '', age: '', social: '',
    }


    const validationSchema = Yup.object({
        name: Yup.string()
            .required(<img alt={'error'} className={classes.error} src={errorPng}/>),
        age: Yup.string()
            .required(<img alt={'error'} className={classes.error} src={errorPng}/>),
        social: Yup.string()
            .required(<img alt={'error'} className={classes.error} src={errorPng}/>),
    })

    const encodeImageFileAsURL = (element) => {
        let file = element.target.files[0];
        let reader = new FileReader();
        reader.onloadend = function () {
            setAvatar(reader.result)
        }
        reader.readAsDataURL(file);
    }

    const onSubmit = (values) => {
        setData('Loading...')
        setIsSend(true)
        submit(values.name, values.age, values.social)
    }

    const submit = async (name, age, social) => {
        let data = {
            name: name, age: age, social: social, photo: avatar, id: uuidv4()
        }
        await fetch('https://glacial-crag-96225.herokuapp.com/api', {
            method: 'POST', headers: {
                'Content-type': 'application/json',
            }, body: JSON.stringify(data)
        }).then(response => response.json())
            .then(response => setData(response.message))
        setTimeout(redirect, 2000);
    }

    const redirect = () => {
        console.log('try')
        navigate('/AboutUs');
    }

    return (<div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}
                validateOnBlur>
            <Form className={classes.all}>

                <div className={classes.content}>
                    <div><Field className={classes.field} placeholder={'Имя'} type='text' name='name'
                                component='input'/><span><ErrorMessage name='name'/></span>
                    </div>
                    <div><Field className={classes.field} placeholder={'Возраст'}
                                type='number' name='age'
                                component='input'/><span ><ErrorMessage name='age'/></span>
                    </div>
                    <div><Field className={classes.field} placeholder={'VK'} type='text'
                                name='social'
                                component='input'/><span><ErrorMessage name='social'/></span></div>
                    <div className={props.theme ? classes.responseDay : classes.responseNight}>{!data ? null : <p className={classes.response}> {data} </p>}</div>
                </div>
                <div className={cn({
                    [classes.pivoDay]: props.theme === true
                }, classes.pivoNight)}>
                    <img className={classes.photo}
                         alt={'photoAva'}
                         src={avatar}/>
                    <div className={classes.chooseFile}>
                        <label htmlFor="ava" className={classes.labelInput}>
                            <img src={inputPng} alt={'ava'}
                                 className={classes.inputPng}/></label>
                        <input onChange={encodeImageFileAsURL} type={'file'} name='photo' id="ava"
                               className={classes.customfileinput}/>
                    </div>
                    <button type="submit" disabled={!!data} className={classes.invite}><p>
                        <img src={isSend ? galochka : inviteButton}
                             alt={'button'} className={isSend ? classes.inviteButton2 : classes.inviteButton}/>
                    </p>
                    </button>
                </div>

            </Form>
        </Formik>
        <button onClick={() => props.close()} className={classes.close}><img
            src={props.theme ? closeButtonDay : closeButton}
            alt={'close'} className={classes.closeButton}/></button>
    </div>);
}
