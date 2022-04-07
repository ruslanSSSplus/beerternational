import classes from './App.module.css';
import 'antd/dist/antd.min.css'
import React, {useState} from "react";
import {Layout} from 'antd';
import cn from "classnames";
import {AllRoutes} from "./Routing/AllRoutes";
import {AllLinks} from "./Routing/AllLinks";

const {Content} = Layout;


const App = () => {

    const [theme, setTheme] = useState(false)


    const changeTheme = () => {
        setTheme(!theme)
    }

    return (
        <div className={cn({
            [classes.day]: theme === true
        }, classes.night)}>

            <AllLinks changeTheme={changeTheme} theme={theme}/>

            <Content className={classes.content}>
                <AllRoutes theme={theme}/>
            </Content>

        </div>
    );
}


export default App