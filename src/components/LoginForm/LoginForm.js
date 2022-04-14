import React, {useState} from 'react';

export const LoginForm = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
            />
            <button onClick={() => props.login(email, password)}>
                Логин
            </button>
            <button onClick={() => props.registration(email, password)}>
                Регистрация
            </button>
        </div>);
}
