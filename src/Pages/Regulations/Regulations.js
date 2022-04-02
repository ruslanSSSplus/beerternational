import React from 'react';
import classes from './Regulations.module.css'
import {Field, Form, Formik} from "formik";
import header from '../../components/Pictures/headRed.png'
import bigGena from '../../components/Pictures/bigGena.png'
import bigBeer from '../../components/Pictures/bigBeer.png'
import cn from "classnames";

export const Regulations = (props) => {


    return (<div className={cn({
            [classes.allDay]: !props.theme === true
        }, classes.all)}>

                <img alt={'logofull'} src={header} className={classes.jpg}/>

            <div className={classes.info}>
                <img alt={'logofull'} src={bigGena} className={classes.gen}/>

            <div className={classes.pravila}>
            <p>
               <p> The Beerternational 2022 проводится в коллаборации с GenaFond </p>

                <p> Регламент турнира</p>
                <p>
                Игра: Counter-Strike: Global Offensive<br />
                Карта: Short Dust 2<br />
                Количество игр: 5<br />
                Количество раундов: 20<br />
                Режим: соревновательный<br />
                </p>
                <p>
                Участники делятся на две комадны. Распределять игроков по командам <br />
                будут судьи, максимально балансируя команды. Перед каждой игрой <br />
                учатник должен выпить 0,5 литров пива, которое будет утверждено <br />
                судейским коллективом. Процесс распития алкоголя должен быть снят <br />
                и отправлен в Телеграм-канал турнира для подтверждения <br />
                выполнения задания. Участник ограничен во времени: у него есть <br />
                ровно 3 минуты.<br />
                    </p>
                <p>
                Основания для дисквалификации:<br />
                Не успеть выпить пиво за 3 минуты<br />
                Отказаться пить<br />
                Проблеваться<br />
                Уснуть<br />
                    </p>
                <p>
                После окончания пяти раундов - турнир завершается. <br />
                Победитель будет определен на следующий день судьями по одному критерию - <br />
                время затраченное на распитие алкоголя. Чем оно меньше - тем <br />
                лучше.
                    </p>
                <p>
                Дополнительных номинаций всего три:<br />
                Приз зрительцских симпатий<br />
                Лучший стрелок<br />
                Торнадо<br />
                    </p>
            </p>
            </div>
                <img alt={'logofull'} src={bigBeer} className={classes.beer}/>
            </div>

        </div>
    )
        ;
}

