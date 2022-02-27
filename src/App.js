import './App.css';
import React from "react";

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import {BrowserRouter, Route, Redirect, useLocation} from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";

function App() {
    const { pathname } = useLocation();

    let adjustedPath = pathname;
    if (pathname.charAt(pathname.length - 1) === "/") {
        adjustedPath = pathname.slice(0, pathname.length - 1);
    }

    return (

            <div className="container">
                <Redirect from="/:url*(/+)" to={adjustedPath} />

                <Route path="/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path={["/", "/labs"]} exact={true}>
                    <Labs/>
                </Route>
                <Route path="/tuiter" exact={true}>
                    <Tuiter/>
                </Route>
            </div>

    );
}

export default App;


