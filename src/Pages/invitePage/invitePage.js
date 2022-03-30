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
    const [avatar, setAvatar] = useState(temn)

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
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(response => setData(response.message))
    }

    return (<div >
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}
                    validateOnBlur>
                <Form className={classes.all}>

                    <div className={classes.content}>
                        <div><Field className={classes.field} placeholder={'Имя'} type='text' name='name'
                                    component='input'/></div>
                        <div><Field className={classes.field} placeholder={'Возраст'}
                                    type='number' name='age'
                                    component='input'/></div>
                        <div><Field className={classes.field} placeholder={'VK'} type='text'
                                    name='social'
                                    component='input'/></div>


                        <div>{!data ? null : <p className={classes.response}> {data} </p>}</div>
                        <div> <ErrorMessage name='name' /> </div>
                    </div>
                    <div className={classes.pivo}>
                        <img className={classes.photo}
                             alt={'photo'}
                             src={avatar}/>
                        <div className={classes.chooseFile}>
                            <input onChange={encodeImageFileAsURL} type={'file'}  name='photo'
                                   className={classes.customfileinput}/>
                        </div>
                        <button type="submit" className={cn({
                            [classes.dayZayvka]: props.theme === true
                        }, classes.nightZayvka)}><p className={classes.invite}> Вступить </p></button>
                    </div>

                </Form>
            </Formik>


            <button onClick={()=>props.close()} className={classes.close}> close</button>
        </div>
    );
}
