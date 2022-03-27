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
                }, classes.nightMain)}>Main</Link>

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

            <Content className={classes.appWrapper}>
                <div className={classes.content}>
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/Main"/>}/>
                        <Route path='/Main' element={<Main theme={theme}/>}> </Route>
                        <Route path='/Services' element={<Services/>}> </Route>
                        <Route path='/AboutUs' element={<AboutUs/>}> </Route>
                        <Route path='/FAQ' element={<FAQ/>}> </Route>
                        <Route path='/InvitePage' element={<InvitePage/>}> </Route>
                    </Routes>
                </div>
                <div className={classes.pivo}>
                    {!theme ? <img alt={'Pivo'}
                                   src={'https://sun9-22.userapi.com/impf/li7sOcpgRBTx1toQ0PHg51uj_uOE1fHYQFJuZQ/JnzwL53dUqY.jpg?size=693x939&quality=95&sign=896a326088c70ede60ad14bf904f4031&type=album'}/>
                        : null}
                    {theme ? <img alt={'Pivo'}
                                  src={'https://sun9-86.userapi.com/impf/nVg5vVwMNO-nSP14H007icFrk8XDF1PHmWoRFw/4Zl93YvLtyU.jpg?size=693x939&quality=95&sign=b423611fffd14ab78503380814a1b651&type=album'}/> : null}
                </div>
            </Content>
        </div>
    </HashRouter>);
}


export default App