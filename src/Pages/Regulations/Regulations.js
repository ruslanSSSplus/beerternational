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
               <p> <span className={classes.light}>The Beerternational 2022 </span> проводится в коллаборации с <span className={classes.light}> GenaFond </span> </p>

                <p className={classes.reglament}> Регламент турнира</p>
                <p>
                Игра: <span className={classes.light}> Counter-Strike: Global Offensive </span>  <br />
                Карта: <span className={classes.light}>  Short Dust 2<br /></span>
                Количество игр: <span className={classes.light}> 5</span> <br />
                Количество раундов: <span className={classes.light}> 20</span><br />
                Режим: <span className={classes.light}>соревновательный </span><br />
                </p>
                <p>
                Участники делятся на две комадны. Распределять игроков по командам <br />
                будут судьи, максимально балансируя команды. Перед каждой игрой <br />
                учатник должен выпить 0,5 литров пива, которое будет утверждено <br />
                судейским коллективом. Процесс распития алкоголя должен быть снят <br />
                и отправлен в Телеграм-канал турнира для подтверждения <br />
                выполнения задания. Участник ограничен во времени: у него есть <br />
                <span className={classes.light}>ровно 3 минуты. </span> <br />
                    </p>
                <span>
                <span className={classes.light}>Основания для дисквалификации: </span><br />
                Не успеть выпить пиво за 3 минуты<br />
                Отказаться пить<br />
                Проблеваться<br />
                Уснуть<br />
                    </span>
                <p>
                После окончания пяти раундов - турнир завершается. <br />
                Победитель будет определен на следующий день судьями по одному критерию - <br />
                <span className={classes.light}> время затраченное на распитие алкоголя.</span> Чем оно меньше - тем <br />
                лучше.
                    </p>
                <p>
                Дополнительных номинаций всего три:<br />
                <span className={classes.light}> ∙ Приз зрительцских симпатий </span><br />
                <span className={classes.light}> ∙ Лучший стрелок </span><br />
                <span className={classes.light}> ∙ Торнадо</span><br />
                    </p>
            </div>
                <img alt={'logofull'} src={bigBeer} className={classes.beer}/>
            </div>

        </div>
    )
        ;
}

