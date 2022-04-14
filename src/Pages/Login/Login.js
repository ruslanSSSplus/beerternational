import React, {useEffect} from 'react';
import {LoginForm} from "../../components/LoginForm/LoginForm";
// import UserService from "./services/UserService";
import classes from './loginPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    checkAuthThunkCreater,
    loginThunkCreater,
    logoutThunkCreater,
    registrationThunkCreater
} from "../../Redux/Reducers/authReducer";
import Preloader from "../../components/Preloader/Preloader";

export const Login = () => {

    // const [users, setUsers] = useState([]);

    const dispatch = useDispatch()
    const {user,
        isAuth,
        isLoading, responseMessage} = useSelector((state) => state.auth)

    const login = (email, password) =>{
        dispatch(loginThunkCreater(email, password))
    }
    const registration = (email, password) =>{
        dispatch(registrationThunkCreater(email, password))
    }




   // const getUsers = async () => {
   //      try {
   //          const response = await UserService.fetchUsers();
   //          setUsers(response.data);
   //      } catch (e) {
   //          console.log(e);
   //      }
   //  }



    if (isLoading) {
        return <Preloader />
    }

    if (!isAuth) {
        return (
            <div>
                <LoginForm login={login} registration={registration}/>
                {/*<button onClick={() => getUsers()}>Получить пользователей</button>*/}
            </div>
        );
    }

    return (
        <div className={classes.all}>

            <h1>{isAuth ? `Пользователь авторизован ${user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
            <h1>{user.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}</h1>
            <h1> {responseMessage}</h1>
            {/*<div>*/}
            {/*    <button onClick={getUsers}>Получить пользователей</button>*/}
            {/*</div>*/}
            {/*{users.map(user =>*/}
            {/*    <div key={user.email}>{user.email}</div>*/}
            {/*)}*/}
        </div>
    );
};


