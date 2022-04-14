import classes from './App.module.css';
import 'antd/dist/antd.min.css'
import React, {useEffect, useState} from "react";
import {Layout} from 'antd';
import cn from "classnames";
import {AllRoutes} from "./Routing/AllRoutes";
import {AllLinks} from "./Routing/AllLinks";
import {checkAuthThunkCreater} from "./Redux/Reducers/authReducer";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "./components/Preloader/Preloader";

const {Content} = Layout;


const App = () => {
    const {isAuth, isLoading} = useSelector((state) => state.auth)
    const [theme, setTheme] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkAuthThunkCreater())
        }
    }, [])

    const changeTheme = () => {
        setTheme(!theme)
    }

    return ( <div>
        { isLoading ? <Preloader /> :
    <div className={cn({
        [classes.day]: theme === true
    }, classes.night)}>

        <AllLinks changeTheme={changeTheme} theme={theme} isAuth={isAuth}/>

        <Content className={classes.content}>
            <AllRoutes theme={theme}/>
        </Content>

    </div>
        }

    </div> );
}


export default App