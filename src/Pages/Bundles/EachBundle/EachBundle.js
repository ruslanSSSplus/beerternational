import React from 'react';
import classes from '../Bundles.module.css'
import {arrayOfMembers} from "../legendsMassive";
import closeElement from '../../../assets/Pictures/closeBannerz.png'
import dinamik from '../../../assets/Pictures/DINAMIK.png'


export const EachBundle = ({
                               member,
                               openPicture,
                               soundClickFirst,
                               soundClickSecond,
                               closeBundle,
                               closing
                           }) => {


    return (
        <div className={closing ? classes.allClose : classes.all}>
            <div><img src={arrayOfMembers[member].logo} alt={'loog'}
                      className={classes.logo}/></div>
            <div><img src={arrayOfMembers[member].picture} alt={'wallPaper'}
                      className={classes.picture}
                      onClick={() => openPicture()}
            /></div>
            <div className={classes.audioBlockInside} onClick={() => soundClickFirst(member)}><img src={dinamik}
                                                                                                   className={classes.dinamik}
                                                                                                   alt={'din'}/> {arrayOfMembers[member].audioFirst[0]}
            </div>
            <div className={classes.audioBlockInside} onClick={() => soundClickSecond(member)}><img
                src={dinamik}
                className={classes.dinamik}
                alt={'din'}/> {arrayOfMembers[member].audioSecond[0]}
            </div>

            <img alt={'close'} className={classes.close} onClick={() => closeBundle()}
                 src={closeElement}/>
        </div>


    )
}
