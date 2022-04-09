import React from 'react';
import classes from './invitePage.module.css'
import {Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from "yup";
import inviteButton from '../../assets/Pictures/inviteBut.png'
import galochka from '../../assets/Pictures/galochka.png'
import inputPng from '../../assets/Pictures/input.png'
import closeButton from '../../assets/Pictures/close.png'
import closeButtonDay from '../../assets/Pictures/closeDay.png'
import errorPng from '../../assets/Pictures/error.png'

import cn from "classnames";



export const InvitePage = (props) => {


    const initialValues = {
        name: '', beer: '', social: '',
    }


    const validationSchema = Yup.object({
        name: Yup.string()
            .required(<img alt={'error'} className={classes.error} src={errorPng}/>),
        beer: Yup.string()
            .required(<img alt={'error'} className={classes.error} src={errorPng}/>),
        social: Yup.string()
            .required(<img alt={'error'} className={classes.error} src={errorPng}/>) ,
    })

    const encodeImageFileAsURL = (element) => {
        props.encodeImageFileAsURL(element)
    }

    const onSubmit = async (values) => {
        props.onSubmit(values)
    }


    return (<div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}
                validateOnBlur>
            <Form className={classes.all}>

                <div className={classes.content}>
                    <div><Field className={classes.field} placeholder={'Имя'} type='text' name='name'
                                component='input' /><span><ErrorMessage name='name'/></span>
                    </div>
                    <div><Field className={classes.field} placeholder={'Любимое пиво'}
                                type='text' name='beer'
                                component='input'/><span ><ErrorMessage name='beer'/></span>
                    </div>
                    <div><Field className={classes.field} placeholder={'VK'} type='text'
                                name='social'
                                component='input'/><span><ErrorMessage name='social'/></span></div>
                    <div className={props.theme ? classes.responseDay : classes.responseNight}>{!props.data ? null : <p className={classes.response}> {props.data} </p>}</div>
                </div>
                <div className={cn({
                    [classes.pivoDay]: props.theme === true
                }, classes.pivoNight)}>
                    <img className={classes.photo}
                         alt={'photoAva'}
                         src={props.avatar}/>
                    <div className={classes.chooseFile}>
                        <label htmlFor="ava" className={classes.labelInput}>
                            <img src={inputPng} alt={'ava'}
                                 className={classes.inputPng}/></label>
                        <input onChange={encodeImageFileAsURL} type={'file'} name='photo' id="ava"
                               className={classes.customfileinput}/>
                    </div>
                    <button type="submit" disabled={!!props.data} className={classes.invite}><p>
                        <img src={props.isSend ? galochka : inviteButton}
                             alt={'button'} className={props.isSend ? classes.inviteButton2 : classes.inviteButton}/>
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
