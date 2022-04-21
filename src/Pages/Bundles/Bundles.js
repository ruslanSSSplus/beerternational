import React, {useEffect} from 'react';
import classes from './Bundles.module.css'
import {arrayOfMembers} from "./legendsMassive";
import closeElement from '../../assets/Pictures/closeBannerz.png'
import {useDispatch, useSelector} from "react-redux";

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
import {EachBundle} from "./EachBundle/EachBundle";


export const Bundles = (props) => {

    const dispatch = useDispatch()
    const {member, isOpen, closing, bigPicture} = useSelector((state) => state.bundles)

    useEffect(() => {

        return () => {
            dispatch(cleanDataThunkCreater())
        }
        // eslint-disable-next-line
    }, [])

    const openPicture = () => {
        dispatch(actions.putIsBigPicture(true))
    }

    const closePng = () => {
        dispatch(actions.putIsBigPicture(false))
    }

    const chooseBundle = async (who) => {
        if(!closing){
            dispatch(chooseBundleThunkCreater(who))
        }
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
                <EachBundle member={member} openPicture={openPicture} soundClickFirst={soundClickFirst}
                            soundClickSecond={soundClickSecond} closeBundle={closeBundle} closing={closing}/>
                : null}

            <div className={classes.firstLine} >
                <div><img src={props.theme ? logoKeksDay : logoKeksNight}  onClick={() => chooseBundle(0)} alt={'bundle'}
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
