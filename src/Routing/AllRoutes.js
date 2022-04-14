import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {Main} from "../Pages/Main/Main";
import {Bundles} from "../Pages/Bundles/Bundles";
import {MembersContainer} from "../Pages/Members/MembersContainer";
import {Regulations} from "../Pages/Regulations/Regulations";
import {Login} from "../Pages/Login/Login";
import {AdminLogin} from "../Pages/Admin/AdminLogin";

export const AllRoutes = ({theme}) => {


    return (<Routes>
        <Route path="/" element={<Navigate replace to="/Main"/>}/>
        <Route path='/Main' element={<Main theme={theme}/>}> </Route>
        <Route path='/Bundles' element={<Bundles theme={theme}/>}> </Route>
        <Route path='/Members' element={<MembersContainer theme={theme}/>}> </Route>
        <Route path='/Regulations' element={<Regulations theme={theme}/>}> </Route>
        <Route path='/Login' element={<Login theme={theme}/>}> </Route>
        <Route path='/Admin' element={<AdminLogin theme={theme}/>}> </Route>
        {/*<Route path='/InvitePage' element={<InvitePage theme={theme}/>}> </Route>*/}
    </Routes>);
}
