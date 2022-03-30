import React, {useState} from 'react';
import classes from './Main.module.css'
import cn from "classnames";
import {Link} from "react-router-dom";
import sveti from '../../Pictures/pivo_svetl.png'
import temn from '../../Pictures/pivo_temn.png'
import {InvitePage} from "../invitePage/invitePage";

export const Main = (props) => {

    let [isOpen, setIisOpen] = useState(false)
    let show = () => {
        setIisOpen(true)
    }
    let close = () => {
        console.log('close')
        setIisOpen(false)
    }

    return (
        <div className={classes.all}>
            <div className={classes.content}>
                <h1 className={classes.jul72}> THE BEERTERNATIONAL <wbr/> 2022</h1>
                <h2 className={classes.jul30}> GENAFOND CHAMPIONSHIP</h2>

                <div className={classes.info}>
                    <p className={cn({
                        [classes.day]: props.theme === true
                    }, classes.nightSmall)}> Ежегодный пивной турнир среди членов клуба Genafond
                        возвращается! <wbr/> Запаситесь
                        терпением и пивом, докажите вашим зависникам, что именно вы достойны звания чемпиона.
                        <wbr/>
                        Перепейте их,
                        перестреляйте или красиво сойдите с дистанции.
                    </p>
                    <p className={cn({
                        [classes.day]: props.theme === true
                    }, classes.nightLarge)}> Успейте подать заявку и побороться за звание лучшего подпиваса 2022ого года.
                        <wbr/>
                        Ваша победа в вашем бокале!
                    </p>
                    <button className={cn({
                        [classes.dayZayvka]: props.theme === true
                    }, classes.nightZayvka)} onClick={()=> show()}>
                        <p className={classes.invite}> Подать заявку </p>
                   </button>
            </div>
            </div>

                <div className={classes.pivo}>
                    {!props.theme ? <img alt={'Pivo'}
                                   src={temn}/>
                        : null}
                    {props.theme ? <img alt={'Pivo'}
                                  src={sveti}/> : null}
                </div>s
            {isOpen ?
                <div className={classes.inviteBlank}>
                    <InvitePage close={close} theme={props.theme}/>
                </div> : null
            }
        </div>

    )
}
