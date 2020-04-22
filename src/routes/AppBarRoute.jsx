import React from "react";
import {Route} from "react-router-dom";

import menuData from "./menuData"


export default function AppBarRoute() {
    return (
        <>
            {menuData.map(item => <React.Fragment key={item.path}>
                <Route exact
                       key={item.path}
                       path={item.path}
                       component={item.component}/>
                {item.submenu &&
                item.submenu.map(item => <Route exact
                                                key={item.path}
                                                path={item.path}
                                                component={item.component}/>)}
            </React.Fragment>)}
        </>
    );
}
