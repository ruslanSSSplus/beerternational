import React, {useState} from 'react';
import classes from './OurHistory.module.css'
import {arrayOfMembers} from "./legendsMassive";
import closeElement from '../../components/Pictures/close.png'
import {useDispatch, useSelector} from "react-redux";
import logoGena from "../../components/Pictures/logoGena.png"
import logoTimur from "../../components/Pictures/logoTimur.png"
import logoPasha from "../../components/Pictures/logoPasha.png"
import logoKeks from "../../components/Pictures/logoKeks.png"
import logoMike from "../../components/Pictures/logoMike.png"
import logoMaks from "../../components/Pictures/logoMax.png"
import logoRuslan from "../../components/Pictures/logoRuslan.png"
import logoGenaDay from "../../components/Pictures/logoGenaDay.png"
import logoTimurDay from "../../components/Pictures/logoTimurDay.png"
import logoPashaDay from "../../components/Pictures/logoPashaDay.png"
import logoKeksDay from "../../components/Pictures/logoKeksDay.png"
import logoMikeDay from "../../components/Pictures/logoMikeDay.png"
import logoMaksDay from "../../components/Pictures/logoMaksDay.png"
import logoRuslanDay from "../../components/Pictures/logoRuslanDay.png"



import aud from '../../components/Pictures/audioBETA.png'
import {actions, chooseBundleThunkCreater, closeBundleThunkCreater} from "../../Redux/historyReducer";


export const OurHistory = (props) => {

    const pic = 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg'

    const dispatch = useDispatch()
    const {member, isOpen, closing, bigPicture} = useSelector((state) => state.history)
    
    const openPicture = () =>{
        dispatch(actions.putIsBigPicture(true))
    }

    const closePng= ()=>{
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
        audio.src = arrayOfMembers[who].audioFirst
        audio.autoplay = true
    }
    const soundClickSecond = (who) => {
        let audio = new Audio()
        audio.src = arrayOfMembers[who].audioSecond
        audio.autoplay = true
    }

    return (<div className={classes.page}>

            {isOpen ?

                <div className={closing ? classes.allClose : classes.all}>
                    <div><img src={arrayOfMembers[member].logo} alt={'loog'}
                              className={classes.logo}/></div>
                    <div><img src={arrayOfMembers[member].picture} alt={'wallPaper'}
                              className={classes.picture}
                              onClick={()=>openPicture()}
                    /></div>
                    <div>
                        <img src={aud} className={classes.audio1} onClick={()=> soundClickFirst(member)} alt={'audio'}/>
                    </div>
                    <div>
                        <img src={aud} className={classes.audio2} onClick={()=> soundClickSecond(member)} alt={'audio'}/>
                    </div>
                    <img alt={'close'} className={classes.close} onClick={() => closeBundle()}
                         src={closeElement}/>
                </div> : null}

            <div className={classes.firstLine}>
                <div><img src={props.theme ? logoKeksDay : logoKeks} onClick={() => chooseBundle(0)} alt={'bundle'} className={classes.bundle}/>
                </div>
                <div><img src={props.theme ? logoGenaDay : logoGena} onClick={() => chooseBundle(1)} alt={'bundle'} className={classes.bundle}/>
                </div>
                <div><img src={props.theme ? logoPashaDay : logoPasha} onClick={() => chooseBundle(2)} alt={'bundle'} className={classes.bundle}/>
                </div>
                <div><img src={props.theme ? logoTimurDay : logoTimur} onClick={() => chooseBundle(3)} alt={'bundle'} className={classes.bundle}/>
                </div>
            </div>
            <div className={classes.secondLine}>
                <div><img src={props.theme ? logoMikeDay : logoMike} onClick={() => chooseBundle(4)} alt={'bundle'} className={classes.bundle}/>
                </div>
                <div><img src={props.theme ? logoMaksDay : logoMaks} onClick={() => chooseBundle(5)} alt={'bundle'} className={classes.bundle}/>
                </div>
                <div><img src={props.theme ? logoRuslanDay : logoRuslan} onClick={() => chooseBundle(6)} alt={'bundle'} className={classes.bundle}/>
                </div>
                <div><img src={pic} onClick={() => chooseBundle(7)} alt={'bundle'} className={classes.bundle}/></div>
            </div>
            {bigPicture ? <button className={classes.openedPicture} onClick={()=> closePng() }> <img src={arrayOfMembers[member].picture} alt={'pic'}
            className={classes.bigPicture}/> <img  alt={'close'} src={closeElement} className={classes.close}/> </button>
            :null}
        </div>


    )
}
