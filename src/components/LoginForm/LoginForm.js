import React, {useState} from 'react';
import classes from './LoginForm.module.css'
import cn from "classnames";

export const LoginForm = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div className={classes.all}>
            <span  className={classes.emailSTR}> Почта: </span>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
                className={cn({
                    [classes.InputDay]: props.theme === true
                }, classes.InputNight)}

            />
            <span  className={classes.passSTR}> Пароль: </span>
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
                className={cn({
                    [classes.InputDay]: props.theme === true
                }, classes.InputNight)}
            />
            <div className={classes.but}>
                <button onClick={() => props.login(email, password)}  className={cn({
                    [classes.loginDay]: props.theme === true
                }, classes.loginNight)}>
                    Логин
                </button>
                <button onClick={() => props.registration(email, password)}  className={cn({
                    [classes.registDay]: props.theme === true
                }, classes.registNight)}>
                    Регистрация
                </button>
            </div>

        </div>);
}
