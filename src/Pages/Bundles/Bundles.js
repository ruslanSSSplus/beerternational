import React, {useEffect} from 'react';
import classes from './Bundles.module.css'
import {arrayOfMembers} from "./legendsMassive";
import closeElement from '../../assets/Pictures/close.png'
import {useDispatch, useSelector} from "react-redux";

import dinamik from '../../assets/Pictures/DINAMIK.png'

import logoGenaNight from "../../assets/Pictures/logoGenaNight.png"
import logoTimurNight from "../../assets/Pictures/logoTimurNight.png"
import logoPashaNight from "../../assets/Pictures/logoPashaNight.png"
import logoKeksNight from "../../assets/Pictures/logoKeksNight.png"
import logoMikeNight from "../../assets/Pictures/logoMikeNight.png"
import logoMaksNight from "../../assets/Pictures/logoMaksNight.png"
import logoRuslanNight from "../../assets/Pictures/logoRuslanNight.png"
import logoSergeyNight from "../../assets/Pictures/logoSergeyNight.png"

import logoGenaDay from "../../assets/Pictures/logoGenaDay.png"
import logoTimurDay from "../../assets/Pictures/logoTimurDay.png"
import logoPashaDay from "../../assets/Pictures/logoPashaDay.png"
import logoKeksDay from "../../assets/Pictures/logoKeksDay.png"
import logoMikeDay from "../../assets/Pictures/logoMikeDay.png"
import logoMaksDay from "../../assets/Pictures/logoMaksDay.png"
import logoRuslanDay from "../../assets/Pictures/logoRuslanDay.png"
import logoSergeyDay from "../../assets/Pictures/logoSergeyDay.png"


import {
    actions, chooseBundleThunkCreater, cleanDataThunkCreater, closeBundleThunkCreater
} from "../../Redux/Reducers/bundlesReducer";


export const Bundles = (props) => {

    const dispatch = useDispatch()
    const {member, isOpen, closing, bigPicture} = useSelector((state) => state.bundles)

    useEffect(() => {

        return () => {
            dispatch(cleanDataThunkCreater())
        }
    }, [])

    const openPicture = () => {
        dispatch(actions.putIsBigPicture(true))
    }

    const closePng = () => {
        dispatch(actions.putIsBigPicture(false))
    }

    const chooseBundle = async (who) => {
        dispatch(chooseBundleThunkCreater(who))
    }
    const closeBundle = () => {
        dispatch(closeBundleThunkCreater())
    }

    const soundClickFirst = (who) => {
        let audio = new Audio()
        audio.src = arrayOfMembers[who].audioFirst[1]
        audio.autoplay = true
    }
    const soundClickSecond = (who) => {
        let audio = new Audio()
        audio.src = arrayOfMembers[who].audioSecond[1]
        audio.autoplay = true
    }

    return (<div className={classes.page}>

            {isOpen ?

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
                </div> : null}

            <div className={classes.firstLine}>
                <div><img src={props.theme ? logoKeksDay : logoKeksNight} onClick={() => chooseBundle(0)} alt={'bundle'}
                          className={classes.bundle}/>
                </div>


                <div><img src={props.theme ? logoRuslanDay : logoRuslanNight} onClick={() => chooseBundle(1)}
                          alt={'bundle'} className={classes.bundle}/>
                </div>
                <div><img src={props.theme ? logoPashaDay : logoPashaNight} onClick={() => chooseBundle(2)}
                          alt={'bundle'} className={classes.bundle}/>
                </div>

                <div><img src={props.theme ? logoTimurDay : logoTimurNight} onClick={() => chooseBundle(3)}
                          alt={'bundle'} className={classes.bundle}/>
                </div>

                <div><img src={props.theme ? logoMikeDay : logoMikeNight} onClick={() => chooseBundle(4)}
                          alt={'bundle'}
                          className={classes.bundle}/>
                </div>
                <div><img src={props.theme ? logoMaksDay : logoMaksNight} onClick={() => chooseBundle(5)}
                          alt={'bundle'}
                          className={classes.bundle}/>
                </div>
                <div><img src={props.theme ? logoGenaDay : logoGenaNight} onClick={() => chooseBundle(6)} alt={'bundle'}
                          className={classes.bundle}/>
                </div>

                <div><img src={props.theme ? logoSergeyDay : logoSergeyNight} onClick={() => chooseBundle(7)}
                          alt={'bundle'} className={classes.bundle}/></div>
            </div>
            {bigPicture ? <button className={classes.openedPicture} onClick={() => closePng()}><img
                src={arrayOfMembers[member].picture} alt={'pic'}
                className={classes.bigPicture}/> <img alt={'close'} src={closeElement} className={classes.close}/>
            </button> : null}
        </div>


    )
}
