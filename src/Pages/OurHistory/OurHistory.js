import React, {useState} from 'react';
import classes from './OurHistory.module.css'
import {arrayOfMembers} from "./legendsMassive";
import closeElement from '../../components/Pictures/close.png'

import logoGena from "../../components/Pictures/logoGena.png"
import logoTimur from "../../components/Pictures/logoTimur.png"
import logoPasha from "../../components/Pictures/logoPasha.png"
import logoKeks from "../../components/Pictures/logoKeks.png"
import logoMike from "../../components/Pictures/logoMike.png"
import logoMaks from "../../components/Pictures/logoMax.png"
import logoRuslan from "../../components/Pictures/logoRuslan.png"


export const OurHistory = () => {

    const pic = 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg'

    const [member, setMember] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [closing, setClosing] = useState(false)


    const chooseBundle = async (who) => {
        await setIsOpen(false)
        setMember(who)
        setIsOpen(true)
    }

    const closeBundle = async () => {
        await setClosing(true)
        setTimeout(() => setIsOpen(false), 300)
        setTimeout(() => setClosing(false), 305)
    }


    const openPicture = () => {

    }


    return (<div className={classes.page}>

            {isOpen ?

                <div className={closing ? classes.allClose : classes.all}>
                    <div><img src={arrayOfMembers[member].logo} alt={'loog'}
                              className={classes.logo}/></div>
                    <div><img src={arrayOfMembers[member].picture} alt={'picture'}
                              className={classes.picture}
                              onClick={openPicture()}
                    /></div>
                    <div>
                        <audio controls src={arrayOfMembers[member].audioFirst} className={classes.audio1}>d</audio>
                    </div>
                    <div>
                        <audio controls src={arrayOfMembers[member].audioSecond} className={classes.audio2}>d</audio>
                    </div>
                    <img alt={'close'} className={classes.close} onClick={() => closeBundle()}
                         src={closeElement}/>
                </div> : null}

            <div className={classes.firstLine}>
                <div><img src={logoKeks} onClick={() => chooseBundle(0)} alt={'bundle'} className={classes.bundle}/>
                </div>
                <div><img src={logoGena} onClick={() => chooseBundle(1)} alt={'bundle'} className={classes.bundle}/>
                </div>
                <div><img src={logoPasha} onClick={() => chooseBundle(2)} alt={'bundle'} className={classes.bundle}/>
                </div>
                <div><img src={logoTimur} onClick={() => chooseBundle(3)} alt={'bundle'} className={classes.bundle}/>
                </div>
            </div>
            <div className={classes.secondLine}>
                <div><img src={logoMike} onClick={() => chooseBundle(4)} alt={'bundle'} className={classes.bundle}/>
                </div>
                <div><img src={logoMaks} onClick={() => chooseBundle(5)} alt={'bundle'} className={classes.bundle}/>
                </div>
                <div><img src={logoRuslan} onClick={() => chooseBundle(6)} alt={'bundle'} className={classes.bundle}/>
                </div>
                <div><img src={pic} onClick={() => chooseBundle(7)} alt={'bundle'} className={classes.bundle}/></div>

            </div>


        </div>


    )
}
