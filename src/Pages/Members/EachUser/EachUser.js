import React from 'react';
import classes from './EachUser.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

const EachUser = (props) => {

    AOS.init();

    return (
        <div className={classes.all} data-aos="fade-right">
           <img src={props.user.photo} alt={'ava'} className={classes.ava}/>
            <div className={classes.name}>Имя - {props.user.name}</div>
            <div className={classes.age}>Пиво - {props.user.beer}</div>
            <a href={props.user.social} className={classes.social}> Ссылка на вк</a>
            {props.isLogin ? <button onClick={()=> props.deleteUser(props.user.id)}> удалить</button> : null}
        </div>
    )
}

export default EachUser