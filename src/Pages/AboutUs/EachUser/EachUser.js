import React from 'react';
import classes from './EachUser.module.css'


const EachUser = (props) => {


    return (
        <div className={classes.all}>
           <img src={props.user.photo} alt={'ava'} className={classes.ava}/>
            <div className={classes.name}>Имя - {props.user.name}</div>
            <div className={classes.age}>Возраст - {props.user.age}</div>
            <div className={classes.social}>VK {props.user.social}</div>
            <button onClick={()=> props.deleteUser(props.user.id)}> удалить</button>
        </div>
    )
}

export default EachUser