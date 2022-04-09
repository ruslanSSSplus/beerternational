import React from 'react';
import classes from './Members.module.css'
import sveti from '../../assets/Pictures/profil_svetl.png'
import temn from '../../assets/Pictures/uchastniki_temny.png'
import EachUser from './EachUser/EachUser'
import {useNavigate} from 'react-router-dom';
import AOS from "aos";
import 'aos/dist/aos.css';


export const Members = (props) => {

    AOS.init();
    const navigate = useNavigate();


    let users = props.members.map((el) => <EachUser user={el} theme={props.theme} deleteUser={props.deleteUser} key={el.id}
                                           isLogin={props.isLogin}/>)

    const redirect = () => {

        navigate('/Login');
    }

    return (<div className={classes.page}>
            <h1> Участники </h1>
            <div className={classes.all}>

                    <div className={classes.content}>
                        {users}
                    </div>}


                    <img alt={'Pivo'} onClick={() => redirect()}
                         src={props.theme ? sveti : temn} className={classes.pivo} />



            </div>
        </div>

    );
}