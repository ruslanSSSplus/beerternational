import {Link, Route, Routes, HashRouter, Navigate} from 'react-router-dom'
import classes from './App.module.css';
import 'antd/dist/antd.min.css'
import React, {useState} from "react";
import {Layout} from 'antd';
import {Main} from "./Pages/Main/Main";
import {OurHistory} from "./Pages/OurHistory/OurHistory";
import {Regulations} from "./Pages/Regulations/Regulations";
import cn from "classnames";
import svetl from './assets/Pictures/Frame.png'
import temn from './assets/Pictures/Frame-1.png'
import DM_LIGHT from './assets/Pictures/DM_LIGHT.png'
import DM_DARK from './assets/Pictures/DM_DARK.png'
import VK from './assets/Pictures/entypo-social_vk-with-circle.png'
import {Login} from "./Pages/Login/Login";
import {MembersContainer} from "./Pages/Members/MembersContainer";


const {Content} = Layout;


const App = () => {

    const [theme, setTheme] = useState(false)



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

                <Link to='/Members' className={cn({
                    [classes.dayMembers]: theme === true
                }, classes.nightMembers)}>Участники</Link>

                <Link to='/OurHistory' className={cn({
                    [classes.dayOurHistory]: theme === true
                }, classes.nightOurHistory)}>История</Link>

                <Link to='/Regulations' className={cn({
                    [classes.dayRegulations]: theme === true
                }, classes.nightRegulations)}>Правила</Link>

                <div className={classes.gena}>
                    <a href={'https://vk.com/clubgenafond'} className={classes.gena2} >
                        <img className={classes.icon}
                             alt={'icon'}
                             src={VK}/> GenaFond  </a>
                </div>


               <img src={theme ? DM_LIGHT :DM_DARK} className={classes.dayNight} onClick={() => changeTheme()} alt={'theme'}/>

            </div>

            <Content className={classes.content}>
                <div >
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/Main"/>}/>
                        <Route path='/Main' element={<Main theme={theme}/>}> </Route>
                        <Route path='/OurHistory' element={<OurHistory theme={theme}/>}> </Route>
                        <Route path='/Members' element={<MembersContainer theme={theme}/>}> </Route>
                        <Route path='/Regulations' element={<Regulations theme={theme} />}> </Route>
                        <Route path='/Login' element={<Login theme={theme} />}> </Route>
                        {/*<Route path='/InvitePage' element={<InvitePage theme={theme}/>}> </Route>*/}
                    </Routes>
                </div>

            </Content>

        </div>
    </HashRouter>);
}


export default App