import React, {useEffect, useState} from 'react';
import classes from './AboutUS.module.css'

export const AboutUs = () => {

    const [pic, setPic] = useState('')

    const encodeImageFileAsURL = (element) => {
        let file = element.target.files[0];
        let reader = new FileReader();
        reader.onloadend = function() {
            console.log('RESULT', reader.result)
            setPic(reader.result)
        }
        reader.readAsDataURL(file);
    }
    return (
        <div className={classes.all}>
            <input onChange={encodeImageFileAsURL} type={'file'}/>
            <img src={pic} alt={'fdf'}/>
        </div>
    )
}
