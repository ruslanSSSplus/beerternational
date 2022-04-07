import React, {useEffect} from 'react';
import classes from './OurHistory.module.css'
import {arrayOfMembers} from "./legendsMassive";
import closeElement from '../../assets/Pictures/close.png'
import {useDispatch, useSelector} from "react-redux";
import logoGena from "../../assets/Pictures/logoGena.png"
import logoTimur from "../../assets/Pictures/logoTimur.png"
import logoPasha from "../../assets/Pictures/logoPasha.png"
import logoKeks from "../../assets/Pictures/logoKeks.png"
import logoMike from "../../assets/Pictures/logoMike.png"
import logoMaks from "../../assets/Pictures/logoMax.png"
import logoRuslan from "../../assets/Pictures/logoRuslan.png"
import logoGenaDay from "../../assets/Pictures/logoGenaDay.png"
import logoTimurDay from "../../assets/Pictures/logoTimurDay.png"
import logoPashaDay from "../../assets/Pictures/logoPashaDay.png"
import logoKeksDay from "../../assets/Pictures/logoKeksDay.png"
import logoMikeDay from "../../assets/Pictures/logoMikeDay.png"
import logoMaksDay from "../../assets/Pictures/logoMaksDay.png"
import logoRuslanDay from "../../assets/Pictures/logoRuslanDay.png"



import aud from '../../assets/Pictures/audioBETA.png'
import {
    actions,
    chooseBundleThunkCreater,
    cleanDataThunkCreater,
    closeBundleThunkCreater
} from "../../Redux/Reducers/historyReducer";


export const OurHistory = (props) => {

    const pic = 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg'

    const dispatch = useDispatch()
    const {member, isOpen, closing, bigPicture} = useSelector((state) => state.history)

    useEffect(() => {

        return () => {
            dispatch(cleanDataThunkCreater())
        }
    }, [])



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
