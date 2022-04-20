import React, {useEffect, useState} from 'react';
import classes from './Main.module.css'
import cn from "classnames";
import sveti from '../../assets/Pictures/pivoMainDay.png'
import temn from '../../assets/Pictures/pivoMainNight.png'
import {InvitePageContainer} from "../invitePage/InvitePageContainer";
import AOS from 'aos'
import 'aos/dist/aos.css';
import {useDispatch} from "react-redux";
import {cleanThunkCreater} from "../../Redux/Reducers/invitePageReducer";



export const Main = (props) => {

    AOS.init();

    useEffect(() => {

        return () => {
            dispatch(cleanThunkCreater())
        }
        // eslint-disable-next-line
    }, [])

    const dispatch = useDispatch()
    let [isOpen, setIisOpen] = useState(false)
    let show = () => {
        setIisOpen(true)
    }
    let close = () => {
        dispatch(cleanThunkCreater())
        setIisOpen(false)
    }



    return (<div className={classes.all}>
            <div className={classes.content} data-aos="fade-right"
                 data-aos-anchor="#example-anchor"
                 data-aos-offset="500"
                 data-aos-duration="500">
                <h1 className={props.theme ? classes.jul72Day : classes.jul72Night}> THE BEERTERNATIONAL <wbr/> 2022</h1>
                <h2 className={classes.jul30}> GENAFOND CHAMPIONSHIP</h2>
                <div className={classes.info}>
                    <p className={cn({
                        [classes.day]: props.theme === true
                    }, classes.nightSmall)}> Ежегодный пивной турнир среди членов клуба Genafond
                        возвращается! Запаситесь
                        терпением и пивом,<br/> докажите вашим зависникам, что именно вы достойны звания
                        чемпиона.<br/> Перепейте их,
                        перестреляйте или красиво сойдите с дистанции.
                    </p>
                    <p className={cn({
                        [classes.day]: props.theme === true
                    }, classes.nightSmall)}> Успейте подать заявку и побороться за звание лучшего подпиваса 2022ого
                        года.
                        <br/> Ваша победа в вашем бокале!
                    </p>
                    <button className={cn({
                        [classes.dayZayvka]: props.theme === true
                    }, classes.nightZayvka)} onClick={() => show()}>
                        <p className={classes.invite}> Подать заявку </p>
                    </button>
                </div>
            </div>

    <div className={classes.logo}>
        <img alt={'Pivo'}
             src={props.theme ? sveti : temn}
             className={classes.png}
        />
    </div>


            {isOpen ? <div className={classes.inviteBlank}>
                <InvitePageContainer close={close} theme={props.theme}/>
            </div> : null}
        </div>

    )
}
