import React, {useState} from 'react';
import classes from './OurHistory.module.css'
import lipsiHi from '../../INSTASAMKA - LIPSI HA.mp3'

export const OurHistory = () => {

    const pic = 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg'

    const arrayOfMembers = [
        {
            audio: lipsiHi,
            logo: 'https://img1.akspic.ru/previews/1/3/0/5/4/145031/145031-glaz-krug-rozovyj-resnichka-graficeskij_dizajn-500x.jpg',
            name: 'Ruslan',
            surname: 'Lyanov',
            description: 'Торнадо'
        },
        {
            audio: lipsiHi,
            logo: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg',
            name: 'Timur',
            surname: 'Lyanov',
            description: 'стабильный фугасный'
        },
        {
            audio: lipsiHi,
            logo: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg',
            name: 'Nikita',
            surname: 'Esirev',
            description: 'глаза разбегаются'
        },
        {
            audio: lipsiHi,
            logo: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg',
            name: 'Girihan',
            surname: 'Lyanov',
            description: 'слился лох'
        },
        {
            audio: lipsiHi,
            logo: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg',
            name: 'Pavel',
            surname: 'Pavlov',
            description: 'РУССКИЙ'
        },
        {
            audio: lipsiHi,
            logo: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg',
            name: 'Mike',
            surname: 'Novikov',
            description: 'без комментариев'
        },
        {
            audio: lipsiHi,
            logo: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg',
            name: 'Sergay',
            surname: 'Garibian',
            description: 'лох цветочный'
        },
        {
            audio: lipsiHi,
            logo: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg',
            name: 'Maksim',
            surname: 'Kirechenko',
            description: 'ВОИН'
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

            {isOpen ?

                <div className={classes.all}>
                    <audio controls src={lipsiHi} className={classes.audio}> </audio>
                    <img  src={arrayOfMembers[member].logo} alt={'loog'} className={classes.logo}/>
                    <div className={classes.name}> Имя - {arrayOfMembers[member].name}</div>
                    <div className={classes.surname}> фамилия - {arrayOfMembers[member].surname}</div>
                    <div className={classes.descroption}> Описание - {arrayOfMembers[member].description}</div>
                    <button onClick={()=>closeBundle()} className={classes.close}> X </button>
                </div> : null}
            <div className={classes.firstLine}>
                <img src={pic} onClick={() => chooseBundle(0)} alt={'bundle'} className={classes.bundle}/>
                <img src={pic} onClick={() => chooseBundle(1)} alt={'bundle'} className={classes.bundle}/>
                <img src={pic} onClick={() => chooseBundle(2)} alt={'bundle'} className={classes.bundle}/>
                <img src={pic} onClick={() => chooseBundle(2)} alt={'bundle'} className={classes.bundle}/>
            </div>
            <div className={classes.secondLine}>
                <img src={pic} onClick={() => chooseBundle(4)} alt={'bundle'} className={classes.bundle}/>
                <img src={pic} onClick={() => chooseBundle(5)} alt={'bundle'} className={classes.bundle}/>
                <img src={pic} onClick={() => chooseBundle(6)} alt={'bundle'} className={classes.bundle}/>
                <img src={pic} onClick={() => chooseBundle(7)} alt={'bundle'} className={classes.bundle}/>

            </div>


        </div>


    )
}
