import React from "react";
import {Link} from "react-router-dom";
import cn from "classnames";

import classes from "../App.module.css";
import svetl from "../assets/Pictures/Frame.png";
import temn from "../assets/Pictures/Frame-1.png";
import VK from "../assets/Pictures/entypo-social_vk-with-circle.png";
import DM_LIGHT from "../assets/Pictures/DM_LIGHT.png";
import DM_DARK from "../assets/Pictures/DM_DARK.png";

export const AllLinks = ({theme, changeTheme}) => {


    return ( <div className={classes.menu}>

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
    );
}
