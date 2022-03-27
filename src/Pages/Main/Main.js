import React, {useEffect} from 'react';
import classes from './Main.module.css'
import cn from "classnames";
import {Link} from "react-router-dom";

export const Main = (props) => {

    const invite = () => {
        window.alert("done")
    }

    return (
        <div className={classes.all}>
            <h1 className={classes.jul72}> THE BEERTERNATIONAL <wbr/> 2022</h1>
            <h2 className={classes.jul30}> GENAFOND CHAMPIONSHIP</h2>

            <div className={classes.all}>
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
                }, classes.nightZayvka)}><Link to='/InvitePage'>
                    <p className={classes.invite}> Подать заявку </p>
                </Link></button>
            </div>

        </div>
    )
}
