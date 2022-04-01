import React, {useState} from 'react';
import classes from './OurHistory.module.css'
import lipsiHi from '../../INSTASAMKA - LIPSI HA.mp3'

export const OurHistory = () => {

    const arrayOfMembers = [
        {
            audio: lipsiHi,
            logo: 'https://img1.akspic.ru/previews/1/3/0/5/4/145031/145031-glaz-krug-rozovyj-resnichka-graficeskij_dizajn-500x.jpg',
            name: 'Ruslan',
            surname: 'Lyanov',
            description: 'Voin'
        },
        {
            audio: lipsiHi,
            logo: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg',
            name: 'Timur',
            surname: 'Lyanov',
            description: 'ne voin'
        },
        {
            audio: lipsiHi,
            logo: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg',
            name: 'Timur',
            surname: 'Lyanov',
            description: 'ne voin'
        },
        {
            audio: lipsiHi,
            logo: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg',
            name: 'Timur',
            surname: 'Lyanov',
            description: 'ne voin'
        },
        {
            audio: lipsiHi,
            logo: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg',
            name: 'Timur',
            surname: 'Lyanov',
            description: 'ne voin'
        },
        {
            audio: lipsiHi,
            logo: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg',
            name: 'Timur',
            surname: 'Lyanov',
            description: 'ne voin'
        },
        {
            audio: lipsiHi,
            logo: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg',
            name: 'Timur',
            surname: 'Lyanov',
            description: 'ne voin'
        },
        {
            audio: lipsiHi,
            logo: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg',
            name: 'Timur',
            surname: 'Lyanov',
            description: 'ne voin'
        },
    ]

    const [member, setMember] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const chooseBundle = (who) => {
        setMember(who)
        setIsOpen(true)
    }

    const closeBundle = () =>{
        setIsOpen(false)
    }

    return (<div>
            {/*<audio controls src={lipsiHi}> </audio>*/}
            <button onClick={() => chooseBundle(0)}>0</button>
            <button onClick={() => chooseBundle(1)}>1</button>
            <button onClick={() => chooseBundle(2)}>2</button>
            <button onClick={() => chooseBundle(2)}>3</button>
            <button onClick={() => chooseBundle(4)}>4</button>
            <button onClick={() => chooseBundle(5)}>5</button>
            <button onClick={() => chooseBundle(6)}>6</button>
            <button onClick={() => chooseBundle(7)}>7</button>

            {isOpen ?

                <div className={classes.all}>
                    {/*<audio controls src={arrayOfMembers[member].audio} className={classes.bundle}> </audio>*/}
                    <img  src={arrayOfMembers[member].logo} alt={'loog'} className={classes.logo}/>
                    <div className={classes.name}> Имя - {arrayOfMembers[member].name}</div>
                    <div className={classes.surname}> фамилия - {arrayOfMembers[member].surname}</div>
                    <div className={classes.descroption}> Описание - {arrayOfMembers[member].description}</div>
                    <button onClick={()=>closeBundle()} className={classes.close}> X </button>
                </div> : null}

        </div>


    )
}
