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
                }, classes.nightFAQ)}>FAQ</Link>


                <a href={'https://vk.com/clubgenafond'} className={classes.gena}>
                    <img className={classes.icon}
                         alt={'icom'}
                         src={'https://cdn-icons.flaticon.com/png/512/3670/premium/3670029.png?token=exp=1648314735~hmac=65cc45387367b28a67eeef8e605d0dc2'}/>GenaFond </a>

                {!theme ? <button className={classes.dayNight} onClick={() => changeTheme()}>🌝</button> : null}
                {theme ? <button className={classes.dayNight} onClick={() => changeTheme()}>🌚</button> : null}

            </div>

            <Content className={classes.content}>
                <div >
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/Main"/>}/>
                        <Route path='/Main' element={<Main theme={theme}/>}> </Route>
                        <Route path='/Services' element={<Services theme={theme}/>}> </Route>
                        <Route path='/AboutUs' element={<AboutUs theme={theme}/>}> </Route>
                        <Route path='/FAQ' element={<FAQ theme={theme}/>}> </Route>
                        <Route path='/InvitePage' element={<InvitePage theme={theme}/>}> </Route>
                    </Routes>
                </div>

            </Content>
        </div>
    </HashRouter>);
}


export default App