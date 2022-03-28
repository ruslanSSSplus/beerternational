import React, {useEffect, useState} from 'react';
import classes from './AboutUS.module.css'
import sveti from '../../Pictures/profil_svetl.png'
import temn from '../../Pictures/uchastniki_temny.png'
import EachUser from './EachUser/EachUser'


export const AboutUs = (props) => {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch('/users', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },

        }).then(response => response.json())
            .then(response => setData(response))

    }, [])


    const deleteUser = (uid) =>{
        fetch('/del', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({id: uid})
        }).then(response => response.json())
            .then(response => setData(response))
    }


    console.log(data)
    let users = data.map((el) => <EachUser user={el} theme={props.theme} deleteUser={deleteUser} key={el.id}/>)


    return (<div>
            <h1> Участники </h1>
            <div className={classes.all}>


                <div className={classes.content}>
                    {users}
                </div>

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
