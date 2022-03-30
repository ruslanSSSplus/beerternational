import {Link, Route, Routes, HashRouter, Navigate} from 'react-router-dom'
import classes from './App.module.css';
import 'antd/dist/antd.min.css'
import React, {useState} from "react";
import {Layout} from 'antd';
import {Main} from "./Pages/Main/Main";
import {Services} from "./Pages/Services/Services";
import {AboutUs} from "./Pages/AboutUs/AboutUs";
import {FAQ} from "./Pages/FAQ/FAQ";
import cn from "classnames";
import {InvitePage} from "./Pages/invitePage/invitePage";
import svetl from './Pictures/Frame.png'
import temn from './Pictures/Frame-1.png'



const {Content} = Layout;


const App = () => {

    const [theme, setTheme] = useState(true)
    const [isLogin, setIsLogin] = useState(false)


    const submitLogin = (values) =>{

        fetch('https://glacial-crag-96225.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(values)
        }).then(response => response.json())
            .then(response => setIsLogin(response.access))
    }


    const changeTheme = () => {
        setTheme(!theme)
    }

    return (<HashRouter>
        <div className={cn({
            [classes.day]: theme === true
        }, classes.night)}>

            <div className={classes.menu}>

                <Link to="/Main" className={cn({
                    [classes.dayMain]: theme === true
                }, classes.nightMain)}>
                <img alt={'logo'}
                src = {theme ? svetl : temn }  className={classes.logo}
                />
                </Link>

                <Link to='/Services' className={cn({
                    [classes.dayServices]: theme === true
                }, classes.nightServices)}>Services</Link>

                <Link to='/AboutUs' className={cn({
                    [classes.dayAbout]: theme === true
                }, classes.nightAbout)}>About Us</Link>

                <Link to='/FAQ' className={cn({
                    [classes.dayFAQ]: theme === true
                }, classes.nightFAQ)}>Admin</Link>


                <a href={'https://vk.com/clubgenafond'} className={classes.gena}>
                    <img className={classes.icon}
                         alt={'icon'}
                         src={temn}/>GenaFond </a>

                {!theme ? <button className={classes.dayNight} onClick={() => changeTheme()}>🌝</button> : null}
                {theme ? <button className={classes.dayNight} onClick={() => changeTheme()}>🌚</button> : null}

            </div>

            <Content className={classes.content}>
                <div >
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/Main"/>}/>
                        <Route path='/Main' element={<Main theme={theme}/>}> </Route>
                        <Route path='/Services' element={<Services theme={theme}/>}> </Route>
                        <Route path='/AboutUs' element={<AboutUs theme={theme} isLogin={isLogin}/>}> </Route>
                        <Route path='/FAQ' element={<FAQ theme={theme} submitLogin={submitLogin} isLogin={isLogin}/>}> </Route>
                        {/*<Route path='/InvitePage' element={<InvitePage theme={theme}/>}> </Route>*/}
                    </Routes>
                </div>

            </Content>
        </div>
    </HashRouter>);
}


export default App