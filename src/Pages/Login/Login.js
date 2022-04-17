import React from 'react';
import {LoginForm} from "../../components/LoginForm/LoginForm";
// import UserService from "./services/UserService";
import classes from './Login.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    loginThunkCreater,
    registrationThunkCreater
} from "../../Redux/Reducers/authReducer";
import Preloader from "../../components/Preloader/Preloader";

import logoDay from '../../assets/Pictures/auth_logoDay.png'
import logoNight from '../../assets/Pictures/auth_logoNight.png'
import cn from "classnames";

export const Login = (props) => {

    // const [users, setUsers] = useState([]);

    const dispatch = useDispatch()
    const {user,
        isAuth,
        isLoading,
        responseMessage,
        localLoading
    } = useSelector((state) => state.auth)

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



    return (
        <div className={cn({
            [classes.allDay]: props.theme === true
        }, classes.allNight)}>
           <div className={classes.blank}>
               { localLoading ? <div className={classes.preloader}> <Preloader /> </div> : <span className={classes.blankLogin}>
                   { !isAuth ? <div >
                           <LoginForm login={login} registration={registration} theme={props.theme}/>
                           <p className={classes.error}> {responseMessage}</p></div> :
                       <div className={classes.answer}>
                           <p className={classes.author}> {`Пользователь авторизован ${user.email}`} </p>
                           <p className={classes.podt}>{user.isActivated ? 'Аккаунт подтвержден' : 'Подтвердите аккаунт'}</p>
                       </div>}
               </span>}

            </div>
            <div className={classes.logo}>
                <img src={props.theme ? logoDay : logoNight} className={classes.png} alt={'f'}/>
            </div>


            {/*<div>*/}
            {/*    <button onClick={getUsers}>Получить пользователей</button>*/}
            {/*</div>*/}
            {/*{users.map(user =>*/}
            {/*    <div key={user.email}>{user.email}</div>*/}
            {/*)}*/}
        </div>
    );
};


