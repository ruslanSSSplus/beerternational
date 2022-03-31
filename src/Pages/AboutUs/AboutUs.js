import React, {useEffect, useState} from 'react';
import classes from './AboutUS.module.css'
import sveti from '../../Pictures/profil_svetl.png'
import temn from '../../Pictures/uchastniki_temny.png'
import EachUser from './EachUser/EachUser'
import Preloader from "../../components/Preloader/Preloader";


export const AboutUs = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://glacial-crag-96225.herokuapp.com/getUsers1', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        }).then(response => response.json())
            .then(response => setData(response))
    }, [])


    const deleteUser = (uid) => {
        fetch('https://glacial-crag-96225.herokuapp.com/del', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',

            },
            body: JSON.stringify({uid})
        }).then(response => response.json())
            .then(response => setData(response))
    }
    console.log(data[0]===undefined )

    let users = data.map((el) => <EachUser user={el} theme={props.theme} deleteUser={deleteUser} key={el.id}
                                           isLogin={props.isLogin}/>)


    return (<div>
            <h1> Участники </h1>
            <div className={classes.all}>

                { data[0]===undefined ? <div>
                    <Preloader/>
                </div> :
                    <div className={classes.content}>
                {users}
                    </div>}

                <div className={classes.pivo}>
                    {!props.theme ? <img alt={'Pivo'}
                                         src={temn}/>
                        : null}
                    {props.theme ? <img alt={'Pivo'}
                                        src={sveti}/> : null}
                </div>
            </div>
        </div>

    );
}
