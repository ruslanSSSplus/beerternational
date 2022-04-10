import React from 'react';
import classes from './Members.module.css'
import EachUser from './EachUser/EachUser'
import AOS from "aos";
import 'aos/dist/aos.css';
import evgeniaPng from '../../assets/Pictures/evgenia.jpg'
import cn from "classnames";
import Preloader from "../../components/Preloader/Preloader";
import nagrada from '../../assets/Pictures/nagrada.png'


export const Members = (props) => {

    AOS.init();

    let users = props.members.map((el) => <EachUser user={el} theme={props.theme} deleteUser={props.deleteUser}
                                                    key={el.id}
                                                    isLogin={props.isLogin}/>)

    const evgenia = {
        photo: evgeniaPng,
        name: 'Евгения',
        beer: 'Сидр',
        social: 'https://vk.com/evgeniasims'
    }

    return (
        <div className={classes.all}>


            <div className={cn({
                [classes.logoDay]: props.theme === true
            }, classes.logoNight)}>
                The  Beerternational 2
            </div>

            <div className={classes.commentator}>
                <span className={classes.com}> Комментаторы</span>
                <div className={props.theme ? classes.dayUsers : classes.nightUsers}>
                    <EachUser user={evgenia} theme={props.theme} deleteUser={() => {
                    }} key={228}
                              isLogin={false}/>
                </div>
            </div>
            <div className={classes.previos}>
                <p> Предыдущие результаты</p>
                <p className={classes.beerint}> The<br/> Beerternational<br/> 2021</p>
                <p><span className={classes.timur}> <img src={nagrada} className={classes.nagrada} alt={'nagrada'}/> Тимур - 6 минут</span><br/>
                    <span className={classes.others}>
                       Руслан - 8 минут<br/>
                   Максим - 10 минут<br/>
                    Михаил - 11 минут<br/>
                   Никита - 13 минут<br/>
                    Павел - нет данных<br/>
                   Гена - выбыл<br/>
                    Сергей - даун
                   </span></p>
            </div>

            <div className={classes.content}>
                <div className={classes.spisok} onClick={()=> props.loginization()}>
                    Список участников
                </div>
                <div className={props.theme ? classes.dayUsers : classes.nightUsers}>
                    {props.isLoading ? <Preloader/> : users}
                </div>
            </div>
            }

        </div>

    );
}
